import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Loader from "./components/Loader";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";

function App() {
  const [Loading, setLoading] = useState(true);
  return (
    <>
      {Loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-[#F5F5F5]">
          <Navbar />
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
             <section id="contact">
            <Contact />
          </section>
          <section id="footer">
            <Footer />
          </section>  
        </div>
      )}
    </>
  );
}

export default App;
