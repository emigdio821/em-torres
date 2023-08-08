'use client'

import { useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import { LuImage } from 'react-icons/lu'

import { cn } from '@/lib/utils'

type BlurImageProps = {
  animation?: boolean
} & ImageProps

export function BlurImage({ animation = true, alt, ...props }: BlurImageProps) {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  return (
    <>
      {error ? (
        <div className="flex h-[inherit] w-[inherit] items-center justify-center rounded-[inherit] bg-zinc-800 text-white__nav_bg">
          <LuImage />
        </div>
      ) : (
        <Image
          fill
          alt={alt}
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            'rounded-[inherit] bg-transparent object-cover duration-300',
            isLoading ? 'blur-sm' : 'blur-0',
            animation && isLoading ? 'scale-105' : 'scale-100',
          )}
          onError={() => {
            setLoading(false)
            setError(true)
          }}
          onLoadingComplete={() => {
            setLoading(false)
          }}
          {...props}
        />
      )}
    </>
  )
}
