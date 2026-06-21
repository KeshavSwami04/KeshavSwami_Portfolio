import React from "react";

export default function Grimoire3D() {
  const runes = [
    { text: "C++", left: "20%", delay: "0.2s" },
    { text: "Python", left: "60%", delay: "1.4s" },
    { text: "RAG", left: "40%", delay: "0.8s" },
    { text: "n8n", left: "75%", delay: "2.0s" },
    { text: "Verilog", left: "15%", delay: "1.7s" },
  ];

  const sparks = [
    { left: "30%", delay: "0.5s", size: "4px" },
    { left: "50%", delay: "1.1s", size: "6px" },
    { left: "70%", delay: "1.7s", size: "3px" },
    { left: "25%", delay: "2.3s", size: "5px" },
  ];

  return (
    <div className="grimoire-container">
      <div className="grimoire-book">
        
        {/* BACK COVER */}
        <div className="book-cover back"></div>

        {/* SPINE */}
        <div className="book-spine"></div>

        {/* PARCHMENT PAGES LAYER 1 */}
        <div className="book-pages layer-1"></div>

        {/* PARCHMENT PAGES LAYER 2 */}
        <div className="book-pages layer-2"></div>

        {/* PARCHMENT PAGES LAYER 3 (Active reading layer) */}
        <div className="book-pages layer-3">
          <div className="inner-glow" />
          
          <div className="page-header">// SPELLBOOK</div>
          
          <div className="page-content">
            <p className="page-code">#include &lt;magic.h&gt;</p>
            <p className="page-code">void castSpell() &#123;</p>
            <p className="page-code" style={{ paddingLeft: "8px" }}>Lumos();</p>
            <p className="page-code" style={{ paddingLeft: "8px" }}>CompileSys();</p>
            <p className="page-code">&#125;</p>
          </div>

          <div className="page-footer">IIT JODHPUR · 2028</div>

          {/* RISING SPELL RUNES */}
          {runes.map((r, i) => (
            <div
              key={`rune-${i}`}
              className="floating-spell-rune"
              style={{ left: r.left, animationDelay: r.delay }}
            >
              {r.text}
            </div>
          ))}

          {/* RISING SPELL SPARKS */}
          {sparks.map((s, i) => (
            <div
              key={`spark-${i}`}
              className="floating-spell-spark"
              style={{
                left: s.left,
                width: s.size,
                height: s.size,
                animationDelay: s.delay,
              }}
            />
          ))}
        </div>

        {/* FRONT COVER */}
        <div className="book-cover front">
          {/* Filigree corner accents */}
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>

          {/* Front title */}
          <div className="book-title-header">KESHAV SWAMI</div>
          
          {/* Central Runic Crest */}
          <div className="runic-crest-wrapper">
            <svg viewBox="0 0 100 100" className="crest-svg" style={{ width: '80px', height: '80px' }}>
              {/* Left Lens */}
              <circle cx="34" cy="56" r="13" stroke="var(--mint)" strokeWidth="2.5" fill="none" />
              
              {/* Right Lens */}
              <circle cx="66" cy="56" r="13" stroke="var(--mint)" strokeWidth="2.5" fill="none" />
              
              {/* Glasses Bridge */}
              <path d="M 47 52 Q 50 49 53 52" stroke="var(--mint)" strokeWidth="2.5" fill="none" />
              
              {/* Lightning Bolt Scar above right lens */}
              <path d="M 52 18 L 62 29 L 55 29 L 63 43 L 48 30 L 55 30 Z" fill="var(--mint)" />
            </svg>
          </div>

          <div className="book-title-footer">SYSTEMS &amp; SPELLS</div>
        </div>

      </div>

      <style>{`
        .grimoire-container {
          perspective: 1100px;
          width: 100%;
          height: 380px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .grimoire-book {
          width: 220px;
          height: 300px;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateY(-22deg) rotateX(14deg) rotateZ(-3deg);
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
          border-radius: 6px;
        }

        .grimoire-container:hover .grimoire-book {
          transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1.05);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7);
        }

        /* ── BOOK COVERS ── */
        .book-cover {
          position: absolute;
          inset: 0;
          border-radius: 6px 12px 12px 6px;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        }

        .book-cover.back {
          background: #171717;
          border: 2px solid var(--mint);
          transform: translateZ(-11px);
        }

        .book-cover.front {
          background: #1a1a1a;
          border: 2.5px solid var(--mint);
          transform-origin: left center;
          transform: translateZ(0px);
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 28px 18px;
          overflow: hidden;
        }

        .grimoire-container:hover .book-cover.front {
          transform: rotateY(-140deg);
        }

        .book-spine {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 14px;
          background: #111111;
          border-right: 1.5px solid var(--mint);
          transform: rotateY(-90deg) translateX(-7px);
          transform-origin: left center;
        }

        /* ── PARCHMENT PAGES ── */
        .book-pages {
          position: absolute;
          background: #f4eccf;
          border: 1px solid #d3b472;
          border-radius: 4px;
          box-shadow: inset 0 0 12px rgba(139, 90, 43, 0.15);
        }

        .book-pages.layer-1 {
          inset: 3px;
          transform: translateZ(-8px);
        }

        .book-pages.layer-2 {
          inset: 4px;
          transform: translateZ(-5px);
        }

        .book-pages.layer-3 {
          inset: 5px;
          transform: translateZ(-2px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 22px 18px;
          overflow: hidden;
        }

        .inner-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(211, 166, 37, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Pages content typography */
        .page-header {
          font-family: var(--font-display);
          font-size: 10px;
          color: #855325;
          letter-spacing: 2px;
          font-weight: 600;
          border-bottom: 0.5px solid rgba(133, 83, 37, 0.2);
          padding-bottom: 6px;
          width: 100%;
        }

        .page-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          margin: 14px 0;
        }

        .page-code {
          font-family: var(--font-mono);
          font-size: 9px;
          color: #92400e;
          line-height: 1.4;
          white-space: nowrap;
        }

        .page-footer {
          font-family: var(--font-mono);
          font-size: 8px;
          color: rgba(146, 64, 14, 0.6);
          letter-spacing: 0.5px;
          text-align: center;
        }

        /* ── FRONT COVER EMBELLISHMENTS ── */
        .book-title-header {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          color: var(--mint);
          letter-spacing: 2.5px;
          text-align: center;
        }

        .book-title-footer {
          font-family: var(--font-mono);
          font-size: 8.5px;
          color: var(--cream);
          letter-spacing: 1.5px;
          text-align: center;
          opacity: 0.85;
        }

        .runic-crest-wrapper {
          width: 96px;
          height: 96px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .crest-svg {
          width: 100%;
          height: 100%;
          animation: rotateCrest 25s infinite linear;
        }

        @keyframes rotateCrest {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Corner filigree accents */
        .corner {
          position: absolute;
          width: 14px;
          height: 14px;
          border: 1px solid var(--mint);
          pointer-events: none;
        }
        .corner.top-left { top: 6px; left: 6px; border-right: none; border-bottom: none; }
        .corner.top-right { top: 6px; right: 6px; border-left: none; border-bottom: none; }
        .corner.bottom-left { bottom: 6px; left: 6px; border-right: none; border-top: none; }
        .corner.bottom-right { bottom: 6px; right: 6px; border-left: none; border-top: none; }

        /* ── MAGIC RISING PARTICLES ── */
        .floating-spell-rune {
          position: absolute;
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--mint);
          opacity: 0;
          pointer-events: none;
          text-shadow: 0 0 8px rgba(211, 166, 37, 0.7);
          transform: translateZ(10px);
          bottom: 20px;
        }

        .floating-spell-spark {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 235, 180, 1);
          opacity: 0;
          pointer-events: none;
          box-shadow: 0 0 6px rgba(211, 166, 37, 0.9);
          transform: translateZ(10px);
          bottom: 20px;
        }

        .grimoire-container:hover .floating-spell-rune {
          animation: floatUp 2.8s infinite linear;
        }

        .grimoire-container:hover .floating-spell-spark {
          animation: floatUp 2.4s infinite linear;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(10px) translateZ(10px) scale(0.7);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          75% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-140px) translateZ(20px) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
