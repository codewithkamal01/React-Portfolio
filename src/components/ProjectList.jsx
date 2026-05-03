import ProjectCard from "./ProjectCard";
import project1 from "../assets/pro6.png";
import project2 from "../assets/pro2.jpg";
import project3 from "../assets/pro3.jpg";
import project5 from "../assets/pro5.jpg";
import project4 from "../assets/pro4.jpg";
import { useState } from "react";

function ProjectList() {
  const [visibleCount, setVisibleCount] = useState(2);

  const projects = [
    {
      image: project3,
      title: "Business Portfolio",
      description: "A fully responsive business platform.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      livelink: "https://react-design-4.vercel.app/",
      sourcelink: "https://github.com/codewithkamal01/react-design-4",
      badge: "New",
    },
    {
      image: project1,
      title: "Notes Management App",
      description:
        "A collaborative notes management app with real-time updates.",
      tech: ["React", "Tailwind", "Crud Operations"],
      livelink: "https://noteshub-indol.vercel.app/",
      sourcelink: "https://github.com/codewithkamal01/notes-app",
    },
    {
      image: project4,
      title: "Personal Portfolio",
      description:
        "A sleek personal portfolio showcasing projects and skills with a modern design.",
      tech: ["React", "Tailwind", "Motion", "EmailJS"],
      livelink: "https://kamal-s-portfolio-alpha.vercel.app/",
      sourcelink: "https://github.com/codewithkamal01/React-Portfolio",
      badge: "Featured",
    },
    {
      image: project2,
      title: "Weather Dashboard",
      description: "An interactive weather dashboard - real-time weather.",
      tech: ["JavaScript", "API Integration", "React"],
      livelink: "https://weather-app-react-iota.vercel.app/",
      sourcelink: "https://github.com/codewithkamal01/Weather-App---React",
    },
    {
      image: project5,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform.",
      tech: ["React", "Node.js", "MongoDB"],
      isFeatured: true,
      badge: "In Progress",
    },
  ];

  const visibleProjects = projects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(projects.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className={
              project.isFeatured ? "md:col-span-2 flex justify-center" : ""
            }
          >
            <ProjectCard projects={project} singleButton={project.isFeatured} />
          </div>
        ))}
      </div>

      {visibleCount < projects.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 rounded-lg bg-black text-white hover:bg-[#EB6200] transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

export default ProjectList;
