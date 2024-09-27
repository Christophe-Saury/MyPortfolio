import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import { Technologies } from "./components/Technologies";

function App() {
  return (
    <div
      className="overflow-x-hidden h-full text-neutral-300 antialiased 
    selection:text-cyan-900 selection:bg-cyan-300 "
    >
      <div className="absolute top-0 -z-10 h-full "></div>
      <div className="fixed top-0 -z-10 h-full "></div>
      <div className="absolute top-0 z-[-2] h-max w-screen bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_0%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
