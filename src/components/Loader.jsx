import { useEffect, useState, useRef } from "react";

export default function Loader({ onDone }) {
  const [scanPct, setScanPct]   = useState(0);
  const [frozen,  setFrozen]    = useState({ tag:false, name:false, sub:false });
  const [exiting, setExiting]   = useState(false);
  const rafRef  = useRef(null);
  const t0Ref   = useRef(null);
  const DURATION = 2000;

  useEffect(() => {
    const tick = (ts) => {
      if (!t0Ref.current) t0Ref.current = ts;
      const p = Math.min((ts - t0Ref.current) / DURATION, 1);
      const ease = p < 0.5 ? 2*p*p : -1+(4-2*p)*p;
      const pct  = ease * 100;
      setScanPct(pct);
      if (pct > 20) setFrozen(f => ({...f, tag:  true}));
      if (pct > 42) setFrozen(f => ({...f, name: true}));
      if (pct > 66) setFrozen(f => ({...f, sub:  true}));
      if (p < 1) { rafRef.current = requestAnimationFrame(tick); }
      else {
        // Scan line reaches bottom — pause briefly, then hand off to hero
        setTimeout(() => setExiting(true),  300);
        setTimeout(() => onDone(),           900);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onDone]);

  const frozenCls = (key) => ({
    opacity:   frozen[key] ? 1 : 0,
    transform: frozen[key] ? "translateY(0)" : "translateY(14px)",
    filter:    frozen[key] ? "none" : "blur(6px)",
    transition: "opacity 0.35s ease, transform 0.4s ease, filter 0.35s ease",
  });

  return (
    <div style={{
      position:"fixed", inset:0, zIndex:9999,
      background:"#010108",
      display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"center",
      overflow:"hidden",
      opacity: exiting ? 0 : 1,
      transition: exiting ? "opacity 0.6s ease" : "none",
      pointerEvents: exiting ? "none" : "all",
    }}>

      {/* Stars */}
      <div style={{position:"absolute",inset:0,overflow:"hidden"}}>
        {Array.from({length:90}).map((_,i)=>(
          <div key={i} style={{
            position:"absolute",
            width: Math.random()*1.5+0.4+"px",
            height: Math.random()*1.5+0.4+"px",
            background: i%4===0 ? "#6DCFEF" : "#ffffff",
            borderRadius:"50%",
            left: Math.random()*100+"%",
            top:  Math.random()*100+"%",
            opacity: Math.random()*0.35+0.04,
            animation:`twinkle ${2+Math.random()*5}s ${Math.random()*4}s infinite alternate`,
          }}/>
        ))}
      </div>

      {/* Scan line — becomes the horizon */}
      <div style={{
        position:"absolute", left:0, right:0,
        top: `${scanPct}%`,
        height: "1px",
        background:"linear-gradient(90deg,transparent 0%,rgba(109,207,239,0.4) 15%,#6DCFEF 40%,#ffffff 50%,#6DCFEF 60%,rgba(109,207,239,0.4) 85%,transparent 100%)",
        boxShadow:"0 0 8px rgba(109,207,239,0.8), 0 0 24px rgba(109,207,239,0.35)",
        zIndex:10,
        transition:"none",
      }}/>

      {/* Scanned region tint */}
      <div style={{
        position:"absolute", left:0, right:0, top:0,
        height:`${scanPct}%`,
        background:"linear-gradient(to bottom,transparent 70%,rgba(109,207,239,0.02) 100%)",
        zIndex:9, pointerEvents:"none",
      }}/>

      {/* Content */}
      <div style={{position:"relative",zIndex:11,textAlign:"center",userSelect:"none",padding:"0 24px"}}>
        <div style={{...frozenCls("tag"), marginBottom:20}}>
          <span style={{
            fontFamily:"'JetBrains Mono',monospace",
            fontSize:"12px", color:"var(--ice)",
            letterSpacing:"4px", textTransform:"uppercase", opacity:0.65,
          }}>// IIT Jodhpur · EE '28</span>
        </div>

        <div style={{...frozenCls("name"), marginBottom:14}}>
          <div style={{
            fontFamily:"'Space Grotesk',sans-serif",
            fontSize:"clamp(52px,10vw,96px)",
            fontWeight:700,
            letterSpacing:"-3px", lineHeight:0.95,
            color:"#FFFFFF",
            textShadow:"0 0 60px rgba(109,207,239,0.2)",
          }}>
            KESHAV<br/>
            <span style={{color:"var(--ice)"}}>SWAMI</span>
          </div>
        </div>

        <div style={{...frozenCls("sub")}}>
          <div style={{
            fontFamily:"'JetBrains Mono',monospace",
            fontSize:"13px", color:"rgba(255,255,255,0.40)",
            letterSpacing:"1.5px",
          }}>
            Software Engineer · Hardware Security · AI Systems
          </div>
          {/* Progress track */}
          <div style={{width:180,height:1,background:"rgba(109,207,239,0.1)",margin:"28px auto 0",borderRadius:1,overflow:"hidden"}}>
            <div style={{height:"100%",width:`${scanPct}%`,background:"var(--ice)",transition:"width 0.08s linear"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}
