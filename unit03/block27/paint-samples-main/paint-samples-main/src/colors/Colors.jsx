import { usePage } from "../layout/PageContext";

const COLORS = [
  "black",
  "silver",
  "gray",
  "white",
  "maroon",
  "red",
  "purple",
  "fuchsia",
  "green",
  "lime",
  "olive",
  "yellow",
  "navy",
  "blue",
  "teal",
  "aqua",
];

/** List of default wallpaper colors */
export default function Colors() {
  return (
    <ul id="colors">
      {COLORS.map((color) => (
        <Swatch key={color} color={color} />
      ))}
    </ul>
  );
}

/** A swatch that navigates the user to the wallpaper of that color */
function Swatch({ color }) {
  const { setPage } = usePage();
  return (
    <li>
      <a onClick={() => setPage("colors/" + color)}>
        <figure className="swatch">
          <div style={{ background: color }}></div>
          <figcaption>{color}</figcaption>
        </figure>
      </a>
    </li>
  );
}
