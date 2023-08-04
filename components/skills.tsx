'use client'

import { motion } from 'framer-motion'

interface SkillIconProps {
  src: string
  alt: string
  delay?: number
}

function SkillIcon({ src, alt, delay }: SkillIconProps) {
  const variants = {
    offscreen: {
      y: 10,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.img
      alt={alt}
      src={src}
      width="100%"
      initial="offscreen"
      variants={variants}
      whileInView="onscreen"
      transition={{ delay }}
      viewport={{ once: true, amount: 0.4 }}
      className="max-h-[50px] max-w-[50px] rounded-md"
    />
  )
}

export function Skills() {
  return (
    <section className="px-4">
      <div className="mx-auto max-w-3xl rounded-lg border p-4 text-xl md:p-6 md:text-2xl">
        <p className="font-bold">I have a strong background in front-end development.</p>
        <div>
          <p className="font-bold">
            These are some of the technologies I currently use: JavaScript, TypeScript, React and
            Node.js.
          </p>
          <div className="mt-6 flex gap-2 grayscale-[70%] md:gap-4">
            <SkillIcon src="/images/js.svg" alt="JavaScript" delay={0.1} />
            <SkillIcon src="/images/ts.svg" alt="TypeScript" delay={0.2} />
            <SkillIcon src="/images/react.svg" alt="React" delay={0.3} />
            <SkillIcon src="/images/node.svg" alt="Node.js" delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  )
}
