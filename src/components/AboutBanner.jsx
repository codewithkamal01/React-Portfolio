import RollingNumber from "./RollingNumber";

function AboutBanner() {
  const stats = [
    {
      value: 12,
      suffix: "+",
      title: "Projects",
      subtitle: "completed",
      bg: "bg-black",
      numberColor: "text-[#EB6200]",
      titleColor: "text-white",
      subColor: "text-[#EB6200]",
    },
    {
      value: 1.5,
      suffix: "",
      title: "Years",
      subtitle: "of experience",
      bg: "bg-[#D2D2D2]",
      numberColor: "text-black",
      titleColor: "text-[#EB6200]",
      subColor: "text-black",
    },
    {
      value: 6,
      suffix: "+",
      title: "Courses",
      subtitle: "completed",
      bg: "bg-[#EB6200]",
      numberColor: "text-white",
      titleColor: "text-black",
      subColor: "text-white",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-16 overflow-hidden">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`flex gap-4 justify-center items-center p-8 ${stat.bg}`}
        >
          <h1 className={`text-5xl md:text-7xl font-bold ${stat.numberColor}`}>
            <RollingNumber value={stat.value} />
            {stat.suffix}
          </h1>

          <div>
            <h2 className={`text-2xl md:text-4xl font-bold ${stat.titleColor}`}>
              {stat.title}
            </h2>
            <span className={stat.subColor}>{stat.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutBanner;