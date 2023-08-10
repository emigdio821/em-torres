import Image from 'next/image'
import type { SpotiResponse } from '@/types'
import { AnimatePresence, motion } from 'framer-motion'
import { LuArrowUpRight } from 'react-icons/lu'

import { cn } from '@/lib/utils'

import { AudioFeatsChart } from './audio-feats-chart'
import { Button, buttonVariants } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

interface SongDetailsDialogProps {
  data: SpotiResponse
}

export function SongDetailsDialog({ data }: SongDetailsDialogProps) {
  return (
    <Dialog>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <DialogTrigger asChild>
            <TooltipTrigger asChild>
              <Button
                type="button"
                className="group h-auto rounded-md bg-transparent p-0 hover:bg-transparent"
              >
                <AnimatePresence mode="wait" key={data.albumImageUrl}>
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <Image
                      width={140}
                      height={140}
                      alt="Song cover"
                      src={data.albumImageUrl}
                      className="h-20 w-20 min-w-[5rem] rounded-md bg-zinc-800 object-cover shadow-md transition-all group-hover:brightness-50 group-focus-visible:brightness-50"
                    />
                  </motion.div>
                </AnimatePresence>
              </Button>
            </TooltipTrigger>
          </DialogTrigger>
          <TooltipContent side="bottom">
            <span>Song details</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault()
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Song details</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="relative h-48 w-full overflow-hidden rounded-md bg-zinc-800 shadow-md sm:h-56">
            <Image
              fill
              priority
              alt="Song cover"
              className="object-cover"
              src={data.albumImageUrl}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute flex h-full w-full flex-col items-center justify-center bg-black/70 p-4 text-center text-white">
              <h3 className="line-clamp-2 text-lg font-bold">{data.title}</h3>
              <h4 className="line-clamp-2 font-semibold">{data.artist}</h4>
              <a
                target="_blank"
                href={data.songUrl}
                className={cn(
                  buttonVariants({ variant: 'unstyled', size: 'sm' }),
                  'mt-2 h-8 bg-white/10 text-xs backdrop-blur-sm hover:bg-white/20 sm:h-9 sm:text-sm',
                )}
              >
                Play on Spotify
                <LuArrowUpRight className="ml-2" />
              </a>
            </div>
          </div>
          <p className="flex flex-col text-center font-semibold">
            <span className="text-xs opacity-80 sm:text-sm">
              {data.album} · {new Date(data.albumReleaseDate).getFullYear()}
            </span>
            <span className="text-xs opacity-80 sm:text-sm">Popularity · {data.popularity}%</span>
          </p>
        </div>
        {data.audioFeats && (
          <div className="h-64 w-full sm:h-80">
            <AudioFeatsChart data={data.audioFeats} />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
