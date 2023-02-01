import type { NextApiRequest, NextApiResponse } from 'next'
import { ISpotiResponse, ISpotiSong } from '@/types'

const {
  SPOTIFY_CLIENT_ID: clientId,
  SPOTIFY_CLIENT_SECRET: clientSecret,
  SPOTIFY_REFRESH_TOKEN: refreshToken,
} = process.env

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken as string,
    }),
  })

  return response.json()
}

const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<ISpotiResponse>,
) {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status >= 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const song: ISpotiSong = await response.json()
  const title = song.item.name
  const isPlaying = song.is_playing
  const album = song.item.album.name
  const songUrl = song.item.external_urls.spotify
  const albumImageUrl = song.item.album.images[0].url
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ')

  return res.status(200).json({
    album,
    title,
    artist,
    songUrl,
    isPlaying,
    albumImageUrl,
  })
}
