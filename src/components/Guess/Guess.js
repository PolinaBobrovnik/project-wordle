import React from "react";
import { range } from "../../utils";

function Guess({ guessLetters = [] }) {
  return (
    <p className="guess">
      {guessLetters.length ? guessLetters.map(({ letter, status }, index) => (
        <span key={`${letter}-${index}`} className={`cell ${status}`}>
          {letter}
        </span>
      )) : range(0, 5).map((index) => (
        <span key={index} className="cell" />
      ))}
    </p>
  );
}

export default Guess;
