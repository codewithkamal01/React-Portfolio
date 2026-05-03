import React, { useMemo } from "react";
import TestimonialCard from "../components/TestimonialCard";
import Raju from "../assets/testimonials/Raju.jpg";
import Tridip from "../assets/testimonials/Tridip.jpg";
import Chandra from "../assets/testimonials/Chandra.jpg";
import Abhik from "../assets/testimonials/Abhik.jpg";
import Anurup from "../assets/testimonials/Anurup.jpg";

const testimonials = [
  {
    name: "Raju Kapmti",
    company: "TechNova",
    text: "Great developer, very clean work!",
    rating: 5,
    avatar: Raju,
    verified: true,
  },
  {
    name: "Ankit Mondal",
    company: "CodeCraft",
    text: "Delivered before deadline, impressive.",
    rating: 3,
    avatar: "https://i.pravatar.cc/100?img=7",
    verified: true,
  },
  {
    name: "Sneha Das",
    company: "UI Studio",
    text: "UI/UX skills are really strong.",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=9",
  },
  {
    name: "Tridip Nayak",
    company: "PixelWorks",
    text: "Professional and easy to work with.",
    rating: 5,
    avatar: Tridip,
    verified: true,
  },
  {
    name: "Anurup Haldar",
    company: "WebWizards",
    text: "Highly recommend for web projects.",
    rating: 3,
    avatar: Anurup,
    verified: true,
  },
  {
    name: "Chandranath Mondal",
    company: "DevHub",
    text: "Highly recommend for web projects.",
    rating: 3,
    avatar: Chandra,
    verified: true,
  },
    {
    name: "Abhik Rajak",
    company: "OctaNet",
    text: "Highly recommend for web projects.",
    rating: 3,
    avatar: Abhik,
  },
];

function TestimonialMarquee() {
  const duplicatedTestimonials = useMemo(
    () => [...testimonials, ...testimonials],
    [],
  );

  return (
    <div className="mt-24 pb-5 overflow-hidden relative px-4 md:px-10 mask-fade">
      {/* header */}
      <div className="mb-12 text-center">
        <p className="text-[#EB6200] text-xs tracking-[0.2em] uppercase mb-3">
          Testimonials
        </p>

        <h1 className="text-3xl md:text-5xl font-bold text-black">
          What People Say
        </h1>

        <div className="w-12 h-0.5 bg-[#EB6200] mx-auto mt-4"></div>
      </div>

      {/* ROW 1 */}
      <div className="flex gap-6 marquee-left">
        {duplicatedTestimonials.map((t, i) => (
          <TestimonialCard key={t.name + i} data={t} />
        ))}
      </div>

      {/* ROW 2 */}
      <div className="flex gap-6 mt-6 marquee-right">
        {duplicatedTestimonials.map((t, i) => (
          <TestimonialCard key={t.name + i} data={t} />
        ))}
      </div>
    </div>
  );
}

export default TestimonialMarquee;
