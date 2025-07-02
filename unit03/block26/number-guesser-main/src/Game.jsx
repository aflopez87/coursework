import { useGame } from "./GameContext";

/** The computer guesses a number, then asks the user for feedback. */
export default function Game() {
  const { guess } = useGame();

  // TODO: process user response to make a new guess

  return (
    <>
      <h1>Guessing!</h1>
      <form>
        <label>
          Is your number {guess}?
          <select name="response">
            <option value="lower">No, my number is lower.</option>
            <option value="correct">Yes! You're correct!</option>
            <option value="higher">No, my number is higher.</option>
          </select>
        </label>
        <button>Respond</button>
      </form>
    </>
  );
}
