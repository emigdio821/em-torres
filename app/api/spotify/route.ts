import { NextResponse } from 'next/server'
import type { SpotiAccessToken, SpotiResponse, SpotiSong } from '@/types'

const {
  SPOTIFY_CLIENT_ID: clientId,
  SPOTIFY_CLIENT_SECRET: clientSecret,
  SPOTIFY_REFRESH_TOKEN: refreshToken,
} = process.env

const initialState = {
  album: '',
  title: '',
  artist: '',
  songUrl: '',
  isPlaying: false,
  albumImageUrl: '',
}

const basic = Buffer.from(`${clientId ?? ''}:${clientSecret ?? ''}`).toString('base64')
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    cache: 'no-store',
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken as string,
    }),
  })

  return (await response.json()) as SpotiAccessToken
}

const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken()

  return await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-store',
  })
}

export async function GET(): Promise<NextResponse<SpotiResponse>> {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status >= 400) {
    return NextResponse.json(initialState)
  }

  const song: SpotiSong = await response.json()
  const title = song.item.name
  const isPlaying = song.is_playing
  const album = song.item.album.name
  const songUrl = song.item.external_urls.spotify
  const albumImageUrl = song.item.album.images[0].url
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ')

  return NextResponse.json({
    album,
    title,
    artist,
    songUrl,
    isPlaying,
    albumImageUrl,
  })
}
