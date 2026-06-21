import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GrappleSection({ children, id, className = "", style = {} }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
  }, []);

  if (reducedMotion) {
    return (
      <section id={id} className={`section ${className}`} style={style}>
        {children}
      </section>
    );
  }

  return (
    <section id={id} className={`section ${className}`} style={{ ...style, position: "relative", overflow: "hidden" }}>
      {/* Holographic Scanning Laser Line */}
      <motion.div
        initial={{ top: "0%", opacity: 0 }}
        whileInView={{ top: "100%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-120px" }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, var(--teal) 15%, var(--violet) 50%, var(--teal) 85%, transparent)",
          boxShadow: "0 0 10px var(--teal), 0 0 4px var(--violet)",
          zIndex: 4,
          pointerEvents: "none"
        }}
      />

      {/* Futuristic Holographic fade-and-scale entry reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 60,
          damping: 15,
          mass: 0.7,
          delay: 0.05
        }}
        viewport={{ once: true, margin: "-120px" }}
        style={{ width: "100%", height: "100%" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
