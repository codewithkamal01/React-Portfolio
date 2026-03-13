import ProjectList from "../components/ProjectList";

function Projects() {
  return (
    <div className="mt-20 px-6 md:px-28">
      <div className="mb-10">
        <div className="w-28 border px-3 py-1 border-[#AAAAAA] font-medium rounded-full text-sm md:text-lg text-[#EB6200]">
          My Works
        </div>

        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
          A <span className="text-[#AAAAAA]">glimpse</span> of what <br />
          i've{" "}
          <span className="text-[#EB6200] inline-flex items-baseline gap-4 md:gap-10 w-full md:w-7xl">
            built.
            <span className="h-[1px] flex-1 bg-[#AAAAAA]"></span>
          </span>
        </h1>
      </div>

      <ProjectList />
    </div>
  );
}

export default Projects;
