import { skills } from "../data";
import TiltCard from "../components/TiltCard";

export default function Skills(){
  return(
    <section className="section" id="skills">
      <div className="container">
        <div className="sec-eyebrow">// 03</div>
        <h2 className="sec-title">Technical Skills</h2>
        <div className="sec-rule"/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))",gap:16}}>
          {skills.map((cat,i)=>(
            <TiltCard key={i} style={{padding:"26px 26px 22px"}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:18}}>
                {/* All bars glow ice blue */}
                <div style={{width:3,height:18,borderRadius:2,background:"var(--ice)",flexShrink:0,boxShadow:"0 0 8px rgba(109,207,239,0.7)"}}/>
                <div style={{fontFamily:"var(--font-mono)",fontSize:"11px",color:"var(--white-60)",letterSpacing:"2px",textTransform:"uppercase"}}>{cat.category}</div>
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                {cat.items.map((item,j)=>(
                  <span key={j} style={{
                    fontFamily:"var(--font-mono)",fontSize:"12px",
                    padding:"6px 13px",
                    background:"var(--white-05)",
                    border:"1px solid var(--white-10)",
                    borderRadius:6,color:"var(--white-60)",
                    transition:"all 0.2s",cursor:"default",
                  }}
                  onMouseEnter={e=>{e.target.style.background="rgba(109,207,239,0.1)";e.target.style.borderColor="rgba(109,207,239,0.35)";e.target.style.color="var(--ice)";}}
                  onMouseLeave={e=>{e.target.style.background="var(--white-05)";e.target.style.borderColor="var(--white-10)";e.target.style.color="var(--white-60)";}}>
                    {item}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
