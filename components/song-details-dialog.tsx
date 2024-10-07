import type { SpotiResponse } from '@/types'
import { IconExternalLink } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { AudioFeatsChart } from '@/components/audio-feats-chart'
import { BlurImage } from '@/components/blur-image'

interface SongDetailsDialogProps {
  data: SpotiResponse
}

export function SongDetailsDialog({ data }: SongDetailsDialogProps) {
  return (
    <Dialog>
      <Tooltip>
        <DialogTrigger asChild>
          <TooltipTrigger asChild>
            <Button type="button" variant="unstyled" className="rounded-md transition-opacity hover:opacity-80">
              <AnimatePresence mode="wait" key={data.albumImageUrl}>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="size-20 rounded-md shadow-md">
                    <BlurImage priority src={data.albumImageUrl} alt="Song cover" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </Button>
          </TooltipTrigger>
        </DialogTrigger>
        <TooltipContent side="bottom">
          <span>Song details</span>
        </TooltipContent>
      </Tooltip>
      <DialogContent
        aria-describedby={undefined}
        onInteractOutside={(e) => {
          e.preventDefault()
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Song details</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="relative h-48 w-full overflow-hidden rounded-md bg-muted shadow-md sm:h-56">
            <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center bg-black/70 p-4 text-center text-white">
              <h3 className="line-clamp-2 text-lg font-bold">{data.title}</h3>
              <h4 className="line-clamp-2 font-semibold">{data.artist}</h4>
              <Button asChild variant="link" className="mt-2 text-white">
                <a target="_blank" rel="noreferrer" href={data.songUrl}>
                  Play on Spotify
                  <IconExternalLink className="ml-2 size-4" />
                </a>
              </Button>
            </div>
            <div className="block h-full w-full rounded-md">
              <BlurImage priority src={data.albumImageUrl} alt="Song cover" />
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
