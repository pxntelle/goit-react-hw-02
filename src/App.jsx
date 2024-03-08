import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

export default function App() {
  const [clicks, setClicks] = useState(
    () =>
      JSON.parse(localStorage.getItem("click")) || {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  useEffect(() => {
    localStorage.setItem("click", JSON.stringify(clicks));
  }, [clicks]);
  const handleClick = (key) => {
    setClicks({
      ...clicks,
      [key]: clicks[key] + 1,
    });
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const positiveRate = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  const resetClick = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className="appContainer">
      <Description />
      <Options
        handleClick={handleClick}
        totalFeedback={totalFeedback}
        resetClick={resetClick}
      />
      <Feedback
        clicks={clicks}
        totalFeedback={totalFeedback}
        positiveRate={positiveRate}
      />
    </div>
  );
}
