import { usePage } from "./layout/PageContext";

import Home from "./Home";
import Colors from "./colors/Colors";
import Wallpaper from "./colors/Wallpaper";
import Error404 from "./Error404";

export default function App() {
  const { page } = usePage();
  if (page === "home") return <Home />;
  if (page === "colors") return <Colors />;
  if (page.startsWith("colors/")) return <Wallpaper />;
  return <Error404 />;
}
