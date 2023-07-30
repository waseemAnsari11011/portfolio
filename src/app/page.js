import Header from "../app/components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import IntroSection from "./components/IntroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

function MyApp() {
  return (
    <>
      <Header />
      <IntroSection />
      <About />
      <Projects />
      <Skills />
      <Work />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}

export default MyApp;
