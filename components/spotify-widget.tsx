'use client'

import type { SpotiResponse } from '@/types'
import { AnimatePresence, motion } from 'framer-motion'
import { FaSpotify } from 'react-icons/fa'
import { LuMusic2 } from 'react-icons/lu'
import useSWR, { type Fetcher } from 'swr'

import { cn } from '@/lib/utils'

import { BlurImage } from './blur-image'
import { Equalizer } from './equalizer'
import { Button, buttonVariants } from './ui/button'
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
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                onClick={() => {
                  void mutate()
                }}
                className="h-auto rounded-md bg-transparent p-0 hover:bg-transparent"
              >
                {isPlaying ? (
                  <AnimatePresence mode="wait" key={isPlaying ? data.albumImageUrl : ''}>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <div className="relative h-20 w-20 overflow-hidden rounded-md bg-transparent shadow-md transition-all hover:brightness-75">
                        <BlurImage src={data.albumImageUrl} alt="Album" priority />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <div
                    className={cn(
                      'flex h-20 w-20 items-center justify-center rounded-md bg-zinc-800 transition-all hover:brightness-75',
                      {
                        'animate-pulse': isLoading,
                      },
                    )}
                  >
                    <LuMusic2 className="text-white" />
                  </div>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Refresh song data</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="flex w-full flex-col items-start gap-1 md:w-80">
          <div className="flex items-start gap-2">
            <FaSpotify
              size={20}
              className={cn({
                'animate-pulse': isLoading,
              })}
            />
            {isPlaying ? <Equalizer /> : null}
          </div>
          {isPlaying ? (
            <AnimatePresence mode="wait" key={isPlaying ? data.albumImageUrl : ''}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col"
              >
                <a
                  target="_blank"
                  href={data.songUrl}
                  className={cn(
                    buttonVariants({ variant: 'link', size: 'sm' }),
                    '!line-clamp-2 h-auto p-0 text-base font-semibold transition-none',
                  )}
                >
                  {data.title}
                </a>
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
