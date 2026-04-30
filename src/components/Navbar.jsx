import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "about", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 120;

          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section) => {
    setActive(section);
    setMenuOpen(false);
  };

  const linkStyle = (section) =>
    `px-4 py-2 rounded-full transition ${
      active === section
        ? "bg-[#EB6200] text-white"
        : "hover:bg-[#EB6200] hover:text-white"
    }`;

  return (
    <>
      {/* Desktop Navbar - Only Center Links Fixed */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2 gap-6 justify-center items-center border border-[#AAAAAA] rounded-full backdrop-blur-md bg-white/40 shadow-md"
      >
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => handleClick(section)}
            className="relative px-4 py-2 rounded-full transition"
          >
            {/* Animated background */}
            {active === section && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-0 bg-[#EB6200] rounded-full z-0"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}

            <span
              className={`relative z-10 ${
                active === section ? "text-white" : "hover:text-[#EB6200]"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </a>
        ))}
      </motion.div>

      {/* Mobile Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 flex md:hidden justify-between items-center px-6 py-4 bg-[#F5F5F5]/80 backdrop-blur-md">
        <h1 className="font-bold text-lg">Kamal</h1>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-[64px] left-0 w-full z-40 md:hidden flex flex-col items-center gap-6 py-6 bg-[#F5F5F5]"
        >
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => handleClick(section)}
              className={linkStyle(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
