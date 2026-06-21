import React from "react";

export default function NebulaBackground() {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: -1,
      overflow: "hidden",
      background: "#060606",
      pointerEvents: "none",
    }}>
      {/* Aurora Blob 1: Cosmic Teal */}
      <div className="aurora-blob aurora-1" style={{
        position: "absolute",
        top: "-15%",
        left: "-15%",
        width: "55vw",
        height: "55vw",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(13, 148, 136, 0.13) 0%, rgba(13, 148, 136, 0) 70%)",
        filter: "blur(100px)",
      }} />

      {/* Aurora Blob 2: Cosmic Amethyst Purple */}
      <div className="aurora-blob aurora-2" style={{
        position: "absolute",
        bottom: "-15%",
        right: "-15%",
        width: "65vw",
        height: "65vw",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(109, 40, 217, 0.11) 0%, rgba(109, 40, 217, 0) 70%)",
        filter: "blur(110px)",
      }} />

      {/* Aurora Blob 3: Golden Spell Spark */}
      <div className="aurora-blob aurora-3" style={{
        position: "absolute",
        top: "25%",
        left: "20%",
        width: "50vw",
        height: "50vw",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(211, 166, 37, 0.09) 0%, rgba(211, 166, 37, 0) 70%)",
        filter: "blur(100px)",
      }} />

      <style>{`
        .aurora-blob {
          mix-blend-mode: screen;
          will-change: transform;
        }

        .aurora-1 {
          animation: aurora-move-1 25s infinite alternate ease-in-out;
        }

        .aurora-2 {
          animation: aurora-move-2 30s infinite alternate ease-in-out;
        }

        .aurora-3 {
          animation: aurora-move-3 22s infinite alternate ease-in-out;
        }

        @keyframes aurora-move-1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(8vw, 6vh) scale(1.1); }
          100% { transform: translate(-4vw, 12vh) scale(0.9); }
        }

        @keyframes aurora-move-2 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10vw, -8vh) scale(0.9); }
          100% { transform: translate(3vw, -4vh) scale(1.05); }
        }

        @keyframes aurora-move-3 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(6vw, -12vh) scale(1.15); }
          100% { transform: translate(-8vw, 4vh) scale(0.9); }
        }
      `}</style>
    </div>
  );
}
