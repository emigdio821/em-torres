import { z } from 'zod'

const envSchema = z.object({
  SPOTIFY_REFRESH_TOKEN: z.string().trim().min(1),
  SPOTIFY_CLIENT_SECRET: z.string().trim().min(1),
  SPOTIFY_CLIENT_ID: z.string().trim().min(1),
})

export const envServerSchema = envSchema.parse(process.env)
