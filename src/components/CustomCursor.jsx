import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [hidden, setIsHidden] = useState(true);
  const [hovered, setHovered] = useState(false);

  // Position references
  const mouse = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rafId = useRef(null);

  // Speed and deformation variables
  const speed = useRef(0);
  const angle = useRef(0);
  const lastMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
        setIsTouch(true);
      }
    };
    checkTouch();

    if (isTouch) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      setIsHidden(false);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    // Dynamic hover detection for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const isClickable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.getAttribute("role") === "button" ||
        target.classList.contains("clickable") ||
        target.closest(".cyber-panel") ||
        target.closest(".card-glitch");

      if (isClickable) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    // Animation Loop
    const render = () => {
      // 1. Calculate velocity and angle
      const dx = mouse.current.x - lastMouse.current.x;
      const dy = mouse.current.y - lastMouse.current.y;
      
      const currentSpeed = Math.sqrt(dx * dx + dy * dy);
      speed.current += (currentSpeed - speed.current) * 0.15; // Smooth speed
      
      if (currentSpeed > 0.5) {
        angle.current = Math.atan2(dy, dx);
      }

      lastMouse.current.x = mouse.current.x;
      lastMouse.current.y = mouse.current.y;

      // 2. Interpolate positions (spring effect)
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.35;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.35;

      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15;

      // 3. Apply transformations to elements
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      if (ringRef.current) {
        // Calculate stretch based on speed
        const stretch = Math.min(speed.current * 0.015, 0.4); 
        const scaleX = 1 + stretch;
        const scaleY = 1 - stretch;
        const rot = angle.current * (180 / Math.PI);

        ringRef.current.style.transform = `
          translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) 
          translate3d(-50%, -50%, 0)
          rotate(${rot}deg)
          scale(${scaleX}, ${scaleY})
        `;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId.current);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovered ? "10px" : "6px",
          height: hovered ? "10px" : "6px",
          backgroundColor: hovered ? "var(--teal-bright)" : "var(--teal)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10000,
          opacity: hidden ? 0 : 1,
          transition: "width 0.25s, height 0.25s, background-color 0.25s, opacity 0.3s",
          boxShadow: hovered 
            ? "0 0 10px var(--teal-bright), 0 0 3px var(--teal)"
            : "0 0 4px var(--teal-glow)",
        }}
      />

      {/* Outer Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovered ? "42px" : "26px",
          height: hovered ? "42px" : "26px",
          border: hovered 
            ? "1px solid rgba(0, 240, 255, 0.45)"
            : "1px solid rgba(0, 240, 255, 0.22)",
          backgroundColor: hovered 
            ? "rgba(0, 240, 255, 0.04)"
            : "transparent",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: hidden ? 0 : 0.85,
          transition: "width 0.25s, height 0.25s, border-color 0.25s, background-color 0.25s, opacity 0.3s",
          willChange: "transform",
        }}
      />
    </>
  );
}
