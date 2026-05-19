import ProjectCard from "./ProjectCard";
import project1 from "../assets/pro6.png";
import project2 from "../assets/pro2.jpg";
import project3 from "../assets/pro3.jpg";
import project4 from "../assets/pro4.jpg";
import project5 from "../assets/pro5.jpg";
import project7 from "../assets/pro7.png";
import project8 from "../assets/pro8.png";
import project9 from "../assets/pro9.png";

import { useState } from "react";

function ProjectList() {
  const [visibleCount, setVisibleCount] = useState(4);

  const projects = [
    {
      image: project7,
      title: "CampusNotes",
      description:
        "A modern student-focused notes sharing platform with PYQs, uploads, and an intuitive dashboard experience.",
      tech: ["MERN Stack", "Tailwind CSS"],
      livelink: "https://campus-notes-one.vercel.app/",
      sourcelink:
        "https://github.com/codewithkamal01/CampusNotes---A-Mern-Stack-Project",
      badge: "Latest",
    },
    {
      image: project3,
      title: "Social Media Web App",
      description:
        "A interactive social media web to upload post, creative community.",
      tech: ["React js", "Supabase Backend", "Tailwind"],
      livelink: "https://social-media-app-rust-omega.vercel.app/",
      sourcelink: "https://github.com/codewithkamal01/social-media-app",
    },

    {
      image: project8,
      title: "AutoCloud Guard",
      description:
        "An cloud guard system - detects vulnerabilities and secure cloud.",
      tech: ["React js", "Tailwinc Css"],
      livelink: "https://autocloud-guard.vercel.app/misconfigurations",
      sourcelink: "https://github.com/codewithkamal01/frontend",
    },

    {
      image: project4,
      title: "Personal Portfolio",
      description:
        "A sleek personal portfolio showcasing projects and skills with a modern design.",
      tech: ["React", "Tailwind", "Motion", "EmailJS"],
      livelink: "https://kamalmanna.vercel.app/",
      sourcelink: "https://github.com/codewithkamal01/React-Portfolio",
      badge: "Featured",
    },
    {
      image: project9,
      title: "Creyotech - A Digital Agency",
      description: "A renowned IT service company website developed by me.",
      tech: ["React js", "Tailwind css", "Framer Motion"],
      livelink: "",
      sourcelink: "",
      badge: "Under-Construction",
    },
    {
      image: project1,
      title: "Notes Management App",
      description:
        "A collaborative notes management app with real-time updates",
      tech: ["React", "Tailwind", "Crud Operations"],
      livelink: "https://noteshub-indol.vercel.app/",
      sourcelink: "https://github.com/codewithkamal01/notes-app",
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
    <section className="max-w-7xl mx-auto px-5 md:px-20 mt-16">
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
