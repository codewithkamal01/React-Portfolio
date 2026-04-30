import Resume from "../assets/Resume.pdf";
import Hero from "../assets/herosec.png";

function Home() {
  return (
    <div className="text-center pt-18 md:pt-24 px-4 overflow-hidden">
      <div className="max-w-xl sm:max-w-lg md:max-w-2xl  mx-auto">
        {/* Hero Image */}
        <img src={Hero} alt="Hero section" className="w-full md:w-full h-135 md:h-120" />
      </div>
      {/* Resume Button */}
      <a href={Resume} download>
        <button className="relative cursor-pointer overflow-hidden mt-3 md:mt-2 px-3 py-2 md:px-2 md:py-2 w-40 md:w-42 rounded-xl bg-[#0F0F0F] text-white group">
          <span className="relative z-10 text-sm md:text-sm">
            Download Resume
          </span>

          <span className="absolute inset-0 bg-[#EB6200] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
      </a>
    </div>
  );
}

export default Home;
