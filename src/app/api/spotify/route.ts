import { NextResponse } from 'next/server'
import { envServerSchema } from '@/lib/server-env'
import type { RecentlyPlayed, SimplifiedTrack, SpotifyAccessToken } from '@/types'

const {
  SPOTIFY_CLIENT_ID: clientId,
  SPOTIFY_CLIENT_SECRET: clientSecret,
  SPOTIFY_REFRESH_TOKEN: refreshToken,
} = envServerSchema

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

async function getAccessToken() {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }).toString(),
    })

    if (!response.ok) throw new Error(`Token request failed with status ${response.status}`)

    return (await response.json()) as SpotifyAccessToken
  } catch (err) {
    console.error('Unable to get access token', err)
    return null
  }
}

async function getRecentlyPlayed() {
  try {
    const token = await getAccessToken()
    if (!token) throw new Error('Missing token')

    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    })

    if (!response.ok) throw new Error(`Recently played request failed with status ${response.status}`)

    return (await response.json()) as RecentlyPlayed
  } catch (err) {
    console.error('Unable to get recently played', err)
    return null
  }
}

function getSimplifiedTrack(recentlyPlayed: RecentlyPlayed) {
  const { items } = recentlyPlayed
  const item = items[0]
  const track = item.track

  const artist = track.artists.map((_artist) => _artist.name).join(', ')
  const albumImageUrl = track.album.images[0]?.url || ''

  return {
    artist,
    name: track.name,
    played_at: item.played_at,
    album_name: track.album.name,
    album_img_url: albumImageUrl,
    href: track.external_urls.spotify,
  } satisfies SimplifiedTrack
}

export async function GET() {
  const recentlyPlayed = await getRecentlyPlayed()

  if (!recentlyPlayed) return NextResponse.json(null)

  const track = getSimplifiedTrack(recentlyPlayed)
  return NextResponse.json(track)
}
