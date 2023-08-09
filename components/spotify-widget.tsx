'use client'

import type { SpotiResponse } from '@/types'
import { AnimatePresence, motion } from 'framer-motion'
import { BiLogoSpotify } from 'react-icons/bi'
import { LuMusic2 } from 'react-icons/lu'
import useSWR, { type Fetcher } from 'swr'

import { cn } from '@/lib/utils'

import { Equalizer } from './equalizer'
import { SongDetailsDialog } from './song-details-dialog'
import { Skeleton } from './ui/skeleton'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

export default function SpotiWidget() {
  const fetcher: Fetcher<SpotiResponse> = async (url: string) => {
    return await fetch(url).then(async (r) => await r.json())
  }
  const { data, mutate, error, isLoading } = useSWR('/api/spotify', fetcher)
  const isPlaying = data?.isPlaying

  return (
    <>
      <div className="flex items-center gap-4">
        {isPlaying ? (
          <SongDetailsDialog data={data} />
        ) : (
          <div
            className={cn(
              'flex h-20 w-20 min-w-[5rem] items-center justify-center rounded-md bg-zinc-800 text-sm transition-all group-hover:brightness-75 group-focus-visible:brightness-75',
              {
                'animate-pulse': isLoading,
              },
            )}
          >
            <LuMusic2 className="text-white" />
          </div>
        )}
        <div className="flex w-full flex-col items-start gap-1 sm:w-80">
          <div className="flex items-center gap-2">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger
                  onClick={() => {
                    void mutate()
                  }}
                  className="rounded-full outline-none transition-opacity hover:opacity-80 focus-visible:opacity-80 focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <BiLogoSpotify
                    size={20}
                    className={cn({
                      'animate-pulse': isLoading,
                    })}
                  />
                </TooltipTrigger>
                <TooltipContent side="top">
                  <span>Refresh song data</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {isPlaying ? <Equalizer /> : null}
          </div>
          {isPlaying ? (
            <AnimatePresence mode="wait" key={isPlaying ? data.albumImageUrl : ''}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col"
              >
                <span className="line-clamp-2 font-semibold">{data.title}</span>
                <span className="line-clamp-2">{data.artist}</span>
              </motion.div>
            </AnimatePresence>
          ) : (
            <>
              {isLoading ? (
                <div className="flex flex-col gap-1">
                  <Skeleton className="mt-3 h-2 w-24 rounded-md" />
                  <Skeleton className="my-2 h-2 w-28 rounded-md" />
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="font-semibold">Spotify</span>
                  <span>No song playing</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {error ? <p className="mt-2 text-xs text-red-500 dark:text-red-400">{error}</p> : null}
    </>
  )
}
