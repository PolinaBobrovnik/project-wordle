import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner/Banner";

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guessList, setGuessList] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNewWordSubmit = (guess) => {
    const result = checkGuess(guess, answer);
    if (result.filter((item) => item.status === "correct").length === 5) {
      setIsSuccess(true);
    }
    setGuessList([...guessList, result]);
  };

  const handleRestart = () => {
    setAnswer(sample(WORDS));
    setGuessList([]);
    setIsSuccess(false);
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      {isSuccess || guessList.length === 6 ? (
        <Banner
          numberOfGuesses={guessList.length}
          isSuccess={isSuccess}
          answer={answer}
          onRestart={handleRestart}
        />
      ) : (
        <GuessInput onSubmit={handleNewWordSubmit} />
      )}
    </>
  );
}

export default Game;
