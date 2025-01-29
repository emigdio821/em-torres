export interface ISpotifyAccessToken {
  access_token: string
}

export interface IRecentlyPlayed {
  href: string
  limit: number
  next: string
  cursors: Cursors
  items: Item[]
}

export interface Cursors {
  after: string
  before: string
}

export interface Item {
  track: Track
  played_at: string
}

export interface SimplifiedTrack {
  href: string
  name: string
  artist: string
  played_at: string
  album_name: string
  album_img_url: string
}

export interface Track {
  album: Album
  artists: Artist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIds
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  popularity: number
  preview_url: string | null
  track_number: number
  type: string
  uri: string
  is_local: boolean
}

export interface Album {
  album_type: string
  total_tracks: number
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  type: string
  uri: string
  artists: Artist[]
}

export interface ExternalUrls {
  spotify: string
}

export interface Image {
  url: string
  height: number
  width: number
}

export interface Artist {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface ExternalIds {
  isrc: string
}
