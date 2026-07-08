// ─────────────────────────────────────────────────────────────
//  src/App.jsx
//
//  ✏️  ADD or REMOVE sections here by importing and placing them.
//      Order = order on the page.
// ─────────────────────────────────────────────────────────────

import Navbar         from "./sections/Navbar.jsx";
import Hero           from "./sections/Hero.jsx";
import About          from "./sections/About.jsx";
import Education      from "./sections/Education.jsx";
import Experience     from "./sections/Experience.jsx";
import Projects       from "./sections/Projects.jsx";
import Skills         from "./sections/Skills.jsx";
import Certifications from "./sections/Certifications.jsx";
import Contact        from "./sections/Contact.jsx";
import Footer         from "./sections/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
