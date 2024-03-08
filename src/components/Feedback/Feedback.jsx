import css from "./Feedback.module.css";

export default function Feedback({ clicks, totalFeedback, positiveRate }) {
  return (
    <div className={css.fbSection}>
      {totalFeedback === 0 ? (
        <p>No feedback yet</p>
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
