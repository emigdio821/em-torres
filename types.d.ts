export interface AudioFeats {
  danceability: number
  energy: number
  key: number
  loudness: number
  mode: number
  speechiness: number
  acousticness: number
  instrumentalness: number
  liveness: number
  valence: number
  tempo: number
  type: string
  id: string
  uri: string
  track_href: string
  analysis_url: string
  duration_ms: number
  time_signature: number
}

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
  audioFeats?: AudioFeats
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
