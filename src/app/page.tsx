import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050508] text-gray-300 flex flex-col items-center">
      <div className="w-full max-w-5xl px-6">
        <Navbar />
        <Hero />
        <div className="space-y-16 py-12">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}
