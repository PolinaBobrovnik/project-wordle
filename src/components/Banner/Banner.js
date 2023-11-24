import React from "react";

function Banner({ numberOfGuesses, isSuccess, answer, onRestart }) {
  return isSuccess ? (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numberOfGuesses} guesses</strong>.
      </p>
      <button onClick={onRestart}>Restart the game</button>
    </div>
  ) : (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={onRestart}>Restart the game</button>
    </div>
  );
}

export default Banner;
