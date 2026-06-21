import { useRef, useEffect, useState } from "react";

export default function TiltCard({ children, style = {}, className = "", intensity = 8 }) {
  const ref = useRef(null);
  const glareRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch capability
    const checkTouch = () => {
      if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
        setIsTouchDevice(true);
      }
    };
    checkTouch();
  }, []);

  const onMove = e => {
    if (isTouchDevice) return;
    const card = ref.current;
    const glare = glareRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    
    // Smooth transform transition during tracking
    card.style.transition = "transform 0.1s ease-out, box-shadow 0.2s ease";
    card.style.transform = `perspective(800px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateZ(5px)`;
    card.style.boxShadow = `
      ${-x * 12}px ${y * 8}px 32px rgba(0,0,0,0.6),
      0 0 0 1px rgba(0, 240, 255, 0.2),
      0 0 15px rgba(0, 240, 255, 0.08),
      inset 0 0 0 1px rgba(255,255,255,0.02)
    `;

    if (glare) {
      const glX = e.clientX - rect.left;
      const glY = e.clientY - rect.top;
      glare.style.background = `radial-gradient(circle at ${glX}px ${glY}px, rgba(0, 240, 255, 0.08) 0%, rgba(157, 78, 221, 0.03) 40%, transparent 70%)`;
      glare.style.opacity = "1";
    }
  };

  const onLeave = () => {
    const card = ref.current;
    const glare = glareRef.current;
    if (!card) return;
    
    // Explicitly transition back to flat layout coordinates
    card.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease";
    card.style.transform  = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    card.style.boxShadow  = "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--border)";
    
    if (glare) {
      glare.style.transition = "opacity 0.4s ease";
      glare.style.opacity = "0";
    }

    // Safeguard reset timeout to completely clear dynamic inline transforms
    setTimeout(() => {
      if (card) {
        card.style.transition = "";
      }
      if (glare) {
        glare.style.transition = "";
      }
    }, 450);
  };

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        background: "var(--bg-card)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        transformStyle: "preserve-3d",
        willChange: "transform",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        transition: "border-color 0.3s, box-shadow 0.3s",
        ...style,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Glare overlay element */}
      <div
        ref={glareRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          pointerEvents: "none",
          zIndex: 1,
          willChange: "background, opacity",
        }}
      />
      
      {/* Content wrapper with isolation to prevent being covered by glare */}
      <div style={{ position: "relative", zIndex: 2, height: "100%", width: "100%" }}>
        {children}
      </div>
    </div>
  );
}
