import Image from 'next/image'
import { LuAtSign, LuFileText, LuGithub, LuMapPin, LuSmartphone } from 'react-icons/lu'
import { RiLinkedinLine } from 'react-icons/ri'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { Spinner } from '../spinner'
import { Button, buttonVariants } from '../ui/button'

interface ContactLinkProps {
  Icon: React.ElementType
  href: string
  text: string | React.ReactNode
}

interface ResumeLeftProps {
  isLoadingPdf: boolean
  pdfCallback: () => void
}

function ContactLink({ Icon, href, text }: ContactLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(buttonVariants({ variant: 'link', size: 'sm' }), 'h-auto p-0 transition-none')}
    >
      <Icon className="mr-2" size={16} />
      {text}
    </a>
  )
}

export function LeftContent({ pdfCallback, isLoadingPdf }: ResumeLeftProps) {
  return (
    <div className="flex flex-col gap-4 bg-white__nav_bg p-4 dark:bg-dark__nav_bg">
      <div>
        <Image
          priority
          width={280}
          height={280}
          alt="Emigdio"
          src="/images/em.jpg"
          className="h-28 w-28 rounded-full object-cover shadow-md sm:h-32 sm:w-32"
        />
        <div className="mb-4 mt-6">
          <h3 className="text-2xl font-extrabold">Emigdio Torres</h3>
          <h4 className="text-lg font-bold">Software Engineer</h4>
        </div>
        <Button
          size="sm"
          type="button"
          variant="outline"
          onClick={pdfCallback}
          disabled={isLoadingPdf}
          className="mb-6 w-[120px] print:hidden"
        >
          {isLoadingPdf ? (
            <Spinner />
          ) : (
            <>
              <LuFileText className="mr-2" />
              Download
            </>
          )}
        </Button>
        <div className="flex flex-col items-start gap-1">
          <ContactLink Icon={RiLinkedinLine} href={siteConfig.links.linkedin} text="@emigdio821" />
          <ContactLink Icon={LuGithub} href={siteConfig.links.github} text="@emigdio821" />
          <ContactLink Icon={LuMapPin} href={siteConfig.links.location} text="Jalisco, Mexico" />
          <ContactLink Icon={LuSmartphone} href="tel:+523139617676" text="+52 (313) 961-7676" />
          <ContactLink
            Icon={LuAtSign}
            href="mailto:emigdio821@gmail.com"
            text="emigdio821@gmail.com"
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold">Profile</h3>
        <div className="text-sm">
          <p>
            <span className="font-semibold">Telematics Engineer</span> with experience in Software
            Engineering using current programming standards.
          </p>
          <p>
            I am currently working as a Software Engineer at{' '}
            <span className="font-semibold">Wizeline</span>.
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
    </div>
  )
}
