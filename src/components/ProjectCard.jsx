function ProjectCard({ projects, singleButton, livelink, sourcelink }) {
  return (
    <div
      className={`hover:-translate-y-1 hover:shadow-lg transition mt-6 border border-[#AAAAAA] rounded-md w-full px-6 md:px-10 py-6 ${singleButton ? "flex flex-col md:flex-row gap-6" : ""}`}
    >
      <div
        className={`bg-[#E5E5E5] rounded-md px-8 md:px-14 pt-5 ${
          singleButton ? "md:w-1/2" : ""
        }`}
      >
        <img src={projects.image} alt={projects.title} />
      </div>
      <div className="pt-6">
        <h1 className="text-xl md:text-2xl font-semibold ">{projects.title}</h1>
        <p className="pt-3 text-[#5B5A5A] text-sm md:text-base">
          {projects.description}
        </p>
        <div className="flex gap-4 pt-5 flex-wrap">
          {projects.tech.map((item, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs md:text-sm border rounded-full border-black"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between mt-8 gap-5">
          {!singleButton && (
            <a
              href={projects.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full relative cursor-pointer overflow-hidden px-4 py-2 md:px-5 md:py-3 rounded-lg bg-[#0F0F0F] text-white group">
                <span className="relative z-10">Live Demo</span>

                <span className="absolute inset-0 bg-[#EB6200] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </a>
          )}

          <a
            href={projects.sourcelink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <button
              className={`w-full cursor-pointer px-4 py-2 md:px-5 md:py-3 rounded-lg text-white transition ${
                singleButton
                  ? "bg-black hover:bg-[#EB6200]"
                  : "bg-[#EB6200] hover:bg-[#c75c0a]"
              }`}
            >
              {singleButton ? "Coming Soon" : "Source Code"}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
