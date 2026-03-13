import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

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
    <div className="bg-[#F5F5F5] pt-5 sticky top-0 z-50">

      {/* Desktop Navbar */}
      <div className="hidden md:flex w-fit px-4 py-2 gap-8 mx-auto justify-center items-center border border-[#AAAAAA] rounded-full">

        <a href="#home" className={linkStyle("home")}>
          Home
        </a>

        <a href="#about" className={linkStyle("about")}>
          About
        </a>

        <a href="#projects" className={linkStyle("projects")}>
          Projects
        </a>

        <a href="#contact" className={linkStyle("contact")}>
          Contact
        </a>

      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center px-6">

        <h1 className="font-bold text-lg">Kamal</h1>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#F5F5F5]">

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

        </div>
      )}
    </div>
  );
}

export default Navbar;