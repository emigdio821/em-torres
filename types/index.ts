export interface ISpotiResponse {
  album: string
  title: string
  artist: string
  songUrl: string
  isPlaying: boolean
  albumImageUrl: string
}

export interface ISpotiSong {
  is_playing: boolean
  item: {
    album: {
      name: string
      images: {
        url: string
      }[]
    }
    name: string
    artists: {
      name: string
    }[]
    external_urls: {
      spotify: string
    }
  }
}
