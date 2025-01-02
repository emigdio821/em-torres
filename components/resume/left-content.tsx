import { IconFileDownload } from '@tabler/icons-react'
import { CONTACT_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/spinner'

interface ResumeLeftProps {
  isPDFLoading: boolean
  pdfCallback: () => void
}

export function LeftContent({ pdfCallback, isPDFLoading }: ResumeLeftProps) {
  return (
    <section className="flex flex-col gap-4 border-b p-4 sm:border-b-0 sm:border-r">
      <div>
        <div className="mb-4">
          <h3 className="text-2xl font-extrabold">Emigdio Torres</h3>
          <h4 className="text-lg font-bold">Software Engineer</h4>
        </div>
        <Button type="button" variant="outline" onClick={pdfCallback} disabled={isPDFLoading} className="print:hidden">
          {isPDFLoading ? <Spinner className="mr-2 size-4" /> : <IconFileDownload className="mr-2 size-4" />}
          Download
        </Button>
        <div className="mt-4 flex flex-col items-start space-y-1">
          {CONTACT_LINKS.map(({ href, icon: Icon, label }) => (
            <Button asChild variant="link" key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="mr-2 size-4" />
                {label}
              </a>
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold">Profile</h3>
        <div className="text-sm">
          <p>
            <span className="font-semibold">Telematics Engineer</span> with experience in Software Engineering using
            current programming standards.
          </p>
          <p>
            I am currently working as a Software Engineer at <span className="font-semibold">Wizeline</span>.
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold">Education</h3>
        <h5 className="text-sm font-semibold">Telematics Engineer</h5>
        <div className="text-sm">
          <p>Engineer&apos;s Degree</p>
          <p>University of Colima</p>
          <p>2010 - 2014</p>
        </div>
      </div>
    </section>
  )
}
