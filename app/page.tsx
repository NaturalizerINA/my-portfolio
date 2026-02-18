import LoadingProgress from "./components/LoadingProgress";
import BinaryRain from "./components/BinaryRain";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <LoadingProgress />
      <BinaryRain />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Education />
        <ContactMe />
        <Footer />
      </div>
    </main>
  );
}
