import { NextResponse } from 'next/server'
import type { SpotiAccessToken, SpotiResponse, SpotiSong } from '@/types'
import { envServerSchema } from '@/lib/server-env'

export const revalidate = 0

const {
  SPOTIFY_CLIENT_ID: clientId,
  SPOTIFY_CLIENT_SECRET: clientSecret,
  SPOTIFY_REFRESH_TOKEN: refreshToken,
} = envServerSchema

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const initialState = {
  album: '',
  title: '',
  artist: '',
  songUrl: '',
  isPlaying: false,
  albumImageUrl: '',
  albumReleaseDate: '',
  popularity: 0,
  trackNumber: 0,
  albumTotalTracks: 0,
}

async function fetchSpotify(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(endpoint, options)
  if (!response.ok) {
    console.log({
      origin: endpoint,
      status: response.status,
      message: response.statusText,
    })
    return null
  }
  return response
}

async function getAccessToken(): Promise<SpotiAccessToken | null> {
  const response = await fetchSpotify(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })
  if (!response) return null
  return (await response.json()) as SpotiAccessToken
}

async function getNowPlaying(): Promise<SpotiSong | null> {
  const { access_token: accessToken } = (await getAccessToken()) ?? {}
  if (!accessToken) return null

  const response = await fetchSpotify(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  if (!response) return null

  return (await response.json()) as SpotiSong
}

function mapSongData(song: SpotiSong) {
  const {
    item: { name, album, external_urls, popularity, track_number, artists },
    is_playing,
  } = song

  const artist = artists.map((_artist) => _artist.name).join(', ')
  const albumImageUrl = album.images[0]?.url || ''
  const albumReleaseDate = album.release_date
  const albumTotalTracks = album.total_tracks

  return {
    album: album.name,
    title: name,
    artist,
    songUrl: external_urls.spotify,
    isPlaying: is_playing,
    albumImageUrl,
    albumReleaseDate,
    popularity,
    trackNumber: track_number,
    albumTotalTracks,
  }
}

export async function GET(): Promise<NextResponse<SpotiResponse>> {
  const song = await getNowPlaying()

  if (!song) return NextResponse.json(initialState)

  const mappedData = mapSongData(song)
  return NextResponse.json(mappedData)
}
