import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import useTheme from "./hooks/useTheme.js";
import useActiveSection from "./hooks/useActiveSection.js";
import { NAV_LINKS } from "./data/siteData.js";

function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(NAV_LINKS.map((link) => link.id));

  return (
    <>
      <Navbar
        links={NAV_LINKS}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
