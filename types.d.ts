export interface SpotiResponse {
  isPlaying: boolean
  album: string
  title: string
  artist: string
  songUrl: string
  albumImageUrl: string
}

export interface SpotiAccessToken {
  access_token: string
}

export interface SpotiSong {
  is_playing: boolean
  item: {
    album: {
      name: string
      images: Array<{
        url: string
      }>
    }
    name: string
    artists: Array<{
      name: string
    }>
    external_urls: {
      spotify: string
    }
  }
}
