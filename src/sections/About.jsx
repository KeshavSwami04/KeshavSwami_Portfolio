import { personal } from "../data";
import TiltCard from "../components/TiltCard";
import CountUp from "../components/CountUp";

const statMeta=[
  {target:"6",   suffix:"+",   label:"Projects Shipped"},
  {target:"7.57",suffix:"",    label:"CGPA / 10"},
  {target:"5572",suffix:"",    label:"JEE Adv. AIR"},
  {target:"96.6",suffix:"%",   label:"Class XII"},
];

export default function About(){
  return(
    <section className="section" id="about">
      <div className="container">
        <div className="sec-eyebrow">// 01</div>
        <h2 className="sec-title">About Me</h2>
        <div className="sec-rule"/>

        <div style={{display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:52,alignItems:"start"}}>
          <div>
            {personal.about.split("\n\n").map((p,i)=>(
              <p key={i} style={{color:"var(--white-60)",fontSize:"17px",lineHeight:1.85,marginBottom:22}}>{p}</p>
            ))}
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
            {statMeta.map((s,i)=>(
              <TiltCard key={i} style={{padding:"26px 22px",textAlign:"center",position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:i%2===0?"var(--ice)":"rgba(255,255,255,0.2)",opacity:0.5}}/>
                <div style={{fontFamily:"var(--font-display)",fontSize:"30px",fontWeight:700,letterSpacing:"-1px",lineHeight:1,marginBottom:8,color:i%2===0?"var(--ice)":"var(--white)"}}>
                  <CountUp target={s.target} suffix={s.suffix}/>
                </div>
                <div style={{fontFamily:"var(--font-mono)",fontSize:"10px",color:"var(--white-30)",letterSpacing:"1.5px",textTransform:"uppercase"}}>{s.label}</div>
              </TiltCard>
            ))}
            <TiltCard style={{gridColumn:"1 / -1",padding:"18px 22px",display:"flex",alignItems:"center",gap:14}}>
              <div style={{width:9,height:9,borderRadius:"50%",background:"#4ade80",animation:"pulseGreen 2s infinite",flexShrink:0}}/>
              <div>
                <div style={{fontSize:"15px",fontWeight:600,color:"var(--white)",marginBottom:2}}>Open to Opportunities</div>
                <div style={{fontFamily:"var(--font-mono)",fontSize:"11px",color:"var(--white-30)",letterSpacing:"0.5px"}}>Internships · Research · Collaborations</div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
