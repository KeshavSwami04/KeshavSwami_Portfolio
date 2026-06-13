import { useState } from "react";
import { projects } from "../data";

function ProjectItem({proj,isOpen,onToggle}){
  return(
    <div style={{
      borderRadius:"var(--radius)",
      border:`1px solid ${isOpen?"rgba(109,207,239,0.22)":"rgba(255,255,255,0.07)"}`,
      background:isOpen?"rgba(6,6,22,0.8)":"rgba(4,4,14,0.5)",
      backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",
      transition:"border-color 0.3s,background 0.3s",overflow:"hidden",
    }}>
      <div onClick={onToggle} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"22px 28px",cursor:"pointer",userSelect:"none",gap:16}}>
        <div style={{display:"flex",alignItems:"center",gap:18,minWidth:0}}>
          <span style={{fontFamily:"var(--font-mono)",fontSize:"12px",color:isOpen?"var(--ice)":"var(--white-30)",letterSpacing:"1px",flexShrink:0,transition:"color 0.2s"}}>{proj.id}</span>
          <div style={{minWidth:0}}>
            <div style={{fontFamily:"var(--font-display)",fontSize:"18px",fontWeight:600,color:isOpen?"var(--white)":"var(--white-90)",letterSpacing:"-0.3px",marginBottom:3,transition:"color 0.2s"}}>{proj.name}</div>
            <div style={{fontSize:"13px",color:"var(--white-30)",fontStyle:"italic"}}>{proj.subtitle}</div>
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:14,flexShrink:0}}>
          <div style={{display:"flex",gap:7,flexWrap:"wrap",justifyContent:"flex-end"}}>
            {proj.stack.slice(0,3).map((s,i)=>(
              <span key={i} style={{fontFamily:"var(--font-mono)",fontSize:"10px",padding:"3px 9px",background:"rgba(109,207,239,0.07)",border:"1px solid rgba(109,207,239,0.15)",borderRadius:4,color:"var(--ice)",opacity:0.8,letterSpacing:"0.5px"}}>{s}</span>
            ))}
          </div>
          <div style={{width:26,height:26,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",border:`1px solid ${isOpen?"rgba(109,207,239,0.35)":"rgba(255,255,255,0.12)"}`,color:isOpen?"var(--ice)":"var(--white-30)",fontSize:13,flexShrink:0,transform:isOpen?"rotate(180deg)":"rotate(0)",transition:"transform 0.3s,color 0.2s,border-color 0.2s"}}>↓</div>
        </div>
      </div>
      <div style={{maxHeight:isOpen?"600px":"0",overflow:"hidden",transition:"max-height 0.4s cubic-bezier(0.4,0,0.2,1)"}}>
        <div style={{padding:"0 28px 28px 64px",borderTop:"1px solid rgba(255,255,255,0.06)"}}>
          <div style={{display:"flex",flexWrap:"wrap",gap:7,margin:"18px 0"}}>
            {proj.stack.map((s,i)=>(
              <span key={i} style={{fontFamily:"var(--font-mono)",fontSize:"11px",padding:"4px 11px",background:"var(--white-05)",border:"1px solid var(--white-10)",borderRadius:4,color:"var(--white-30)"}}>{s}</span>
            ))}
          </div>
          <p style={{fontSize:"15px",color:"var(--white-60)",lineHeight:1.85,marginBottom:18}}>{proj.description}</p>
          <div style={{marginBottom:22}}>
            {proj.highlights.map((h,i)=>(
              <div key={i} style={{display:"flex",alignItems:"flex-start",gap:12,marginBottom:8}}>
                <span style={{color:"var(--ice)",fontSize:"10px",marginTop:5,flexShrink:0,opacity:0.7}}>◆</span>
                <span style={{fontSize:"14px",color:"var(--white-60)",lineHeight:1.7}}>{h}</span>
              </div>
            ))}
          </div>
          {/* Both links always cyan */}
          <div style={{display:"flex",gap:20}}>
            {proj.github&&(
              <a href={proj.github} target="_blank" rel="noreferrer"
                style={{fontFamily:"var(--font-mono)",fontSize:"12px",color:"var(--ice)",letterSpacing:"1px",textTransform:"uppercase",opacity:0.85,transition:"opacity 0.2s"}}
                onMouseEnter={e=>e.target.style.opacity="1"}
                onMouseLeave={e=>e.target.style.opacity="0.85"}>
                GitHub ↗
              </a>
            )}
            {proj.demo&&(
              <a href={proj.demo} target="_blank" rel="noreferrer"
                style={{fontFamily:"var(--font-mono)",fontSize:"12px",color:"var(--ice)",letterSpacing:"1px",textTransform:"uppercase",opacity:0.85,transition:"opacity 0.2s"}}
                onMouseEnter={e=>e.target.style.opacity="1"}
                onMouseLeave={e=>e.target.style.opacity="0.85"}>
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects(){
  const [openIdx,setOpenIdx]=useState(0);
  return(
    <section className="section" id="projects">
      <div className="container">
        <div className="sec-eyebrow">// 04</div>
        <h2 className="sec-title">Projects</h2>
        <div className="sec-rule"/>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {projects.map((p,i)=>(
            <ProjectItem key={p.id} proj={p} isOpen={openIdx===i} onToggle={()=>setOpenIdx(openIdx===i?-1:i)}/>
          ))}
        </div>
      </div>
    </section>
  );
}
