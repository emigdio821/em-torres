'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LuFrown, LuRotateCcw } from 'react-icons/lu'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface ErrorProps {
  error: Error & { digest?: string }
}

export default function Error({ error }: ErrorProps) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-between p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-xl font-extrabold">
            <LuFrown size={32} className="mx-auto mb-2" />
            Uh oh!
          </CardTitle>
          <CardContent className="text-center text-lg font-semibold">
            Something went wrong.
          </CardContent>
          <CardFooter className="items-center justify-center">
            <Button
              className="mt-6"
              variant="outline"
              onClick={() => {
                router.refresh()
              }}
            >
              <LuRotateCcw className="mr-2" />
              Reload
            </Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  )
}
