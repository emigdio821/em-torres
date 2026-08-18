import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630,
}

const GeistBold = await readFile(join(process.cwd(), 'public/fonts/Geist-Bold.ttf'))

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        gap: '20px',
        width: '100%',
        height: '100%',
        display: 'flex',
        color: '#ededed',
        textAlign: 'center',
        fontFamily: 'Geist',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#141414',
        backgroundImage: 'url("https://emtorres.vercel.app/images/og-bg.png")',
      }}
    >
      <p
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <span
          style={{
            fontSize: 50,
          }}
        >
          Emigdio Torres
        </span>
        <span
          style={{
            fontSize: 30,
            opacity: 0.8,
          }}
        >
          Software Engineer
        </span>
      </p>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Geis',
          data: GeistBold,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  )
}
