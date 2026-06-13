import { useState, useEffect } from "react";
import HeroCanvas from "../components/HeroCanvas";
import { personal } from "../data";

export default function Hero() {
  const [idx,   setIdx]      = useState(0);
  const [shown, setShown]    = useState("");
  const [del,   setDel]      = useState(false);
  const [ci,    setCi]       = useState(0);

  useEffect(()=>{
    const phrase=personal.taglines[idx];
    let t;
    if(!del){
      if(ci<phrase.length){ t=setTimeout(()=>{setShown(phrase.slice(0,ci+1));setCi(c=>c+1);},40); }
      else { t=setTimeout(()=>setDel(true),2600); }
    } else {
      if(ci>0){ t=setTimeout(()=>{setShown(phrase.slice(0,ci-1));setCi(c=>c-1);},16); }
      else { setDel(false); setIdx(i=>(i+1)%personal.taglines.length); }
    }
    return()=>clearTimeout(t);
  },[ci,del,idx]);

  return (
    <section style={{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",overflow:"hidden"}}>

      <style>{`
        @keyframes twinkle { from{opacity:0.03} to{opacity:0.45} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      {/* Static stars */}
      <div style={{position:"absolute",inset:0,overflow:"hidden",zIndex:0}}>
        {Array.from({length:70}).map((_,i)=>(
          <div key={i} style={{
            position:"absolute",
            width:Math.random()*1.5+0.4+"px", height:Math.random()*1.5+0.4+"px",
            background: i%5===0?"#6DCFEF":"#ffffff",
            borderRadius:"50%",
            left:Math.random()*100+"%", top:Math.random()*100+"%",
            opacity:Math.random()*0.3+0.03,
            animation:`twinkle ${2+Math.random()*5}s ${Math.random()*5}s infinite alternate`,
          }}/>
        ))}
      </div>

      <HeroCanvas />

      {/* Gradient overlays */}
      <div style={{position:"absolute",inset:0,zIndex:1,pointerEvents:"none",
        background:"radial-gradient(ellipse 50% 60% at 30% 50%,rgba(1,1,8,0.0) 0%,rgba(1,1,8,0.85) 65%)"}}/>
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:200,zIndex:1,
        background:"linear-gradient(to top,#010108,transparent)",pointerEvents:"none"}}/>

      {/* TEXT — hard left, asymmetric */}
      <div className="container" style={{position:"relative",zIndex:2,paddingTop:88}}>
        <div style={{maxWidth:580}}>

          <div style={{
            fontFamily:"var(--font-mono)",fontSize:"12px",
            color:"var(--ice)",letterSpacing:"3px",
            textTransform:"uppercase",marginBottom:24,opacity:0.6,
          }}>
            // IIT Jodhpur &nbsp;·&nbsp; Electrical Engineering &nbsp;·&nbsp; '28
          </div>

          <h1 style={{
            fontFamily:"var(--font-display)",fontWeight:700,
            fontSize:"clamp(58px,8vw,92px)",
            letterSpacing:"-3px",lineHeight:0.95,
            marginBottom:24,
          }}>
            <span style={{color:"var(--white)"}}>Keshav</span><br/>
            <span style={{color:"var(--ice)"}}>Swami</span>
          </h1>

          <div style={{
            display:"flex",alignItems:"center",gap:16,
            marginBottom:20,
          }}>
            <div style={{width:32,height:1,background:"var(--ice)",opacity:0.5}}/>
            <span style={{
              fontFamily:"var(--font-mono)",fontSize:"13px",
              color:"var(--white-60)",letterSpacing:"1px",
            }}>
              Software Engineer
            </span>
          </div>

          <div style={{
            fontFamily:"var(--font-mono)",fontSize:"15px",
            color:"var(--white-30)",marginBottom:44,
            minHeight:24,letterSpacing:"0.2px",
          }}>
            {shown}
            <span style={{
              display:"inline-block",width:2,height:15,
              background:"var(--ice)",marginLeft:2,verticalAlign:"middle",
              animation:"blink 1s infinite",
            }}/>
          </div>

          {/* Buttons only — no social links here */}
          <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
            <a href="#projects">
              <button style={{
                padding:"14px 36px",
                background:"var(--ice)",
                color:"#010108",
                fontSize:"14px",fontWeight:600,letterSpacing:"0.3px",
                borderRadius:"var(--radius)",
                transition:"all 0.25s",
              }}
              onMouseEnter={e=>{e.target.style.background="#a8e6f8";e.target.style.transform="translateY(-1px)";e.target.style.boxShadow="0 8px 28px rgba(109,207,239,0.3)";}}
              onMouseLeave={e=>{e.target.style.background="var(--ice)";e.target.style.transform="none";e.target.style.boxShadow="none";}}>
                View Projects
              </button>
            </a>
            <a href={personal.resumeUrl} target="_blank" rel="noreferrer">
              <button style={{
                padding:"14px 36px",
                background:"transparent",
                color:"var(--white-90)",
                fontSize:"14px",fontWeight:500,letterSpacing:"0.3px",
                borderRadius:"var(--radius)",
                border:"1px solid rgba(255,255,255,0.18)",
                transition:"all 0.25s",
              }}
              onMouseEnter={e=>{e.target.style.borderColor="rgba(255,255,255,0.45)";e.target.style.background="rgba(255,255,255,0.05)";}}
              onMouseLeave={e=>{e.target.style.borderColor="rgba(255,255,255,0.18)";e.target.style.background="transparent";}}>
                Resume ↗
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
