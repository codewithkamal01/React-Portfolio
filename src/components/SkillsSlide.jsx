import html from "../assets/icon-html.png";
import css from "../assets/icon-css.png";
import js from "../assets/icon-js.png";
import react from "../assets/icon-react.png";
import node from "../assets/icon-node.png";
import express from "../assets/icon-ex.png";
import db from "../assets/icon-db.png";

function SkillsSlide() {
  const skills = [html, css, js, react, node, express, db];
  return (
    <div className="overflow-hidden py-3 md:py-6">
      <div className="flex items-center gap-10 md:gap-16 animate-slide whitespace-nowrap">
        {[...skills,...skills].map((icon, i) => {
          return <img key={i} className="w-12 sm:14 md:w-20 object-contain" src={icon} alt="" />;
        })}
      </div>
    </div>
  );
}

export default SkillsSlide;
