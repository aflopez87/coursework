import { useGame } from "./GameContext";

/**
 * Welcome screen with instructions for the game.
 * Users set the largest number the computer can guess.
 */
export default function GameStart() {
  const { start } = useGame();

  /** Starts the game with the user-provided max */
  const startGame = (formData) => {
    // The unary plus operator (+) is syntactic sugar for Number()
    const max = +formData.get("max");
    start(max);
  };

  return (
    <>
      <h1>Welcome</h1>
      <p>Let's play a game!</p>
      <p>Think of a positive integer, and I'll try to guess it!</p>
      <form action={startGame}>
        <label>
          What's the largest number I'm allowed to guess?
          <input name="max" type="number" />
        </label>
        <button>Start</button>
      </form>
    </>
  );
}
