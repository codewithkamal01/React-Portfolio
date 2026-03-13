import { useEffect, useState } from "react";

function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 300);
          return 100;
        }
        return old + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#F5F5F5] gap-6 transition-opacity duration-700">

      <h1 className="text-4xl font-bold tracking-wide">
        Load<span className="text-[#EB6200]">ing...</span>
      </h1>

      <div className="w-64 h-[3px] bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#EB6200] transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-500">{progress}%</p>

    </div>
  );
}

export default Loader;