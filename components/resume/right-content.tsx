import { IconBrandCss3, IconBrandGit, IconBrandHtml5, IconBrandJavascript } from '@tabler/icons-react'
import { HOBBIES_ICONS, SKILLS_ICONS } from '@/lib/constants'
import { EXPERIENCE } from '@/lib/exp-data'
import { TimeLine } from './timeline'

const SKILLS = [
  {
    icon: IconBrandHtml5,
    label: 'HTML',
  },
  {
    icon: IconBrandCss3,
    label: 'CSS',
  },
  {
    icon: IconBrandGit,
    label: 'Git',
  },
  {
    icon: IconBrandJavascript,
    label: 'JavaScript',
  },
  ...SKILLS_ICONS,
]

export function RightContent() {
  return (
    <section className="flex flex-col gap-6 bg-background p-4">
      <div className="flex flex-col">
        <h3 className="mb-2 text-lg font-bold">Experience</h3>
        <div className="flex flex-col gap-2">
          {EXPERIENCE.map((item, idx) => (
            <div className="flex gap-4" key={`${item.id}-${item.company}`}>
              <TimeLine delay={idx * 0.15} isFirst={idx === 0} isLast={idx + 1 === EXPERIENCE.length} />
              <div>
                <p>
                  {item.year} · <span className="font-semibold">{item.company}</span>
                </p>
                <h5 className="text-base font-semibold">{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold">Skills</h3>
        <div className="flex flex-wrap gap-4">
          {SKILLS.map(({ icon: Icon, label }) => (
            <div className="flex flex-col items-center gap-2" key={label}>
              <Icon className="size-6" />
              <span className="text-xs font-medium text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold">Hobbies & Interests</h3>
        <div className="flex flex-wrap gap-4">
          {HOBBIES_ICONS.map(({ icon: Icon, label }) => (
            <div className="flex flex-col items-center gap-2" key={label}>
              <Icon className="size-6" />
              <span className="text-xs font-medium text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
