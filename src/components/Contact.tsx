import Reveal from './Reveal'
import { profile } from '../data/cv'

export default function Contact() {
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="section contact">
      <Reveal>
        <span className="section-tag">06 — Contact</span>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="contact-title">
          Got a product to build,
          <br />
          or a team that needs a hand?
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <a href={`mailto:${profile.email}`} className="contact-email" data-cursor-hover>
          {profile.email}
        </a>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="contact-row">
          <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} data-cursor-hover>
            {profile.phone}
          </a>
          <span className="chip chip--outline">LinkedIn</span>
          <span className="chip chip--outline">GitHub</span>
        </div>
      </Reveal>

      <footer className="footer">
        <span>&copy; {year} {profile.name}</span>
        <span>Built with React &amp; Framer Motion</span>
      </footer>
    </section>
  )
}
