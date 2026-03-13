import heroImage from "../assets/hero.png";
import Ellipse from "../assets/Ellipse.png";
import Vector from "../assets/Vector.png";
import Shadow from "../assets/Shadow.png";
import Resume from "../assets/Resume.pdf";
function Home() {
  return (
    <div className="relative text-center mt-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-6xl font-bold mt-6 md:leading-14">
          Great products are built
          <br /> where clean code meets
          <br />
          <span className="text-[#AAAAAA]">thoughtful</span>{" "}
          <span className="text-[#EB6200]">design.</span>
        </h1>
        <div className="relative flex justify-center h-80 md:h-96">
          <img
            className="absolute -top-20 w-96 -z-10"
            src={Ellipse}
            alt=""
          />
          <img
            className="w-72 h-80 md:w-96 md:h-96 absolute z-10 -top-11 md:-top-14 left-1/2 -translate-x-1/2"
            src={heroImage}
            alt=""
          />
          <img className="absolute left-25 top-14 md:left-52 md:top-12 w-7 md:w-9" src={Vector} alt="" />
          <img className="absolute right-26 top-25 w-4 md:right-52 md:top-20 md:w-6 " src={Vector} alt="" />
          <img className="absolute top-44 md:top-32 z-10" src={Shadow} alt="" />
        </div>
        <div className="relative z-20 justify-center items-center flex flex-col">
          <p className="absolute -top-22 md:-top-22 text-xs md:text-sm text-gray-500 w-90 md:w-4xl">
            Hi, I’m Kamal, a second-year BCA student passionate about coding and
            web development. I have experience with Python, C,
            <br /> and frontend technologies, and I’m currently learning the
            MERN stack. I enjoy building projects, solving real-world problems
            <br /> through code, and continuously improving my skills to become
            a full-stack developer.
          </p>
          <a href={Resume} download>
            <button className="relative top-5 md:top-0 cursor-pointer overflow-hidden mt-7 px:3  py-2 md:px-5 md:py-3 w-44 md:w-52 rounded-xl bg-[#0F0F0F] text-white group mb-0 md:mb-8">
              <span className="relative z-10 md:text-xl" >Download Resume</span>
              <span className="absolute inset-0 bg-[#EB6200] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
          </a>
        </div>
      </div>
    </div>  
  );
}

export default Home;
