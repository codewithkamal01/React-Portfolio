import ProjectCard from "./ProjectCard";

function ProjectList() {
  const projects = [
    {
      image: "src/assets/project2.png",
      title: "Weather Dashboard",
      description:
        "An interactive weather dashboard that provides real-time weather data, forecasts, and visualizations using React.js.",
      tech: ["JavaScript", "API Integration", "React.js"],
    },
    {
      image: "src/assets/pro1.png",
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React.js", "Firebase", "Socket.io"],
    },
    {
      image: "src/assets/project3.png",
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "Mongodb"],
    },
  ];
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 px-6 md:px-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className={index === projects.length - 1 ? "md:col-span-2" : ""}
        >
          <ProjectCard
            projects={project}
            singleButton={index === projects.length - 1}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
