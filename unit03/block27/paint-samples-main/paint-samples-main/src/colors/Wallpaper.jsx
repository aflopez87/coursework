import { usePage } from "../layout/PageContext";

/** Displays the current page as the wallpaper color */
export default function Wallpaper() {
  const { page, setPage } = usePage();

  // If the page is "colors/teal", then the color is "teal"
  const color = page.split("/")[1];

  return (
    <div id="wallpaper" style={{ background: color }}>
      <section>
        <h1>{color}</h1>
        <a onClick={() => setPage("colors")}>Back to all colors</a>
      </section>
    </div>
  );
}
