import { BiLogoTailwindCss } from 'react-icons/bi'
import {
  FaCss3Alt,
  FaDrum,
  FaGitAlt,
  FaHeadphonesAlt,
  FaHtml5,
  FaJsSquare,
  FaKeyboard,
  FaLaptopCode,
  FaNodeJs,
  FaReact,
  FaSteam,
} from 'react-icons/fa'

import { expData } from '@/lib/exp-data'

import { TimeLine } from './timeline'

interface IconWithTextProps {
  Icon: React.ElementType
  text: string
}

function IconWithText({ Icon, text }: IconWithTextProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon size={24} />
      <span>{text}</span>
    </div>
  )
}

export function RightContent() {
  return (
    <section className="flex flex-col gap-6 bg-white__nav_bg/20 p-4 dark:bg-dark__nav_bg/50">
      <div>
        <h3 className="mb-2 text-lg font-bold">Experience</h3>
        <div className="flex flex-col gap-2">
          {expData.map((item, idx) => (
            <div className="flex gap-4" key={`${item.id}-${item.company}`}>
              <TimeLine
                delay={idx * 0.15}
                isFirst={idx === 0}
                isLast={idx + 1 === expData.length}
              />
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
        <div className="grid grid-cols-[repeat(5,_max-content)] gap-4 text-center md:grid-cols-[repeat(7,_max-content)]">
          <IconWithText Icon={FaCss3Alt} text="CSS" />
          <IconWithText Icon={FaHtml5} text="HTML" />
          <IconWithText Icon={FaJsSquare} text="JS/TS" />
          <IconWithText Icon={BiLogoTailwindCss} text="Tailwind" />
          <IconWithText Icon={FaGitAlt} text="Git" />
          <IconWithText Icon={FaReact} text="React" />
          <IconWithText Icon={FaNodeJs} text="Node.js" />
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold">Hobbies & Interests</h3>
        <div className="grid grid-cols-[repeat(5,_max-content)] gap-4 text-center md:grid-cols-[repeat(7,_max-content)]">
          <IconWithText Icon={FaDrum} text="Drums" />
          <IconWithText Icon={FaHeadphonesAlt} text="Music" />
          <IconWithText Icon={FaSteam} text="Games" />
          <IconWithText Icon={FaLaptopCode} text="Tech" />
          <IconWithText Icon={FaKeyboard} text="KBoards" />
        </div>
      </div>
    </section>
  )
}
