import css from "./Feedback.module.css";
import Notification from "../Notification/Notification";

export default function Feedback({ clicks, totalFeedback, positiveRate }) {
  return (
    <div className={css.fbSection}>
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <>
          <p>Good: {clicks.good}</p>
          <p>Neutral: {clicks.neutral}</p>
          <p>Bad: {clicks.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positiveRate}%</p>
        </>
      )}
    </div>
  );
}
