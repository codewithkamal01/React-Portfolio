import { useEffect } from "react";

function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#F5F5F5] gap-6">
      <div className="flex items-end gap-1 h-6">
        <span className="w-2 h-2 bg-[#EB6200] rounded-full animate-[bounce_1s_infinite]"></span>
        <span className="w-2 h-3 bg-[#EB6200] rounded-full animate-[bounce_1s_infinite_0.1s]"></span>
        <span className="w-2 h-4 bg-[#EB6200] rounded-full animate-[bounce_1s_infinite_0.2s]"></span>
        <span className="w-2 h-3 bg-[#EB6200] rounded-full animate-[bounce_1s_infinite_0.3s]"></span>
        <span className="w-2 h-2 bg-[#EB6200] rounded-full animate-[bounce_1s_infinite_0.4s]"></span>
      </div>
    </div>
  );
}
export default Loader;
