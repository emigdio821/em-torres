'use client'

import { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'

import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

import { LeftContent } from './left-content'
import { RightContent } from './right-content'

export function ResumeContent() {
  const pdfRef = useRef<HTMLDivElement>(null)
  const [loadingPdf, setLoadingPdf] = useState<boolean>(false)

  const handleBeforeAfterPrint = async () => {
    await new Promise<void>((resolve) => {
      setLoadingPdf((prev) => {
        resolve()
        return !prev
      })
    })
  }

  const handlePdfDownload = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: 'Emigdio_Torres_Resume',
    onAfterPrint: handleBeforeAfterPrint,
    onBeforeGetContent: handleBeforeAfterPrint,
  })

  return (
    <div
      ref={pdfRef}
      className={cn(
        'mx-auto grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-lg border text-sm print:max-w-full print:grid-cols-[0.5fr_1fr] print:rounded-none print:border-none md:grid-cols-[0.5fr_1fr]',
        fontSans.className,
      )}
    >
      <LeftContent isLoadingPdf={loadingPdf} pdfCallback={handlePdfDownload} />
      <RightContent />
    </div>
  )
}
