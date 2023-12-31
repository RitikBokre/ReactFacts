import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  function toggleMode() {
    setDarkMode((prev) => !prev);
  }
  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}
