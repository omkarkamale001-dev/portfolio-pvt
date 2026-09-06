import Reveal from './Reveal'
import { profile } from '../data/cv'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-head">
        <Reveal>
          <span className="section-tag">02 — About</span>
        </Reveal>
      </div>

      <Reveal delay={0.05}>
        <p className="about-lead">
          I&rsquo;m an <span className="hl">expert consultant and solution architect</span> at{' '}
          <span className="hl">{profile.company}</span>, where I lead{' '}
          <span className="hl">full-stack development</span>, <span className="hl">data engineering</span>{' '}
          and <span className="hl">RFP proposals</span> for enterprise clients like Apple, TIAA and Citi
          Bank. Fifteen-plus years in, I still enjoy the same thing I started with: turning complex,
          data-heavy problems into products people actually enjoy using.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="about-meta">
          <div className="about-meta-item">
            <span className="about-meta-label">Email</span>
            <a href={`mailto:${profile.email}`} data-cursor-hover>
              {profile.email}
            </a>
          </div>
          <div className="about-meta-item">
            <span className="about-meta-label">Phone</span>
            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} data-cursor-hover>
              {profile.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
