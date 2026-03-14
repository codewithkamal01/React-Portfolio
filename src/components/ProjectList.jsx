import ProjectCard from "./ProjectCard";
import project2 from "../assets/project2.png";
import project1 from "../assets/pro1.png";
import project3 from "../assets/project3.png";

function ProjectList() {
  const projects = [
    {
      image: project2,
      title: "Weather Dashboard",
      description:
        "An interactive weather dashboard that provides real-time weather data, forecasts, and visualizations using React.js.",
      tech: ["JavaScript", "API Integration", "React.js"],
      livelink: "https://weather-app-react-iota.vercel.app/",
      sourcelink: "https://github.com/codewithkamal01/Weather-App---React",
    },
    {
      image: project1,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React.js", "Firebase", "Socket.io"],
      livelink: "https://noteshub-indol.vercel.app/",
      sourcelink: "https://github.com/codewithkamal01/notes-app",
    },
    {
      image: project3,
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
