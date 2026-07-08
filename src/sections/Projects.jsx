import { projects } from "../data";
import TiltCard from "../components/TiltCard";
import GrappleSection from "../components/GrappleSection";

export default function Projects() {
  return (
    <GrappleSection id="projects">
      <div className="container">
        <div className="sec-eyebrow">// 04</div>
        <h2 className="sec-title" style={{ marginBottom: 6 }}>Projects</h2>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--mint)", fontStyle: "italic", marginBottom: 28, opacity: 0.9 }}>
          "Every great wizard in history has started out as nothing more than what we are now: students. If they can do it, why not us?" — Harry Potter
        </p>
        <div className="sec-rule" style={{ marginTop: -10 }} />
        
        <style>{`
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 20px;
          }
          .project-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1;
            padding: 28px 24px;
          }
          .project-title {
            font-family: var(--font-display);
            font-size: 20px;
            font-weight: 600;
            color: var(--white);
            margin-bottom: 2px;
          }
          .project-subtitle {
            font-size: 13px;
            color: var(--white-30);
            font-style: italic;
            margin-bottom: 16px;
          }
          .project-description {
            font-size: 14.5px;
            color: var(--white-60);
            line-height: 1.7;
            margin-bottom: 20px;
          }
          .project-highlights {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 24px;
          }
          .highlight-item {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            font-size: 13.5px;
            color: var(--white-60);
            line-height: 1.5;
          }
          .highlight-bullet {
            color: var(--mint);
            font-size: 8px;
            margin-top: 6px;
            flex-shrink: 0;
          }
          .project-tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 20px;
          }
          .tech-tag-chip {
            font-family: var(--font-mono);
            font-size: 9px;
            padding: 3px 8px;
            background: rgba(0, 245, 212, 0.03);
            border: 1px solid rgba(0, 245, 212, 0.08);
            border-radius: 4px;
            color: var(--mint);
          }
          .project-links {
            display: flex;
            gap: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding-top: 16px;
          }
          .project-link-item {
            font-family: var(--font-display);
            font-size: 11px;
            color: var(--mint);
            letter-spacing: 1px;
            text-transform: uppercase;
            font-weight: 500;
            transition: color 0.25s, transform 0.25s;
          }
          .project-link-item:hover {
            color: var(--cream);
            transform: translateX(2px);
          }
        `}</style>

        <div className="projects-grid">
          {projects.map((proj) => (
            <TiltCard 
              key={proj.id} 
              intensity={4} 
              className="glass-card"
              style={{ height: "100%" }}
            >
              <div className="project-card">
                <div>
                  {/* Header */}
                  <div className="project-title">{proj.name}</div>
                  <div className="project-subtitle">{proj.subtitle}</div>

                  {/* Tech stack */}
                  <div className="project-tech-tags">
                    {proj.stack.map((s, i) => (
                      <span key={i} className="tech-tag-chip">{s}</span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="project-description">{proj.description}</p>

                  {/* Highlights */}
                  <div className="project-highlights">
                    {proj.highlights.map((h, i) => (
                      <div key={i} className="highlight-item">
                        <span className="highlight-bullet">◆</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer links */}
                <div className="project-links">
                  {proj.github && (
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="project-link-item"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {proj.demo && (
                    <a 
                      href={proj.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="project-link-item"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </GrappleSection>
  );
}
