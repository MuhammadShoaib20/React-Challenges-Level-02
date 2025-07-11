import React, { useState, useEffect } from "react";

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Real-Time-Clock</h1>
      <p style={({ marginBottom: "5px" }, { fontSize: "20px" })}>
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
};
export default RealTimeClock;
