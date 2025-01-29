'use client'

import type { SimplifiedTrack } from '@/types'
import { IconHeadphones } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { BlurImage } from './blur-image'

export function SpotifyActivity() {
  async function getSpotifyActivity() {
    const { data } = await axios.get<SimplifiedTrack | null>('/api/spotify')
    return data
  }

  const { data, isLoading, error } = useQuery({
    queryFn: getSpotifyActivity,
    queryKey: ['spotify-activity'],
  })

  return (
    <>
      <div>
        {isLoading ? (
          <div className="flex items-center gap-2">
            <Skeleton className="size-10 rounded-sm shadow-md" />
            <div className="flex flex-col gap-1">
              <Skeleton className="mt-2 h-1 w-24 rounded-md" />
              <Skeleton className="my-2 h-1 w-28 rounded-md" />
            </div>
          </div>
        ) : (
          <AnimatePresence key={data?.album_img_url}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
            >
              <div className="bg-muted flex size-10 items-center justify-center rounded-sm shadow-xs">
                {data?.album_img_url ? (
                  <BlurImage priority src={data.album_img_url} alt="Song cover" />
                ) : (
                  <IconHeadphones size={14} />
                )}
              </div>

              <div className="text-sm">
                {data?.name && data.href ? (
                  <Button variant="link" asChild>
                    <a href={data.href} target="_blank" rel="noreferrer">
                      {data.name}
                    </a>
                  </Button>
                ) : (
                  <p className="truncate font-medium">{data?.name || 'Spotify'}</p>
                )}
                <p className="truncate text-xs">{`by ${data?.artist}` || 'Nothing'}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {error && <p className="text-destructive text-xs">{error.message}</p>}
    </>
  )
}
