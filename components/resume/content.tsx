'use client'

import { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { LeftContent } from './left-content'
import { RightContent } from './right-content'

export function ResumeContent() {
  const pdfRef = useRef<HTMLDivElement>(null)
  const [pdfLoading, setPDFLoading] = useState<boolean>(false)

  const handlePdfDownload = useReactToPrint({
    contentRef: pdfRef,
    documentTitle: 'Emigdio-Torres-Resume',
    onAfterPrint: () => {
      setPDFLoading(false)
    },
    onBeforePrint: async () => {
      setPDFLoading(true)
    },
  })

  return (
    <div ref={pdfRef} className="print:p-4">
      <div className="mx-auto grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-lg border text-sm sm:grid-cols-[0.5fr_1fr] print:max-w-full print:grid-cols-[0.5fr_1fr]">
        <LeftContent isPDFLoading={pdfLoading} pdfCallback={handlePdfDownload} />
        <RightContent />
      </div>
    </div>
  )
}
