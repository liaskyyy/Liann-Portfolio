import React from "react";

function Header() {
  return (
    <header style={{ padding: "20px", textAlign: "center", background: "#f2f2f2" }}>
      <h1>Liann Gonzales Portfolio</h1>
      <nav>
        <a href="#home" style={{ margin: "0 10px" }}>Home</a>
        <a href="#about" style={{ margin: "0 10px" }}>About</a>
        <a href="#projects" style={{ margin: "0 10px" }}>Projects</a>
        <a href="#skills" style={{ margin: "0 10px" }}>Skills</a>
        <a href="#contact" style={{ margin: "0 10px" }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
