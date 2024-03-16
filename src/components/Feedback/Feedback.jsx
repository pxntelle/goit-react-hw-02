import css from "./Feedback.module.css";
import Notification from "../Notification/Notification";

export default function Feedback({ clicks, totalFeedback, positiveRate }) {
  return (
    <div className={css.fbSection}>
      <p>Good: {clicks.good}</p>
      <p>Neutral: {clicks.neutral}</p>
      <p>Bad: {clicks.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveRate}%</p>
    </div>
  );
}
