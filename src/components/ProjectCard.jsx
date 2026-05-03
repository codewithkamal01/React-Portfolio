import React, { memo, useMemo } from "react";

const ProjectCard = memo(({ projects, singleButton }) => {
  // Memoized class calculations (avoid recalculating every render)
  const containerClass = useMemo(
    () =>
      `group relative hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 
     border border-gray-200 bg-white/70 backdrop-blur-md 
     rounded-2xl p-5 md:p-8 ${
       singleButton
         ? "flex flex-col md:flex-row gap-8 items-center"
         : "h-full flex flex-col justify-between"
     }`,
    [singleButton],
  );

  const imageWrapperClass = useMemo(
    () =>
      `bg-gradient-to-br from-gray-100 to-gray-200 
     rounded-xl p-4 flex justify-center items-center overflow-hidden
     h-48 md:h-56 ${singleButton ? "md:w-1/2" : ""}`,
    [singleButton],
  );

  const contentWrapperClass = useMemo(
    () => (singleButton ? "md:w-1/2" : "flex flex-col flex-1"),
    [singleButton],
  );

  const buttonClass = useMemo(
    () =>
      `w-full py-2 rounded-lg text-white 
     transition-all duration-200 shadow-sm 
     hover:scale-[1.02] active:scale-[0.98] ${
       singleButton
         ? "bg-black hover:bg-[#EB6200]"
         : "bg-[#EB6200] hover:bg-[#c75c0a]"
     }`,
    [singleButton],
  );

  const badgeStyles = {
    featured: "bg-[#EB6200] text-white",
    new: "bg-green-500 text-white",
    "in-progress": "bg-yellow-400 text-black",
  };

  return (
    <div className={containerClass}>
      {projects.badge && (
        <span
          className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-medium shadow-sm
                backdrop-blur-md border border-white/40
                transition-transform duration-300 group-hover:scale-105
                ${badgeStyles[projects.badge.toLowerCase()] || "bg-black text-white"}`}
        >
          {projects.badge}
        </span>
      )}
      {/* Image */}
      <div className={imageWrapperClass}>
        <img
          src={projects.image}
          alt={projects.title}
          loading="lazy"
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className={contentWrapperClass}>
        <div>
          <h1 className="text-xl md:text-2xl font-bold mt-4 tracking-tight">
            {projects.title}
          </h1>

          <p className="pt-3 text-gray-500 text-sm md:text-base leading-relaxed">
            {projects.description}
          </p>

          <div className="flex gap-3 pt-4 flex-wrap">
            {projects.tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-xs md:text-sm rounded-full 
             bg-black/5 text-gray-700 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {!singleButton && (
            <a
              href={projects.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button
                className="w-full bg-black text-white py-2 rounded-lg 
                   hover:bg-[#EB6200] hover:scale-[1.02] 
                   active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                Live Demo
              </button>
            </a>
          )}

          <a
            href={projects.sourcelink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <button className={buttonClass}>
              {singleButton ? "Coming Soon" : "Source Code"}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
});

export default ProjectCard;
