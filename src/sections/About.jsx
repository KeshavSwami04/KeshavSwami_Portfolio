import { personal } from "../data";
import TiltCard from "../components/TiltCard";
import CountUp from "../components/CountUp";
import GrappleSection from "../components/GrappleSection";

const statMeta = [
  { target: "6",    suffix: "+",  label: "Projects Shipped" },
  { target: "7.57", suffix: "",   label: "CGPA / 10" },
  { target: "5572", suffix: "",   label: "JEE Adv. AIR" },
  { target: "96.6", suffix: "%",  label: "Class XII" },
];

export default function About() {
  return (
    <GrappleSection id="about">
      <div className="container">
        
        <div className="sec-eyebrow">// 01</div>
        <h2 className="sec-title" style={{ marginBottom: 6 }}>About Me</h2>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--mint)", fontStyle: "italic", marginBottom: 28, opacity: 0.9 }}>
          "It does not do to dwell on dreams and forget to live." — Albus Dumbledore
        </p>
        <div className="sec-rule" />

        <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "52px", alignItems: "start" }} className="about-layout">
          
          <style>{`
            @media (max-width: 992px) {
              .about-layout {
                grid-template-columns: 1fr !important;
                gap: 36px !important;
              }
            }
          `}</style>

          {/* Left Column: Intro Description */}
          <div>
            {personal.about.split("\n\n").map((p, i) => (
              <p 
                key={i} 
                style={{ 
                  color: "var(--white-60)", 
                  fontSize: "16px", 
                  lineHeight: 1.8,
                  marginBottom: 20 
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Right Column: Clean Glass Stats Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            {statMeta.map((s, i) => (
              <TiltCard 
                key={i} 
                intensity={5}
                className="glass-card"
                style={{ 
                  padding: "26px 18px", 
                  textAlign: "center"
                }}
              >
                {/* Metric value */}
                <div style={{ 
                  fontFamily: "var(--font-display)", 
                  fontSize: "30px", 
                  fontWeight: 600, 
                  lineHeight: 1.1, 
                  marginBottom: 6, 
                  color: i % 2 === 0 ? "var(--mint)" : "var(--cream)" 
                }}>
                  <CountUp target={s.target} suffix={s.suffix} />
                </div>
                
                {/* Metric Label */}
                <div style={{ 
                  fontFamily: "var(--font-body)", 
                  fontSize: "12px", 
                  color: "var(--white-90)", 
                  fontWeight: 500,
                  opacity: 0.85
                }}>
                  {s.label}
                </div>
              </TiltCard>
            ))}

            {/* "Open to Opportunities" minimal row */}
            <TiltCard 
              intensity={3}
              className="glass-card"
              style={{ 
                gridColumn: "1 / -1", 
                padding: "16px 20px", 
                display: "flex", 
                alignItems: "center", 
                gap: 14,
                borderLeft: "2px solid var(--mint)"
              }}
            >
              <div style={{ 
                width: 7, 
                height: 7, 
                borderRadius: "50%", 
                background: "var(--mint)", 
                flexShrink: 0 
              }} />
              
              <div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--white)", marginBottom: 1 }}>
                  Open to Opportunities
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", color: "var(--white-30)" }}>
                  Internships · Research · Collaborations
                </div>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </GrappleSection>
  );
}
