import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const iconWrapper =
  "p-3 rounded-full bg-[#1A1A1A] hover:bg-[#EB6200] transition transform hover:scale-110";

function Footer() {
  return (
    <footer className="bg-[#0F0F0F] px-6 md:px-20 py-14 mt-16 text-white">
      
      {/* Top Section */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold">
          Connect with me on social media
        </h2>
        <p className="text-[#AAAAAA] text-sm md:text-base mt-3 leading-relaxed">
          Open to freelance work, collaborations, or just a friendly chat.
        </p>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex justify-center gap-6 text-lg">
        <a href="https://linkedin.com/in/kamalmanna" target="_blank" rel="noreferrer" className={iconWrapper}>
          <BsLinkedin />
        </a>

        <a href="https://twitter.com/kamalmanna" target="_blank" rel="noreferrer" className={iconWrapper}>
          <FaXTwitter />
        </a>

        <a href="https://github.com/codewithkamal01" target="_blank" rel="noreferrer" className={iconWrapper}>
          <BsGithub />
        </a>

        <a href="https://instagram.com/kamal_s_photography" target="_blank" rel="noreferrer" className={iconWrapper}>
          <BsInstagram />
        </a>
      </div>

      {/* Divider */}
      <div className="mt-10 h-[1px] w-full bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent"></div>

      {/* Bottom Section */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-[#AAAAAA]">
        
        <p>© 2026 Kamal Manna. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;