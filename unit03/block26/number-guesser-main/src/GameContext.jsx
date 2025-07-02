import { createContext, useContext, useEffect, useState } from "react";

const GameContext = createContext();

/** Manages state for a number guessing game. */
export function GameProvider({ children }) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState();
  const [guess, setGuess] = useState();
  const [tries, setTries] = useState(0);
  const [phase, setPhase] = useState("START");

  // Guesses the number in the middle of the current range whenever min or max changes.
  useEffect(() => {
    setGuess(Math.floor((max + min) / 2));
    setTries(tries + 1);
  }, [min, max]);

  // Starts a new game with the provided max number
  const start = (max) => {
    setMin(0);
    setMax(max);
    setTries(0);
    setPhase("PLAY");
  };

  // Goes back to game start
  const restart = () => setPhase("START");

  // Handles the user's response to the current guess
  const process = (response) => {
    if (response === "correct") {
      setPhase("END");
    } else if (response === "lower") {
      setMax(guess);
    } else {
      setMin(guess);
    }
  };

  // TODO: provide the correct context!
  const value = { phase };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGuess must be used within a GuessProvider");
  return context;
}
