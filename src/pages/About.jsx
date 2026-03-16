import AboutBanner from "../components/AboutBanner";
import SkillsOrbit from "../components/SkillsOrbit";

function About() {
  return (
    <div className="mt-16">
      <AboutBanner />
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <h1 className="mt-12 mb-10 md:p-16 text-3xl sm:text-3xl md:text-5xl font-semibold text-center leading-snug">
          Skills that <span className="text-[#EB6200]">power </span>my{" "}
          <span className="text-[#D5D5D5]">development</span>{" "}
        </h1>
      </div>
      <SkillsOrbit/>
    </div>
  );
}

export default About;
