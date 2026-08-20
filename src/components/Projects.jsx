import TiltCard from './TiltCard';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h2 className="section-title" data-reveal="">Projects</h2>

      <div className="project-list">
        {projects.map((proj) => (
          <div className="project" data-reveal="" key={proj.id}>
            <TiltCard className="project-thumb">
              {proj.image ? (
                <img
                  className="project-img"
                  src={proj.image}
                  alt={`${proj.title} screenshot`}
                  loading="lazy"
                />
              ) : (
                <span className="project-thumb-fallback hatch">{proj.title}</span>
              )}
            </TiltCard>

            <div className="project-body">
              <div className="meta">{proj.period}</div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>

              <div className="tag-row">
                {proj.tech.map((tech) => (
                  <span className="tag tag-accent-2" key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
