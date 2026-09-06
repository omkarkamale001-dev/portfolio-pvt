import Reveal from './Reveal'
import { projects } from '../data/cv'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <Reveal>
          <span className="section-tag">05 — Projects</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">Selected build.</h2>
        </Reveal>
      </div>

      <div className="project-list">
        {projects.map((p, i) => (
          <Reveal delay={i * 0.05} key={p.title}>
            <div className="project-card">
              <div className="project-card-top">
                <h3>{p.title}</h3>
                <span className="chip chip--outline">{p.tag}</span>
              </div>
              <p className="project-place">{p.place}</p>
              <p className="project-desc">{p.description}</p>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
