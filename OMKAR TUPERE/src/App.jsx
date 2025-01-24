import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import FloatingBar from "./components/FloatingBar";
// import { ThemeProvider, useTheme } from "./components/ThemeProvider";

// const ThemeToggleButton = () => {
//   const { toggleTheme } = useTheme();
//   return (
//     <button
//       onClick={toggleTheme}
//       className="px-4 py-2 rounded bg-gray-800 text-white"
//     >
//       Toggle Theme
//     </button>
//   );
// };

const App = () => {
  return (
    // <ThemeProvider>
    <div className="overflow-x-hidden antialiased">
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
        <FloatingBar />
        {/* <ThemeToggleButton /> */}
      </div>
    </div>
    // </ThemeProvider>
  );
};

export default App;
