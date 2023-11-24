import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Guess from "../Guess";

function GuessResults({ guessList }) {
  const results = range(0, NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {results.map((index) => (
        <Guess key={index} guessLetters={guessList[index]} />
      ))}
    </div>
  );
}

export default GuessResults;
