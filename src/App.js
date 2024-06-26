import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navabar from "./components/Navabar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Navabar />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
