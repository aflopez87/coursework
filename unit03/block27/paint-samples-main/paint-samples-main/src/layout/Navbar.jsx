import { usePage } from "./PageContext";

/** Site navigation links */
export default function Navbar() {
  const { page, setPage } = usePage();
  return (
    <header>
      <p>Paint Samples</p>
      <nav>
        <a
          className={page === "home" ? "active" : ""}
          onClick={() => {
            setPage("home");
          }}
        >
          Home
        </a>
        <a
          className={page === "colors" ? "active" : ""}
          onClick={() => {
            setPage("colors");
          }}
        >
          Colors
        </a>
      </nav>
    </header>
  );
}
