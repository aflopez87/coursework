import Navbar from "./Navbar";

/** Main application layout */
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
