import React, { memo, useMemo } from "react";

const ProjectCard = memo(({ projects, singleButton }) => {
  // Memoized class calculations (avoid recalculating every render)
  const containerClass = useMemo(
    () =>
      `hover:-translate-y-1 hover:shadow-lg transition border border-[#AAAAAA] rounded-xl p-5 md:p-8 ${
        singleButton
          ? "flex flex-col md:flex-row gap-8 items-center"
          : "h-full flex flex-col justify-between"
      }`,
    [singleButton],
  );

  const imageWrapperClass = useMemo(
    () =>
      `bg-[#E5E5E5] rounded-lg p-4 flex justify-center items-center ${
        singleButton ? "md:w-1/2" : ""
      }`,
    [singleButton],
  );

  const contentWrapperClass = useMemo(
    () => (singleButton ? "md:w-1/2" : "flex flex-col flex-1"),
    [singleButton],
  );

  const buttonClass = useMemo(
    () =>
      `w-full py-2 rounded-lg text-white ${
        singleButton
          ? "bg-black hover:bg-[#EB6200]"
          : "bg-[#EB6200] hover:bg-[#c75c0a]"
      }`,
    [singleButton],
  );

  return (
    <div className={containerClass}>
      {/* Image */}
      <div className={imageWrapperClass}>
        <img
          src={projects.image}
          alt={projects.title}
          loading="lazy" // performance boost
          className="w-full max-w-xs object-contain"
        />
      </div>

      {/* Content */}
      <div className={contentWrapperClass}>
        <div>
          <h1 className="text-lg md:text-2xl font-semibold mt-4">
            {projects.title}
          </h1>

          <p className="pt-3 text-[#5B5A5A] text-sm md:text-base leading-relaxed">
            {projects.description}
          </p>

          <div className="flex gap-3 pt-4 flex-wrap">
            {projects.tech.map((item) => (
              <span
                key={item} // better than index if unique
                className="px-3 py-1 text-xs md:text-sm border rounded-full border-black"
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
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-[#EB6200] transition">
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
