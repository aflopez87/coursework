import { useGame } from "./GameContext";

import Game from "./Game";
import GameEnd from "./GameEnd";
import GameStart from "./GameStart";

export default function App() {
  const { phase } = useGame();
  if (phase === "START") return <GameStart />;
  if (phase === "END") return <GameEnd />;
  return <Game />;
}
