'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { IconRefresh } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface ErrorProps {
  error: Error & { digest?: string }
}

export default function ErrorPage({ error }: ErrorProps) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-between">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-xl">Error</CardTitle>
          <CardDescription className="text-center">Something went wrong</CardDescription>
        </CardHeader>
        <CardFooter className="items-center justify-center">
          <Button variant="outline" onClick={() => router.refresh()}>
            <IconRefresh className="mr-2 size-4" />
            Reload
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
