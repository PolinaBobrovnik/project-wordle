import React, { useState } from "react";

function GuessInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(inputValue);
        setInputValue("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={inputValue}
        pattern="[A-Za-z]{5}"
        autoComplete="off"
        maxLength="5"
        title="The input should have a minimum and maximum length of 5"
        onChange={(event) => setInputValue(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
