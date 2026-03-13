import { useEffect, useState } from "react";

function RollingNumber({ value, duration = 3000 }) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= value) {
        setNumber(value);
        clearInterval(counter);
      } else {
        setNumber(start);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value, duration]);

  return <span>{number.toFixed(value % 1 !== 0 ? 1 : 0)}</span>;
}

export default RollingNumber;
