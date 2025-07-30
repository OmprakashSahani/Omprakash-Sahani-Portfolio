// app/page.js
import Hero from '@/components/Hero';
import About from '@/components/About';
import Technologies from '@/components/Technologies'; // Import your new Technologies component
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="technologies"> {/* Added new id for navigation */}
        <Technologies /> {/* Add your Technologies component here */}
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="research">
        <Research />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
