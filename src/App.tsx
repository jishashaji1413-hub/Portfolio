import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      

    </div>
  );
}

export default App;