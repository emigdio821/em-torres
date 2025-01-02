export interface SpotiResponse {
  isPlaying: boolean
  album: string
  title: string
  artist: string
  songUrl: string
  albumImageUrl: string
  albumReleaseDate: string
  popularity: number
  trackNumber: number
  albumTotalTracks: number
}

export interface SpotiAccessToken {
  access_token: string
}

export interface SpotiSong {
  is_playing: boolean
  item: {
    id: string
    popularity: number
    track_number: number
    album: {
      name: string
      total_tracks: number
      release_date: string
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
