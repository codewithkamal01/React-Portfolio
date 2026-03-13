import { MdOutlineEmail } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
function Contact() {
  return (
    <div className="bg-[#0F0F0F] px-6 md:px-20 py-10 mt-10 text-white">
      <h1 className="text-3xl md:text-4xl font-semibold pb-10">
        Let’s <span className="text-[#5B5A5A]">build</span> something{" "}
        <span className="text-[#EB6200]">great</span>!
      </h1>
      <div className="flex justify-center md:justify-start gap-3 group cursor-pointer">
        <MdOutlineEmail className="text-2xl text-[#AAAAAA] group-hover:text-[#EB6200]" />
        <a
          href="mailto:kamalmanna606@gmail.com"
          className="text-[#AAAAAA] group-hover:text-white transition"
        >
          kamalmanna606@gmail.com
        </a>
        <FaCircleArrowRight className="text-xl text-[#AAAAAA] group-hover:text-[#EB6200] transition" />
      </div>
      {/* Social Icons */}
      <div className="mt-4 mb-8 flex justify-center md:justify-start  gap-5 text-xl text-[#AAAAAA]">
        <a href="https://linkedin.com/in/kamalmanna" target="_blank">
          <BsLinkedin className="hover:text-[#EB6200] hover:scale-110 transition" />
        </a>

        <a href="https://twitter.com/kamalmanna" target="_blank">
          <FaXTwitter className="hover:text-[#EB6200] hover:scale-110 transition" />
        </a>

        <a href="https://github.com/codewithkamal01" target="_blank">
          <BsGithub className="hover:text-[#EB6200] hover:scale-110 transition" />
        </a>

        <a href="https://instagram.com/kamal_s_photography" target="_blank">
          <BsInstagram className="hover:text-[#EB6200] hover:scale-110 transition" />
        </a>
      </div>
      <div className="mt-8 mb-3 h-[1px] w-full bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent"></div>
      <div className="flex flex-col gap-6 md:flex-row justify-between md:py-5 text-xs md:text-sm text-[#AAAAAA]">
        <p className="text-center md:text-left">
          © 2026 Kamal Manna. All rights reserved.
        </p>
        <div className="flex gap-7 justify-center">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#about" className="hover:text-white">
            About me
          </a>
          <a href="#projects" className="hover:text-white">
            My works
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
