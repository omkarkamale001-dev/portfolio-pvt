import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { profile } from '../data/cv'
import portrait from '../assets/omkar-portrait.webp'
import portraitFallback from '../assets/omkar-portrait.jpg'
import heroBg from '../assets/bg.webp?url'

const heroMeshStyle = { '--hero-bg': `url("${heroBg}")` } as CSSProperties

const line1 = "Hello, I'm".split('')
const line2 = 'Omkar Kamale.'.split('')

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
}
const letter: Variants = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const marqueeItems = [...profile.roles, '15+ Years', profile.company]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  return (
    <section id="top" className="hero" ref={sectionRef}>
      <div className="hero-mesh" style={heroMeshStyle} aria-hidden="true" />

      <div className="hero-grid">
        <div className="hero-copy-col">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {profile.role} — {profile.company}
          </motion.p>

          <h1 className="hero-title">
            <span className="hero-line">
              <motion.span
                variants={container}
                initial="hidden"
                animate="show"
                className="hero-line-inner"
              >
                {line1.map((ch, i) => (
                  <span className="letter-mask" key={i}>
                    <motion.span variants={letter} className="letter">
                      {ch}
                    </motion.span>
                  </span>
                ))}
              </motion.span>
            </span>
            <span className="hero-line hero-line--accent">
              <motion.span
                variants={container}
                initial="hidden"
                animate="show"
                className="hero-line-inner"
              >
                {line2.map((ch, i) => (
                  <span className="letter-mask" key={i}>
                    <motion.span variants={letter} className="letter">
                      {ch}
                    </motion.span>
                  </span>
                ))}
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
          >
            <a href="#contact" className="btn btn--solid" data-cursor-hover>
              Let&rsquo;s talk
            </a>
            <a href="#experience" className="btn btn--ghost" data-cursor-hover>
              See my work
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, y: 32, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-portrait-glow" aria-hidden="true" />
          <motion.div
            className="hero-portrait-frame"
            style={{ y: portraitY, scale: portraitScale }}
          >
            <picture>
              <source srcSet={portrait} type="image/webp" />
              <img src={portraitFallback} alt="Omkar Kamale" />
            </picture>
          </motion.div>
        </motion.div>
      </div>

      <div className="marquee marquee--hero">
        <div className="marquee-track">
          {Array(2)
            .fill(0)
            .map((_, r) => (
              <div className="marquee-group" key={r}>
                {marqueeItems.map((item) => (
                  <span key={item}>
                    {item} <i>*</i>{' '}
                  </span>
                ))}
              </div>
            ))}
        </div>
      </div>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <span className="scroll-cue-line" />
        Scroll
      </motion.div>
    </section>
  )
}
