import Reveal from './Reveal'
import { interests, skillGroups, skillMarquee } from '../data/cv'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-head">
        <Reveal>
          <span className="section-tag">04 — Skills</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">Tools I reach for most.</h2>
        </Reveal>
      </div>

      <div className="marquee marquee--skills">
        <div className="marquee-track marquee-track--reverse">
          {Array(2)
            .fill(0)
            .map((_, r) => (
              <div className="marquee-group" key={r}>
                {skillMarquee.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            ))}
        </div>
      </div>

      <div className="skills-grid">
        {skillGroups.map((g, i) => (
          <Reveal delay={i * 0.05} key={g.heading}>
            <p className="skills-line">{g.heading}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="interests">
          <span className="about-meta-label">Interests</span>
          <div className="interests-chips">
            {interests.map((it) => (
              <span className="chip chip--outline" key={it}>
                {it}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
