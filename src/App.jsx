import { useState } from "react";
import "./index.css";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { Education, Research, Experience, Contact } from "./sections/OtherSections";

function Nav() {
  const links = ["About","Education","Skills","Projects","Research","PORs","Contact"];
  return (
    <nav>
      
      <ul className="nav-links">
        {links.map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <div style={{
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.9s ease",
        pointerEvents: loaded ? "all" : "none",
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
