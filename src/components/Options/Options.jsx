import css from "./Options.module.css";

export default function Options({ handleClick, totalFeedback, resetClick }) {
  const hasClicks = totalFeedback > 0;
  return (
    <div className={css.optionsContainer}>
      <div className={css.buttonSection}>
        <button onClick={() => handleClick("good")}>Good</button>
        <button onClick={() => handleClick("neutral")}>Neutral</button>
        <button onClick={() => handleClick("bad")}>Bad</button>
      </div>
      {hasClicks && (
        <div className={css.resetButton}>
          <button onClick={resetClick}>Reset</button>
        </div>
      )}
    </div>
  );
}
