import React from "react";

export default function NavBar({ themeToggler }) {
  return (
    <div>
      NavBar
      <button onClick={themeToggler}>theme</button>
    </div>
  );
}
