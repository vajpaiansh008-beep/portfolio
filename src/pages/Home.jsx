import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import DSA from "../components/DSA";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <DSA />
      <Experience />
      <Education />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
};

export default Home;
