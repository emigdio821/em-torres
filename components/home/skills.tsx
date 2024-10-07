'use client'

import { motion } from 'framer-motion'
import { SKILLS_ICONS } from '@/lib/constants'

interface SkillIconProps {
  delay?: number
  children: React.ReactNode
}

const SKILLS = SKILLS_ICONS.filter((skill) => skill.label !== 'React Native')

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
        <div className="mt-6 grid grid-cols-[repeat(4,_max-content)] gap-4 text-left sm:grid-cols-[repeat(6,_max-content)]">
          {SKILLS.map(({ icon: Icon, label }, index) => (
            <SkillIcon key={label} delay={Number(`0.${index}`)}>
              <Icon className="size-8" />
              <span className="text-sm font-semibold text-muted-foreground">{label}</span>
            </SkillIcon>
          ))}
        </div>
      </div>
    </section>
  )
}
