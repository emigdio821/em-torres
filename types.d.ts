export interface ISpotiResponse {
  isPlaying: boolean
  album?: string
  title?: string
  artist?: string
  songUrl?: string
  albumImageUrl?: string
}

export interface IAccessTokenRes {
  access_token: string
}

export interface ISpotiSong {
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
