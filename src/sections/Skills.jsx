import { useState, useEffect } from "react";
import { skills } from "../data";
import TiltCard from "../components/TiltCard";
import GrappleSection from "../components/GrappleSection";

const categoryDetails = [
  {
    id: "SYS_LANG_01",
    focus: "Low-level system logic, scripting automation, and hardware description.",
    useCase: "AST parsing & call graph construction in Drishti, Python scripts for security, Raylib 2D game loops in C/C++.",
    load: 92,
    status: "OPTIMAL"
  },
  {
    id: "SYS_FRAME_02",
    focus: "Modern frontend UIs, RESTful backends, and AI retrieval architectures.",
    useCase: "Semantic chunking via Sentence Transformers, REST API development in Flask, Android game compilation with RayMob.",
    load: 88,
    status: "STABLE"
  },
  {
    id: "SYS_DATA_03",
    focus: "Relational database systems and high-dimensional vector stores.",
    useCase: "Vector similarity search (ChromaDB), normalized multi-table schema design (MySQL & PostgreSQL).",
    load: 80,
    status: "SYNCHRONIZED"
  },
  {
    id: "SYS_TOOL_04",
    focus: "CI/CD automation, virtualization, and cloud production environments.",
    useCase: "Automated RTL security workflow loops in n8n, containerized development (Docker), Vercel & Render hosting.",
    load: 85,
    status: "ONLINE"
  },
  {
    id: "SYS_CONC_05",
    focus: "Advanced systems design, hardware security, and AI retrieval theory.",
    useCase: "3-stage RAG retrieval pipeline (Drishti), TMR auto-hardening logical voters, widest-path power grid routing.",
    load: 95,
    status: "ACTIVE"
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [displayedIndex, setDisplayedIndex] = useState(0);

  // Trigger loading effect when category changes
  useEffect(() => {
    setIsLoading(true);
    const t = setTimeout(() => {
      setDisplayedIndex(activeCategory);
      setIsLoading(false);
    }, 280);
    return () => clearTimeout(t);
  }, [activeCategory]);

  const activeMeta = categoryDetails[displayedIndex];
  const activeSkills = skills[displayedIndex];

  return (
    <GrappleSection id="skills">
      <div className="container">
        <div className="sec-eyebrow">// 03</div>
        <h2 className="sec-title" style={{ marginBottom: 6 }}>Technical Skills</h2>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--mint)", fontStyle: "italic", marginBottom: 28, opacity: 0.9 }}>
          "It is our choices, Harry, that show what we truly are, far more than our abilities." — Albus Dumbledore
        </p>
        <div className="sec-rule" style={{ marginTop: -10 }} />
        
        <div className="skills-layout" style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "52px",
          alignItems: "start",
        }}>
          {/* Left Column: Interactive Diagnostics Console Terminal (centered on viewport scroll) */}
          <div style={{ width: "100%", position: "sticky", top: "calc(50vh - 190px)" }}>
            <div className="glass-card" style={{
              padding: "28px 24px",
              borderLeft: "3px solid var(--mint)",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--white-60)",
              minHeight: "360px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
              position: "relative",
              overflow: "hidden"
            }}>
              
              {/* Scanline indicator */}
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0, height: "1px",
                background: "rgba(0, 245, 212, 0.25)",
                boxShadow: "0 0 10px rgba(0, 245, 212, 0.8)",
                animation: "scanline 4s linear infinite",
                pointerEvents: "none"
              }} />

              {/* Console Header */}
              <div>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(0, 245, 212, 0.15)",
                  paddingBottom: "12px",
                  marginBottom: "20px"
                }}>
                  <span style={{ color: "var(--mint)", fontWeight: "600", fontSize: "11px", letterSpacing: "1.5px" }}>
                    [CONSOLE_RUN: SKILLS_ANALYSER]
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--mint)",
                      boxShadow: "0 0 8px var(--mint)",
                      animation: "blink 1.5s infinite"
                    }} />
                    <span style={{ fontSize: "10px", color: "var(--white-30)" }}>ACTIVE</span>
                  </div>
                </div>

                {isLoading ? (
                  <div style={{ 
                    height: "180px", 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "center", 
                    alignItems: "center",
                    gap: "12px"
                  }}>
                    <span style={{ color: "var(--mint)", letterSpacing: "2px", fontSize: "11px" }}>COMPILING MODULE DATA...</span>
                    <div style={{ 
                      width: "120px", 
                      height: "2px", 
                      background: "rgba(0,245,212,0.1)", 
                      borderRadius: "1px", 
                      overflow: "hidden" 
                    }}>
                      <div style={{ 
                        height: "100%", 
                        width: "100%", 
                        background: "var(--mint)", 
                        animation: "compiling 0.28s linear forwards" 
                      }} />
                    </div>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px", animation: "fadeIn 0.25s ease-out" }}>
                    
                    {/* Module ID */}
                    <div>
                      <span style={{ color: "var(--white-30)" }}>MODULE_ID: </span>
                      <span style={{ color: "var(--cream)" }}>{activeMeta.id}</span>
                    </div>

                    {/* Module Name */}
                    <div>
                      <span style={{ color: "var(--white-30)" }}>CATEGORY:  </span>
                      <span style={{ color: "var(--white)", fontWeight: 600 }}>{activeSkills.category}</span>
                    </div>

                    {/* Focus Area */}
                    <div>
                      <span style={{ color: "var(--white-30)" }}>FOCUS:     </span>
                      <span style={{ color: "var(--white-90)" }}>{activeMeta.focus}</span>
                    </div>

                    {/* Recent Projects / Application */}
                    <div>
                      <span style={{ color: "var(--white-30)" }}>APPLICATION: </span>
                      <span style={{ color: "var(--white-90)", display: "block", marginTop: "4px", lineHeight: "1.6" }}>
                        {activeMeta.useCase}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Console Footer */}
              {!isLoading && (
                <div style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                  paddingTop: "14px",
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  animation: "fadeIn 0.25s ease-out"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "70%" }}>
                    <span style={{ fontSize: "10px", color: "var(--white-30)" }}>CORE_LOAD</span>
                    <div style={{ 
                      flex: 1, 
                      height: "4px", 
                      background: "rgba(255,255,255,0.05)", 
                      borderRadius: "2px", 
                      overflow: "hidden" 
                    }}>
                      <div style={{ 
                        height: "100%", 
                        width: `${activeMeta.load}%`, 
                        background: "var(--mint)", 
                        boxShadow: "0 0 4px var(--mint)" 
                      }} />
                    </div>
                    <span style={{ fontSize: "10px", color: "var(--mint)" }}>{activeMeta.load}%</span>
                  </div>

                  <div>
                    <span style={{ 
                      fontSize: "10px", 
                      padding: "2px 6px", 
                      background: "rgba(0, 245, 212, 0.06)", 
                      border: "1px solid rgba(0, 245, 212, 0.15)", 
                      borderRadius: "3px", 
                      color: "var(--mint)" 
                    }}>
                      {activeMeta.status}
                    </span>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Glass Skill Category Cards */}
          <div className="skills-container" style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            position: "relative",
            zIndex: 2
          }}>
            {skills.map((cat, i) => {
              const isActive = activeCategory === i;
              return (
                <div 
                  key={i} 
                  className="skill-card-wrapper"
                  onMouseEnter={() => setActiveCategory(i)}
                  onClick={() => setActiveCategory(i)}
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  <TiltCard 
                    intensity={isActive ? 6 : 2}
                    className="glass-card"
                    style={{ 
                      padding: "20px 24px",
                      borderColor: isActive ? "var(--mint)" : "var(--border)",
                      boxShadow: isActive ? "0 8px 24px rgba(0, 245, 212, 0.05)" : "none"
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      
                      {/* Category Title */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ 
                          fontFamily: "var(--font-display)", 
                          fontSize: "13px", 
                          color: isActive ? "var(--mint)" : "var(--cream)", 
                          letterSpacing: "1px", 
                          textTransform: "uppercase",
                          fontWeight: "600",
                          transition: "color 0.3s"
                        }}>
                          {cat.category}
                        </span>
                        
                        {isActive && (
                          <span style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "9px",
                            color: "var(--mint)",
                            letterSpacing: "1px"
                          }}>
                            SELECTED //
                          </span>
                        )}
                      </div>
                      
                      {/* Skill Tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {cat.items.map((item, j) => (
                          <span 
                            key={j} 
                            style={{
                              fontFamily: "var(--font-mono)", 
                              fontSize: "11px",
                              padding: "4px 10px",
                              background: "rgba(0, 245, 212, 0.02)",
                              border: "1px solid rgba(0, 245, 212, 0.08)",
                              borderRadius: 4, 
                              color: "var(--white-60)",
                              transition: "all 0.25s", 
                              cursor: "default",
                            }}
                            onMouseEnter={e => { 
                              e.target.style.background = "rgba(0, 245, 212, 0.06)"; 
                              e.target.style.borderColor = "var(--mint)"; 
                              e.target.style.color = "var(--mint)"; 
                              e.target.style.boxShadow = "0 0 8px rgba(0, 245, 212, 0.15)";
                            }}
                            onMouseLeave={e => { 
                              e.target.style.background = "rgba(0, 245, 212, 0.02)"; 
                              e.target.style.borderColor = "rgba(0, 245, 212, 0.08)"; 
                              e.target.style.color = "var(--white-60)"; 
                              e.target.style.boxShadow = "none";
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .skill-card-wrapper:hover {
          transform: translateX(6px);
        }
        
        @keyframes scanline {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(360px); opacity: 0; }
        }

        @keyframes compiling {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 992px) {
          .skills-layout {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          div[style*="sticky"] {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </GrappleSection>
  );
}
