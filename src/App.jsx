import { useState, useEffect } from "react";
import "./index.css";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { Education, Research, Experience, Contact } from "./sections/OtherSections";
import NebulaBackground from "./components/NebulaBackground";

function Nav() {
  const links = ["About", "Education", "Skills", "Projects", "Research", "PORs", "Contact"];
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const link of links) {
        const id = link.toLowerCase();
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <div className="nav-container">
      <nav>
        <ul className="nav-links">
          {links.map(l => {
            const id = l.toLowerCase();
            return (
              <li key={l}>
                <a 
                  href={`#${id}`} 
                  className={activeSection === id ? "active" : ""}
                >
                  {l}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <NebulaBackground />

      <div style={{
        opacity: loaded ? 1 : 0,
        transition: "opacity 1s ease",
        pointerEvents: loaded ? "all" : "none",
        position: "relative",
        zIndex: 2,
      }}>
        <Nav />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
