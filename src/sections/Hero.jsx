import { useState, useEffect } from "react";
import { personal } from "../data";
import Grimoire3D from "../components/Grimoire3D";

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState("");
  const [del, setDel] = useState(false);
  const [ci, setCi] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const phrase = personal.taglines[idx];
    let t;
    if (!del) {
      if (ci < phrase.length) { 
        t = setTimeout(() => { setShown(phrase.slice(0, ci + 1)); setCi(c => c + 1); }, 35); 
      } else { 
        t = setTimeout(() => setDel(true), 2500); 
      }
    } else {
      if (ci > 0) { 
        t = setTimeout(() => { setShown(phrase.slice(0, ci - 1)); setCi(c => c - 1); }, 14); 
      } else { 
        setDel(false); 
        setIdx(i => (i + 1) % personal.taglines.length); 
      }
    }
    return () => clearTimeout(t);
  }, [ci, del, idx]);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>

      <style>{`
        @keyframes twinkle { from{opacity:0.03} to{opacity:0.45} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        
        .hero-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
          width: 100%;
        }

        .tagline-text {
          font-family: var(--font-mono);
          font-size: 13.5px;
          color: var(--white-60);
          min-height: 24px;
          letter-spacing: 0.5px;
        }

        .cta-btn-primary {
          padding: 13px 30px;
          background: var(--mint);
          color: #021c1a;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 30px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 15px rgba(0, 245, 212, 0.15);
        }

        .cta-btn-primary:hover {
          background: #ffffff;
          color: #021c1a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
        }

        .cta-btn-secondary {
          padding: 13px 30px;
          background: transparent;
          color: var(--white-90);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 30px;
          border: 1px solid rgba(252, 235, 201, 0.25);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-btn-secondary:hover {
          border-color: var(--cream);
          color: var(--cream);
          background: rgba(252, 235, 201, 0.04);
          transform: translateY(-2px);
        }

        @media (max-width: 992px) {
          .hero-layout {
            grid-template-columns: 1fr;
            gap: 32px;
            padding-top: 40px;
          }
          .hero-canvas-column {
            order: -1;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 80, paddingBottom: 40 }}>
        <div className="hero-layout">
          
          {/* LEFT COLUMN: MINIMAL PROFILE SUMMARY */}
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--cream)", fontStyle: "italic", marginBottom: 20, opacity: 0.75, lineHeight: 1.5 }}>
              "Let us step out into the night and pursue that flighty temptress, adventure." — Albus Dumbledore
            </p>

            <div style={{
              fontFamily: "var(--font-mono)", 
              fontSize: "11px",
              color: "var(--mint)", 
              letterSpacing: "4px",
              textTransform: "uppercase", 
              marginBottom: 16, 
              opacity: 0.9,
            }}>
              IIT JODHPUR // ELECTRICAL ENGINEERING // '28
            </div>

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(52px, 7.5vw, 80px)",
              letterSpacing: "-2.5px",
              lineHeight: 0.95,
              marginBottom: 20,
              color: "var(--white)"
            }}>
              Keshav<br/>
              <span style={{
                color: "var(--cream)",
                textShadow: "0 0 20px rgba(252, 235, 201, 0.15)"
              }}>Swami</span>
            </h1>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}>
              <div style={{ width: 20, height: 1.2, background: "var(--mint)", opacity: 0.6 }}/>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--cream)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontWeight: 600
              }}>
                Hardware Security &amp; AI Systems
              </span>
            </div>

            <div className="tagline-text" style={{ marginBottom: 36 }}>
              {shown}
              <span style={{
                display: "inline-block",
                width: 1.5,
                height: 13,
                background: "var(--mint)",
                marginLeft: 3,
                verticalAlign: "middle",
                animation: "blink 1s infinite",
              }}/>
            </div>

            {/* Elegant action buttons */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#projects">
                <button className="cta-btn-primary">
                  Explore Projects
                </button>
              </a>
              <a href={personal.resumeUrl} target="_blank" rel="noreferrer">
                <button className="cta-btn-secondary">
                  View Resume
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D WIREFRAME MESH */}
          <div className="hero-canvas-column" style={{ width: "100%" }}>
            <div style={{ maxWidth: "360px", width: "100%" }}>
              <Grimoire3D />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
