import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const fontReq = fetch(new URL('../../../public/fonts/Geist-Bold.ttf', import.meta.url)).then(
  async (res) => await res.arrayBuffer(),
)

export async function GET() {
  try {
    const fontData = await fontReq

    return new ImageResponse(
      (
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
          <img
            alt="em"
            width={240}
            height={240}
            src="https://emtorres.vercel.app/images/em.jpg"
            style={{
              borderRadius: 128,
              objectFit: 'cover',
            }}
          />
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
        </div>
      ),
      {
        width: 1000,
        height: 600,
        fonts: [
          {
            name: 'Geist',
            data: fontData,
            style: 'normal',
          },
        ],
      },
    )
  } catch (e) {
    console.log(e)
    return new Response('Failed to generate the image', {
      status: 500,
    })
  }
}
