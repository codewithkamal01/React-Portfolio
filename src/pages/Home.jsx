import Resume from "../assets/Resume.pdf";
import Hero from "../assets/herosec.jpg";

function Home() {
  return (
    <div className="text-center pt-20 md:pt-24 px-4 overflow-hidden">
      <div className="w-90 md:w-full max-w-xl md:max-w-2xl mx-auto">
        {/* Hero Image */}
        <img
          src={Hero}
          loading="lazy"
          alt="Hero section"
          className="w-full md:w-full h-130 md:h-120"
        />
      </div>
      {/* Resume Button */}
      <button className="cursor-pointer mt-3 px-3 py-2 w-42 rounded-xl bg-[#0F0F0F] text-white animate-pulse">
        Download Resume
      </button>
    </div>
  );
}

export default Home;
