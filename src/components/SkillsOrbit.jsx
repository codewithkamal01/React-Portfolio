import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

export default function SkillsOrbit() {
  const skills = [
    {
      icon: <FaReact className="text-sky-400" />,
      name: "React",
      desc: "Component based UI with hooks.",
    },
    {
      icon: <SiJavascript className="text-yellow-400" />,
      name: "JavaScript",
      desc: "Core language for modern web.",
    },
    {
      icon: <FaNodeJs className="text-green-500" />,
      name: "Node.js",
      desc: "Backend runtime for APIs.",
    },
    {
      icon: <SiExpress className="text-gray-600" />,
      name: "Express",
      desc: "Fast backend framework.",
    },
    {
      icon: <SiMongodb className="text-green-600" />,
      name: "MongoDB",
      desc: "NoSQL database.",
    },
    {
      icon: <FaHtml5 className="text-orange-500" />,
      name: "HTML",
      desc: "Semantic webpage structure.",
    },
    {
      icon: <FaCss3Alt className="text-blue-500" />,
      name: "CSS",
      desc: "Layouts, animations and styling.",
    },
    {
      icon: <SiTailwindcss className="text-cyan-400" />,
      name: "Tailwind",
      desc: "Utility-first CSS framework.",
    },
    {
      icon: <FaGitAlt className="text-red-500" />,
      name: "Git",
      desc: "Version control system.",
    },
  ];

  return (
    <section className="py-10 flex justify-center items-center">
      {/* Responsive container */}
      <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] flex items-center justify-center">
        {/* Center */}
        <div className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-black text-white rounded-full flex items-center justify-center font-semibold shadow-lg">
          SKILLS
        </div>

        {/* Orbit */}
        <div className="animate-spin-slow absolute w-full h-full rounded-full border border-gray-300">
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 360;

            // radius based on container size
            const radiusMobile = 120;
            const radiusTablet = 170;
            const radiusDesktop = 200;

            const radius =
              typeof window !== "undefined" && window.innerWidth < 640
                ? radiusMobile
                : typeof window !== "undefined" && window.innerWidth < 768
                  ? radiusTablet
                  : radiusDesktop;

            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={index}
                className="group absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
              >
                {/* Icon */}
                <div className="text-2xl sm:text-3xl md:text-4xl bg-white shadow-lg p-3 sm:p-4 rounded-full hover:scale-125 transition">
                  {skill.icon}
                </div>

                {/* Tooltip */}
                <div className="absolute left-12 sm:left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  <div className="relative bg-white shadow-xl rounded-lg px-3 py-2 text-xs sm:text-sm w-36 sm:w-40">
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-6 border-b-6 border-r-6 border-transparent border-r-white"></div>

                    <p className="font-semibold">{skill.name}</p>
                    <p className="text-gray-500 text-xs">{skill.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
