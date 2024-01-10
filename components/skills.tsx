'use client'

import { motion } from 'framer-motion'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { DiJavascript1 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { LuHexagon } from 'react-icons/lu'
import { TbBrandNextjs } from 'react-icons/tb'

import { TypeScriptIcon } from './icons'

interface SkillIconProps {
  delay?: number
  children: React.ReactNode
}

function SkillIcon({ children, delay }: SkillIconProps) {
  const variants = {
    offscreen: {
      y: 6,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div
      initial="offscreen"
      variants={variants}
      whileInView="onscreen"
      transition={{ delay }}
      viewport={{ once: true, amount: 0.4 }}
      className="flex flex-col items-center gap-2"
    >
      {children}
    </motion.div>
  )
}

export function Skills() {
  return (
    <section className="px-4">
      <div className="mx-auto max-w-3xl rounded-lg border p-4 text-xl md:p-6 md:text-2xl">
        <p className="font-bold">I have a strong background in front-end development.</p>
        <p className="font-bold">These are some of the technologies I currently use:</p>
        <div className="mt-6 grid gap-4 text-left grid-cols-[repeat(4,_max-content)] sm:grid-cols-[repeat(6,_max-content)]">
          <SkillIcon delay={0.1}>
            <DiJavascript1 />
            <span className="font-semibold text-sm">JavaScript</span>
          </SkillIcon>
          <SkillIcon delay={0.2}>
            <TypeScriptIcon />
            <span className="font-semibold text-sm">TypeScript</span>
          </SkillIcon>
          <SkillIcon delay={0.3}>
            <FaReact />
            <span className="font-semibold text-sm">React</span>
          </SkillIcon>
          <SkillIcon delay={0.4}>
            <BiLogoTailwindCss />
            <span className="font-semibold text-sm">Tailwind</span>
          </SkillIcon>
          <SkillIcon delay={0.5}>
            <TbBrandNextjs />
            <span className="font-semibold text-sm">Next.js</span>
          </SkillIcon>
          <SkillIcon delay={0.6}>
            <LuHexagon />
            <span className="font-semibold text-sm">Node.js</span>
          </SkillIcon>
        </div>
      </div>
    </section>
  )
}
