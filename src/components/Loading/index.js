import React, { useState, useEffect } from "react";
import "./index.css";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 300); 
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-text">{progress}%</div>

      <div className="loading-bar">
        <div
          className="loading-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
