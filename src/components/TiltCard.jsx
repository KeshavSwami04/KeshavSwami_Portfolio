import { useRef } from "react";

export default function TiltCard({ children, style = {}, className = "", intensity = 14 }) {
  const ref = useRef(null);

  const onMove = e => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(700px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateZ(8px)`;
    card.style.boxShadow = `
      ${-x * 16}px ${y * 10}px 32px rgba(0,0,0,0.5),
      0 0 0 1px rgba(109,207,239,0.35),
      0 0 20px rgba(109,207,239,0.12),
      inset 0 0 0 1px rgba(109,207,239,0.08)
    `;
  };

  const onLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transition = "transform 0.55s cubic-bezier(0.23,1,0.32,1), box-shadow 0.55s ease";
    card.style.transform  = "perspective(700px) rotateX(0) rotateY(0) translateZ(0)";
    card.style.boxShadow  = "0 0 0 1px rgba(109,207,239,0.10)";
    setTimeout(() => { if (card) card.style.transition = ""; }, 560);
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        background: "rgba(6,6,20,0.65)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: "1px solid rgba(109,207,239,0.10)",
        borderRadius: "10px",
        boxShadow: "0 0 0 1px rgba(109,207,239,0.10)",
        transformStyle: "preserve-3d",
        willChange: "transform",
        ...style,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
