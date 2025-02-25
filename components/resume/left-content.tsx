import NextLink from 'next/link'
import { IconChevronLeft, IconPrinter } from '@tabler/icons-react'
import { CONTACT_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { SpinnerIcon } from '@/components/icons'

interface ResumeLeftProps {
  isPDFLoading: boolean
  pdfCallback: () => void
}

export function LeftContent({ pdfCallback, isPDFLoading }: ResumeLeftProps) {
  return (
    <section className="flex flex-col gap-4 border-b p-4 sm:border-r sm:border-b-0">
      <div>
        <div className="mb-4">
          <h4 className="text-base font-semibold tracking-tight sm:text-lg">Emigdio Torres</h4>
          <h5 className="text-muted-foreground text-sm leading-none font-medium tracking-tight sm:text-base">
            Software Engineer
          </h5>
        </div>
        <div className="flex items-center gap-2 print:hidden">
          <Button variant="outline" size="sm" asChild>
            <NextLink href="/">
              <IconChevronLeft size={16} className="mr-2" />
              Home
            </NextLink>
          </Button>
          <Button size="sm" type="button" variant="outline" onClick={pdfCallback} disabled={isPDFLoading}>
            {isPDFLoading ? <SpinnerIcon className="mr-2" /> : <IconPrinter size={16} className="mr-2" />}
            Print
          </Button>
        </div>
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
        <h5 className="text-sm font-semibold tracking-tight sm:text-base">Profile</h5>
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
        <h5 className="text-sm font-semibold tracking-tight sm:text-base">Education</h5>
        <h6 className="text-sm font-medium">Telematics Engineer</h6>
        <div className="text-sm">
          <p>Engineer&apos;s Degree</p>
          <p>University of Colima</p>
          <p>2010 - 2014</p>
        </div>
      </div>

      <div>
        <h5 className="text-sm font-semibold tracking-tight sm:text-base">Skills</h5>
        <p>HTML, CSS, Git, Docker, JavaScript, TypeScript, React, React Native, Tailwind, Next.js, and Node.js</p>
      </div>
      <div>
        <h5 className="text-sm font-semibold tracking-tight sm:text-base">Hobbies & Interests</h5>
        <p>Drums, Music, Games, Tech, and Travel.</p>
      </div>
    </section>
  )
}
