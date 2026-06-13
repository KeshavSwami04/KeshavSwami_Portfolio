import { research, experience, education, personal } from "../data";
import TiltCard from "../components/TiltCard";

export function Education(){
  return(
    <section className="section" id="education">
      <div className="container">
        <div className="sec-eyebrow">// 02</div>
        <h2 className="sec-title">Education</h2>
        <div className="sec-rule"/>
        {education.map((ed,i)=>(
          <TiltCard key={i} style={{padding:"30px 30px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:20,flexWrap:"wrap"}}>
              <div style={{flex:1}}>
                <h3 style={{fontFamily:"var(--font-display)",fontSize:"20px",fontWeight:700,color:"var(--white)",letterSpacing:"-0.3px",marginBottom:8}}>{ed.degree}</h3>
                <div style={{fontSize:"15px",color:"var(--ice)",marginBottom:6,opacity:0.75}}>{ed.institution}</div>
                <div style={{fontFamily:"var(--font-mono)",fontSize:"12px",color:"var(--white-30)",marginBottom:18}}>{ed.period}</div>
                {/* Only JEE and CBSE tags — no subjects */}
                <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                  {ed.highlights.filter(h=>!h.startsWith("DSA")).map((h,j)=>(
                    <span key={j} style={{fontFamily:"var(--font-mono)",fontSize:"11px",padding:"4px 12px",background:"var(--white-05)",border:"1px solid var(--white-10)",borderRadius:5,color:"var(--white-30)"}}>{h}</span>
                  ))}
                </div>
              </div>
              <div style={{textAlign:"right",flexShrink:0}}>
                <div style={{fontFamily:"var(--font-display)",fontSize:"44px",fontWeight:700,letterSpacing:"-2px",color:"var(--ice)",lineHeight:1}}>{ed.cgpa.split(" ")[0]}</div>
                <div style={{fontFamily:"var(--font-mono)",fontSize:"11px",color:"var(--white-30)",letterSpacing:"1.5px",textTransform:"uppercase",marginTop:6}}>CGPA</div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

export function Research(){
  return(
    <section className="section" id="research">
      <div className="container">
        <div className="sec-eyebrow">// 05</div>
        <h2 className="sec-title">Research</h2>
        <div className="sec-rule"/>
        {research.map((r,i)=>(
          <div key={i} style={{background:"rgba(6,6,20,0.65)",backdropFilter:"blur(24px)",border:"1px solid rgba(255,255,255,0.07)",borderLeft:"2px solid var(--ice)",borderRadius:"0 var(--radius) var(--radius) 0",padding:"28px 30px 24px",marginBottom:16}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:16,flexWrap:"wrap",marginBottom:10}}>
              <h3 style={{fontFamily:"var(--font-display)",fontSize:"19px",fontWeight:700,color:"var(--white)",letterSpacing:"-0.3px"}}>{r.title}</h3>
              <span style={{fontFamily:"var(--font-mono)",fontSize:"11px",color:"var(--white-30)",flexShrink:0}}>{r.period}</span>
            </div>
            <div style={{fontFamily:"var(--font-mono)",fontSize:"12px",color:"var(--ice)",marginBottom:16,opacity:0.75}}>{r.supervisor} · {r.institution}</div>
            <p style={{fontSize:"15px",color:"var(--white-60)",lineHeight:1.85,marginBottom:18}}>{r.description}</p>
            <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:18}}>
              {r.tags.map((t,j)=>(
                <span key={j} style={{fontFamily:"var(--font-mono)",fontSize:"11px",padding:"4px 11px",background:"rgba(109,207,239,0.07)",border:"1px solid rgba(109,207,239,0.15)",borderRadius:4,color:"var(--ice)",opacity:0.8}}>{t}</span>
              ))}
            </div>
            {r.github&&<a href={r.github} target="_blank" rel="noreferrer" style={{fontFamily:"var(--font-mono)",fontSize:"12px",color:"var(--ice)",letterSpacing:"1px",textTransform:"uppercase",opacity:0.75,transition:"opacity 0.2s"}} onMouseEnter={e=>e.target.style.opacity="1"} onMouseLeave={e=>e.target.style.opacity="0.75"}>View on GitHub ↗</a>}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Experience(){
  return(
    <section className="section" id="pors">
      <div className="container">
        <div className="sec-eyebrow">// 06</div>
        <h2 className="sec-title">Positions of Responsibility</h2>
        <div className="sec-rule"/>
        <div style={{position:"relative",paddingLeft:30}}>
          <div style={{position:"absolute",left:7,top:14,bottom:14,width:1,background:"linear-gradient(to bottom,rgba(109,207,239,0.4),rgba(109,207,239,0.04))"}}/>
          {experience.map((exp,i)=>(
            <div key={i} style={{position:"relative",marginBottom:i<experience.length-1?28:0}}>
              <div style={{position:"absolute",left:-24,top:12,width:11,height:11,borderRadius:"50%",background:"var(--bg)",border:`2px solid ${i===0?"var(--ice)":"rgba(255,255,255,0.2)"}`,boxShadow:i===0?"0 0 12px var(--ice-glow)":"none"}}/>
              <TiltCard style={{padding:"22px 26px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:8,marginBottom:8}}>
                  <h3 style={{fontFamily:"var(--font-display)",fontSize:"17px",fontWeight:700,color:"var(--white)"}}>{exp.role}</h3>
                  <span style={{fontFamily:"var(--font-mono)",fontSize:"11px",color:"var(--white-30)"}}>{exp.period}</span>
                </div>
                <div style={{fontFamily:"var(--font-mono)",fontSize:"12px",color:"var(--ice)",marginBottom:14,opacity:0.7}}>{exp.org}</div>
                <p style={{fontSize:"15px",color:"var(--white-60)",lineHeight:1.8}}>{exp.description}</p>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact(){
  const links=[
    {label:"Email",    value:personal.email,  href:`https://mail.google.com/mail/?view=cm&to=${personal.email}`},
    {label:"GitHub",   value:"KeshavSwami04", href:personal.github},
    {label:"LinkedIn", value:"Keshav Swami",  href:personal.linkedin},
    {label:"Phone",    value:personal.phone,  href:`tel:${personal.phone.replace(/\s/g,"")}`},
  ];
  return(
    <section className="section" id="contact">
      <div className="container">
        <div className="sec-eyebrow">// 07</div>
        <h2 className="sec-title">Get In Touch</h2>
        <div className="sec-rule"/>
        <p style={{fontSize:"17px",color:"var(--white-60)",maxWidth:500,lineHeight:1.85,marginBottom:44}}>
          Whether it's a project, internship, research collaboration, or just a good conversation — my inbox is open.
        </p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:14,marginBottom:56}}>
          {links.map((l,i)=>(
            <a key={i} href={l.href} target="_blank" rel="noreferrer">
              <TiltCard style={{padding:"20px 22px",cursor:"pointer"}}>
                <div style={{fontFamily:"var(--font-mono)",fontSize:"10px",color:"var(--white-30)",letterSpacing:"2px",textTransform:"uppercase",marginBottom:8}}>{l.label}</div>
                <div style={{
                  fontSize:"13px",color:"var(--white-90)",fontWeight:500,
                  whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",
                }}>{l.value}</div>
              </TiltCard>
            </a>
          ))}
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:28,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
          <div style={{fontFamily:"var(--font-mono)",fontSize:"12px",color:"var(--white-30)",letterSpacing:"1px"}}>© 2026 Keshav Swami · IIT Jodhpur</div>
          <div style={{fontFamily:"var(--font-mono)",fontSize:"12px",color:"var(--white-30)",letterSpacing:"1px"}}>Built with React · Three.js · Vite</div>
        </div>
      </div>
    </section>
  );
}
