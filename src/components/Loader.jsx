import { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [percent, setPercent] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Accelerate loading progress
      const increment = Math.floor(Math.random() * 8) + 4;
      current = Math.min(100, current + increment);
      setPercent(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => onDone(), 600);
        }, 300);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div style={{
      position: "fixed", 
      inset: 0, 
      zIndex: 9999,
      background: "#060606",
      display: "flex", 
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center",
      overflow: "hidden",
      opacity: exiting ? 0 : 1,
      transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      pointerEvents: exiting ? "none" : "all",
    }}>
      {/* Decorative clean outer circle */}
      <div style={{
        position: "relative",
        width: "110px",
        height: "110px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {/* Pulsing ring */}
        <div style={{
          position: "absolute",
          inset: 0,
          border: "1.5px solid var(--border)",
          borderRadius: "50%",
          animation: "loaderPulse 2s infinite ease-in-out"
        }} />

        {/* Counter */}
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: "19px",
          fontWeight: 600,
          color: "var(--cream)",
          letterSpacing: "1px"
        }}>
          {percent}%
        </div>
      </div>

      {/* Subtitle */}
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        color: "var(--mint)",
        marginTop: "16px",
        letterSpacing: "3px",
        textTransform: "uppercase",
        opacity: 0.8
      }}>
        Lumos...
      </div>

      {/* Quote */}
      <div style={{
        fontFamily: "var(--font-body)",
        fontSize: "13.5px",
        fontStyle: "italic",
        color: "var(--white-60)",
        marginTop: "36px",
        textAlign: "center",
        maxWidth: "400px",
        padding: "0 24px",
        lineHeight: "1.65",
        opacity: 0.8
      }}>
        "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light."
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--mint)",
          marginTop: "8px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          fontStyle: "normal",
          opacity: 0.9
        }}>
          — Albus Dumbledore
        </div>
      </div>

      <style>{`
        @keyframes loaderPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.08); opacity: 0.85; border-color: var(--mint); }
        }
      `}</style>
    </div>
  );
}
