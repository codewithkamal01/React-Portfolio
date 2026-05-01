import React from "react";
import Stars from "../components/Stars";
import { BadgeCheck } from "lucide-react";

const TestimonialCard = React.memo(function TestimonialCard({ data }) {
  const { name, company, text, rating, avatar, verified } = data;

  return (
    <div className="testimonial-card">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={avatar}
          alt={name}
          loading="lazy"
          className="w-10 h-10 rounded-full object-cover"
        />

        <div>
          <div className="flex items-center gap-1">
            <h4 className="text-sm font-semibold text-white">{name}</h4>
            {verified && (
              <BadgeCheck
                className="w-4 h-4 text-blue-500 drop-shadow-[0_0_4px_rgba(59,130,246,0.6)]"
                title="Verified client"
              />
            )}
          </div>
          <p className="text-xs text-gray-400">{company}</p>
        </div>
      </div>
      <Stars count={rating} />
      <p className="text-sm text-gray-300 mt-3 leading-relaxed">"{text}"</p>
    </div>
  );
});

export default TestimonialCard;
