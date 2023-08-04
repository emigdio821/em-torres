import {
  LuAtom,
  LuBinary,
  LuGamepad2,
  LuGitPullRequest,
  LuGlobe2,
  LuHeadphones,
  LuHexagon,
  LuKeyboard,
  LuMusic3,
} from 'react-icons/lu'
import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandTailwind } from 'react-icons/tb'

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
      <div className="flex flex-col">
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
          <IconWithText Icon={TbBrandCss3} text="CSS" />
          <IconWithText Icon={TbBrandHtml5} text="HTML" />
          <IconWithText Icon={TbBrandJavascript} text="JS/TS" />
          <IconWithText Icon={TbBrandTailwind} text="Tailwind" />
          <IconWithText Icon={LuGitPullRequest} text="Git" />
          <IconWithText Icon={LuAtom} text="React" />
          <IconWithText Icon={LuHexagon} text="Node.js" />
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold">Hobbies & Interests</h3>
        <div className="grid grid-cols-[repeat(5,_max-content)] gap-4 text-center md:grid-cols-[repeat(7,_max-content)]">
          <IconWithText Icon={LuMusic3} text="Drums" />
          <IconWithText Icon={LuHeadphones} text="Music" />
          <IconWithText Icon={LuGamepad2} text="Games" />
          <IconWithText Icon={LuBinary} text="Tech" />
          <IconWithText Icon={LuKeyboard} text="KBoards" />
          <IconWithText Icon={LuGlobe2} text="Travel" />
        </div>
      </div>
    </section>
  )
}
