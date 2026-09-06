import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import { experience } from '../data/cv'

function Row({ pos, index, isOpen, onToggle }: {
  pos: (typeof experience)[number]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const hasDetail = !!(pos.engagements?.length || pos.intro)

  return (
    <div className={`xp-row${isOpen ? ' is-open' : ''}`}>
      <button
        className="xp-row-head"
        onClick={() => hasDetail && onToggle()}
        data-cursor-hover
        aria-expanded={isOpen}
      >
        <span className="xp-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="xp-company">{pos.company}</span>
        <span className="xp-role">{pos.role}</span>
        <span className="xp-dates">{pos.dates}</span>
        {hasDetail && <span className={`xp-plus${isOpen ? ' is-open' : ''}`} aria-hidden="true" />}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && hasDetail && (
          <motion.div
            className="xp-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="xp-body-inner">
              {pos.intro && <p className="xp-intro">{pos.intro}</p>}

              {pos.engagements?.map((eng, ei) => (
                <div className="xp-engagement" key={`${eng.client}-${ei}`}>
                  <div className="xp-engagement-head">
                    <span className="xp-client">{eng.client}</span>
                    <span className="xp-client-role">{eng.role}</span>
                  </div>
                  {eng.projects.map((proj) => (
                    <div className="xp-project" key={proj.title}>
                      <h4>{proj.title}</h4>
                      <p>{proj.description}</p>
                    </div>
                  ))}
                </div>
              ))}

              {pos.stack && <p className="xp-stack">{pos.stack}</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="experience" className="section">
      <div className="section-head">
        <Reveal>
          <span className="section-tag">03 — Experience</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">A dozen years, seven companies, one habit of shipping.</h2>
        </Reveal>
      </div>

      <div className="xp-list">
        {experience.map((pos, i) => (
          <Reveal key={pos.company} delay={Math.min(i * 0.04, 0.2)}>
            <Row
              pos={pos}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
