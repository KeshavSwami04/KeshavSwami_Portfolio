import { useState } from "react";
import { research, experience, education, personal } from "../data";
import TiltCard from "../components/TiltCard";
import GrappleSection from "../components/GrappleSection";

export function Education() {
  return (
    <GrappleSection id="education">
      <div className="container">
        <div className="sec-eyebrow">// 02</div>
        <h2 className="sec-title" style={{ marginBottom: 6 }}>Education</h2>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--mint)", fontStyle: "italic", marginBottom: 28, opacity: 0.9 }}>
          "Working hard is important. But there is something that matters even more: believing in yourself." — Harry Potter
        </p>
        <div className="sec-rule" style={{ marginTop: -10 }} />
        
        {education.map((ed, i) => (
          <TiltCard 
            key={i} 
            intensity={4}
            className="glass-card" 
            style={{ 
              padding: "28px 30px",
              borderLeft: "3px solid var(--mint)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontFamily: "var(--font-display)", 
                  fontSize: "20px", 
                  fontWeight: 600, 
                  color: "var(--white)", 
                  marginBottom: 4 
                }}>
                  {ed.degree}
                </h3>
                
                <div style={{ fontSize: "15px", color: "var(--mint)", marginBottom: 4, fontWeight: 500 }}>
                  {ed.institution}
                </div>
                
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--white-30)", marginBottom: 16 }}>
                  {ed.period}
                </div>
                
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {ed.highlights.map((h, j) => (
                    <span 
                      key={j} 
                      style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "12px", 
                        padding: "4px 12px", 
                        background: "rgba(255, 255, 255, 0.02)", 
                        border: "1px solid rgba(255, 255, 255, 0.05)", 
                        borderRadius: 20, 
                        color: "var(--white-60)" 
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* GPA display */}
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ 
                  fontFamily: "var(--font-display)", 
                  fontSize: "36px", 
                  fontWeight: 700, 
                  color: "var(--cream)", 
                  lineHeight: 1
                }}>
                  {ed.cgpa.split(" ")[0]}
                </div>
                <div style={{ 
                  fontFamily: "var(--font-body)", 
                  fontSize: "11px", 
                  color: "var(--white-30)", 
                  marginTop: 4 
                }}>
                  CGPA / 10
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </GrappleSection>
  );
}

export function Research() {
  return (
    <GrappleSection id="research">
      <div className="container">
        <div className="sec-eyebrow">// 05</div>
        <h2 className="sec-title" style={{ marginBottom: 6 }}>Research</h2>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--mint)", fontStyle: "italic", marginBottom: 28, opacity: 0.9 }}>
          "Wit beyond measure is man's greatest treasure." — Rowena Ravenclaw
        </p>
        <div className="sec-rule" />
        
        {research.map((r, i) => (
          <TiltCard 
            key={i} 
            intensity={4}
            className="glass-card" 
            style={{ 
              borderLeft: "3px solid var(--cream)", 
              borderRadius: "0 var(--radius) var(--radius) 0", 
              padding: "26px 28px", 
              marginBottom: 16
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", marginBottom: 6 }}>
              <h3 style={{ 
                fontFamily: "var(--font-display)", 
                fontSize: "19px", 
                fontWeight: 600, 
                color: "var(--white)"
              }}>
                {r.title}
              </h3>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--white-30)" }}>
                {r.period}
              </span>
            </div>
            
            <div style={{ fontSize: "13.5px", color: "var(--mint)", marginBottom: 14, fontWeight: 500 }}>
              {r.supervisor} · {r.institution}
            </div>
            
            <p style={{ fontSize: "15px", color: "var(--white-60)", lineHeight: 1.75, marginBottom: 16 }}>
              {r.description}
            </p>
            
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
              {r.tags.map((t, j) => (
                <span 
                  key={j} 
                  style={{ 
                    fontFamily: "var(--font-mono)", 
                    fontSize: "10px", 
                    padding: "3px 8px", 
                    background: "rgba(0, 245, 212, 0.02)", 
                    border: "1px solid rgba(0, 245, 212, 0.06)", 
                    borderRadius: 4, 
                    color: "var(--mint)" 
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            
            {r.github && (
              <a 
                href={r.github} 
                target="_blank" 
                rel="noreferrer" 
                style={{ 
                  fontFamily: "var(--font-display)", 
                  fontSize: "11px", 
                  color: "var(--mint)", 
                  textTransform: "uppercase",
                  fontWeight: 500,
                  transition: "color 0.2s" 
                }} 
                onMouseEnter={e => { e.target.style.color = "var(--cream)" }} 
                onMouseLeave={e => { e.target.style.color = "var(--mint)" }}
              >
                View Project ↗
              </a>
            )}
          </TiltCard>
        ))}
      </div>
    </GrappleSection>
  );
}

export function Experience() {
  return (
    <GrappleSection id="pors">
      <div className="container">
        <div className="sec-eyebrow">// 06</div>
        <h2 className="sec-title" style={{ marginBottom: 6 }}>Positions of Responsibility</h2>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--mint)", fontStyle: "italic", marginBottom: 28, opacity: 0.9 }}>
          "We are only as strong as we are united, as weak as we are divided." — Albus Dumbledore
        </p>
        <div className="sec-rule" style={{ marginTop: -10 }} />
        
        <div style={{ position: "relative", paddingLeft: "26px" }}>
          {/* Vertical axis line */}
          <div style={{ 
            position: "absolute", 
            left: 6, 
            top: 10, 
            bottom: 10, 
            width: 1, 
            background: "rgba(0, 245, 212, 0.15)" 
          }} />
          
          {experience.map((exp, i) => (
            <div key={i} style={{ position: "relative", marginBottom: i < experience.length - 1 ? "24px" : "0" }}>
              {/* Bullet point */}
              <div style={{ 
                position: "absolute", 
                left: -24, 
                top: 10, 
                width: 7, 
                height: 7, 
                borderRadius: "50%", 
                background: "var(--mint)",
                border: "1.5px solid var(--bg)"
              }} />
              
              <TiltCard 
                intensity={3}
                className="glass-card" 
                style={{ 
                  padding: "20px 24px"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 4 }}>
                  <h3 style={{ 
                    fontFamily: "var(--font-display)", 
                    fontSize: "16px", 
                    fontWeight: 600, 
                    color: "var(--white)"
                  }}>
                    {exp.role}
                  </h3>
                  <span style={{ 
                    fontFamily: "var(--font-mono)", 
                    fontSize: "10px", 
                    color: "var(--white-30)" 
                  }}>
                    {exp.period}
                  </span>
                </div>
                
                <div style={{ 
                  fontSize: "13px", 
                  color: "var(--mint)", 
                  marginBottom: 10,
                  fontWeight: 500
                }}>
                  {exp.org}
                </div>
                
                <p style={{ fontSize: "14px", color: "var(--white-60)", lineHeight: 1.7 }}>
                  {exp.description}
                </p>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </GrappleSection>
  );
}

export function Contact() {
  const [copiedField, setCopiedField] = useState(null);

  const links = [
    { label: "Email",    value: personal.email,  href: `https://mail.google.com/mail/?view=cm&to=${personal.email}`, copyable: true, copyValue: personal.email },
    { label: "GitHub",   value: "github.com/KeshavSwami04", href: personal.github },
    { label: "LinkedIn", value: "linkedin.com/in/keshav-swami",  href: personal.linkedin },
    { label: "Phone",    value: personal.phone,  href: `tel:${personal.phone.replace(/\s/g,"")}`, copyable: true, copyValue: personal.phone },
  ];

  const handleCopy = (e, label, copyValue) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(copyValue).then(() => {
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 1500);
    });
  };
  
  return (
    <GrappleSection id="contact">
      <div className="container">
        <div className="sec-eyebrow">// 07</div>
        <h2 className="sec-title" style={{ marginBottom: 6 }}>Get In Touch</h2>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--mint)", fontStyle: "italic", marginBottom: 28, opacity: 0.9 }}>
          "Differences of habit and language are nothing at all if our aims are identical and our hearts are open." — Albus Dumbledore
        </p>
        <div className="sec-rule" style={{ marginTop: -10 }} />
        
        <p style={{ fontSize: "15px", color: "var(--white-60)", maxWidth: 500, lineHeight: 1.7, marginBottom: 36 }}>
          My inbox is always open. Whether you have a project idea, internship query, research opportunity, or just want to chat — feel free to connect!
        </p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "14px", marginBottom: 50 }}>
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer">
              <TiltCard 
                intensity={4}
                className="glass-card" 
                style={{ 
                  padding: "18px 20px", 
                  cursor: "pointer"
                }}
              >
                <div style={{ 
                  fontFamily: "var(--font-mono)", 
                  fontSize: "9px", 
                  color: "var(--mint)", 
                  letterSpacing: "1px", 
                  textTransform: "uppercase", 
                  marginBottom: 6 
                }}>
                  {l.label}
                </div>
                
                <div 
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div 
                    style={{
                      fontSize: "12px", 
                      color: "var(--white-90)", 
                      fontWeight: 500,
                      whiteSpace: "nowrap", 
                      overflow: "hidden", 
                      textOverflow: "ellipsis",
                      transition: "color 0.25s",
                      fontFamily: "var(--font-mono)",
                      flex: 1,
                      minWidth: 0,
                    }}
                    onMouseEnter={e => e.target.style.color = "var(--mint)"}
                    onMouseLeave={e => e.target.style.color = "var(--white-90)"}
                  >
                    {l.value}
                  </div>

                  {l.copyable && (
                    <button
                      onClick={(e) => handleCopy(e, l.label, l.copyValue)}
                      title={copiedField === l.label ? "Copied!" : `Copy ${l.label}`}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "4px",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 0.2s, transform 0.2s",
                        flexShrink: 0,
                        position: "relative",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = "rgba(100, 255, 218, 0.1)";
                        e.currentTarget.style.transform = "scale(1.15)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = "none";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      {copiedField === l.label ? (
                        /* Checkmark icon when copied */
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        /* Clipboard copy icon */
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--white-60)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      )}
                    </button>
                  )}
                </div>
              </TiltCard>
            </a>
          ))}
        </div>
        
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--white-30)" }}>
            © 2026 Keshav Swami · IIT Jodhpur
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--white-30)" }}>
            React · Three.js · Vite
          </div>
        </div>
      </div>
    </GrappleSection>
  );
}
