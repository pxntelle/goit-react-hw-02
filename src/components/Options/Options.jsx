import css from "./Options.module.css";

export default function Options({ updateFeedback, totalFeedback, resetClick }) {
  const hasClicks = totalFeedback > 0;

  return (
    <div className={css.optionsContainer}>
      <div className={css.buttonSection}>
        <button onClick={() => updateFeedback("good")}>Good</button>
        <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        <button onClick={() => updateFeedback("bad")}>Bad</button>
      </div>
      {hasClicks && (
        <div className={css.resetButton}>
          <button onClick={resetClick}>Reset</button>
        </div>
      )}
    </div>
  );
}
