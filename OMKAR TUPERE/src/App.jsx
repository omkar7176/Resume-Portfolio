import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import FloatingBar from "./components/FloatingBar";


const App = () => {
  return (
    <div className="overflow-x-hidden antialiased">
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
        <FloatingBar />
      </div>
    </div>
  );
};

export default App;
