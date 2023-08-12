import { NextResponse } from 'next/server'
import type { SpotiAccessToken, SpotiResponse, SpotiSong } from '@/types'

export const revalidate = 0

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
  albumReleaseDate: '',
  popularity: 0,
  trackNumber: 0,
  albumTotalTracks: 0,
}

const basic = Buffer.from(`${clientId ?? ''}:${clientSecret ?? ''}`).toString('base64')
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const AUDIO_FEATS_ENDPOINT = 'https://api.spotify.com/v1/audio-features'

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    next: {
      revalidate: 2400,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken as string,
    }),
  })

  return (await response.json()) as SpotiAccessToken
}

async function getNowPlaying() {
  const { access_token: accessToken } = await getAccessToken()

  return await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

async function getAudioFeatures(trackId: string) {
  const { access_token: accessToken } = await getAccessToken()

  return await fetch(`${AUDIO_FEATS_ENDPOINT}/${trackId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export async function GET(): Promise<NextResponse<SpotiResponse>> {
  const response = await getNowPlaying()

  if (response.status === 204 || !response.ok) {
    console.log({
      origin: 'getNowPlaying',
      status: response.status,
      message: response.statusText,
    })
    return NextResponse.json(initialState)
  }

  let audioFeats
  const song: SpotiSong = await response.json()
  const featsResponse = await getAudioFeatures(song.item.id)

  if (!featsResponse.ok) {
    console.log({
      origin: 'getAudioFeatures',
      status: featsResponse.status,
      message: featsResponse.statusText,
    })
  } else {
    audioFeats = await featsResponse.json()
  }

  const title = song.item.name
  const isPlaying = song.is_playing
  const album = song.item.album.name
  const songUrl = song.item.external_urls.spotify
  const albumImageUrl = song.item.album.images[0].url
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
  const albumReleaseDate = song.item.album.release_date
  const popularity = song.item.popularity
  const trackNumber = song.item.track_number
  const albumTotalTracks = song.item.album.total_tracks

  return NextResponse.json({
    album,
    title,
    artist,
    songUrl,
    isPlaying,
    albumImageUrl,
    albumReleaseDate,
    popularity,
    trackNumber,
    albumTotalTracks,
    audioFeats,
  })
}
