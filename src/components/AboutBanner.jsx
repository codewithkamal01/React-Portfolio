import RollingNumber from "./RollingNumber";
import { Briefcase, Clock, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

function AboutBanner() {
  const stats = [
    {
      value: 27,
      suffix: "+",
      title: "Projects",
      subtitle: "Completed",
      icon: <Briefcase size={26} />,
      style: "dark",
    },
    {
      value: 1.5,
      suffix: "",
      title: "Years",
      subtitle: "Experience",
      icon: <Clock size={26} />,
      style: "light",
    },
    {
      value: 15,
      suffix: "+",
      title: "Courses",
      subtitle: "Completed",
      icon: <BookOpen size={26} />,
      style: "accent",
    },
  ];

  return (
    <div className="mt-24 px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => {
          const isDark = stat.style === "dark";
          const isLight = stat.style === "light";
          const isAccent = stat.style === "accent";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              style={{ animationDelay: `${i * 0.4}s` }}
              className={`relative overflow-hidden p-8 rounded-3xl flex justify-between items-center
              shadow-lg animate-floatCard transition-all duration-500 hover:-translate-y-2
              
              ${isDark && "bg-[#111111] border border-[#EB6200]/20 text-white"}
              ${
                isLight &&
                "bg-[#F4F4F4] border border-gray-300 text-black md:scale-105"
              }
              ${isAccent && "bg-[#EB6200] text-black"}`}
            >
              {/* LEFT */}
              <div className="flex flex-col gap-4 z-10">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl
                  ${isDark && "bg-[#EB6200]/15 text-[#EB6200]"}
                  ${isLight && "bg-black/10 text-black"}
                  ${isAccent && "bg-white/20 text-white"}`}
                >
                  {stat.icon}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold flex items-end gap-1">
                  <RollingNumber value={stat.value} />
                  <span className="text-[#EB6200]">{stat.suffix}</span>
                </h1>

                <div>
                  <h2 className="text-lg md:text-xl font-semibold">
                    {stat.title}
                  </h2>
                  <p
                    className={`text-sm ${
                      isLight ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {stat.subtitle}
                  </p>
                </div>
              </div>

              {/* RIGHT BACKGROUND NUMBER */}
              <div
                className={`text-[80px] md:text-[100px] font-bold opacity-10 select-none
                ${isLight ? "text-black" : "text-white"}`}
              >
                {stat.value}
              </div>

              {/* glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#EB6200]/20 blur-2xl rounded-full"></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutBanner;
