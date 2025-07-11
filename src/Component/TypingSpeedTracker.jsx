import React, { useState, useRef } from "react";

const TypingSpeedTracker = () => {
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [result, setResult] = useState("");
  const timerStarted = useRef(false);

  const handleChange = (e) => {
    setText(e.target.value);

    // Start timer on first key press only
    if (!timerStarted.current) {
      setStartTime(Date.now());
      timerStarted.current = true;
    }
  };

  const handleStop = () => {
    if (!startTime) return;
    const end = Date.now();
    setEndTime(end);

    const timeTaken = ((end - startTime) / 1000).toFixed(2); // seconds
    const charCount = text.length;

    setResult(`You typed ${charCount} characters in ${timeTaken} seconds.`);
    timerStarted.current = false;
    setStartTime(null);
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>⌨️ Typing Speed Tracker</h1>

      <textarea
        placeholder="Start typing here..."
        rows="6"
        cols="50"
        value={text}
        onChange={handleChange}
        style={{ padding: "10px", fontSize: "16px" }}
      />

      <br />
      <button onClick={handleStop} style={{ marginTop: "10px" }}>
        Stop Timer
      </button>

      {result && (
        <p style={{ marginTop: "20px", fontWeight: "bold", color: "green" }}>
          {result}
        </p>
      )}
    </div>
  );
};

export default TypingSpeedTracker;
