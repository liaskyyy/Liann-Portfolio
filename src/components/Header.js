import React from "react";

function Header() {
  return (
    <header style={{
      backgroundColor: "#3246ea",
      padding: "10px 50px",
      color: "#ffffff",
      fontFamily: "'Tahoma', sans-serif",
      display: "flex",
      justifyContent: "space-between", // space between name and nav links
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      {/* Left: Name */}
      <h1 style={{ margin: 0, fontSize: "16px", fontWeight: "bold",fontFamily: "Georgia, serif" }}>Liann Gonzales</h1>

      {/* Right: Navigation links */}
      <nav>
        <a href="#home" style={navLinkStyle}>Home</a>
        <a href="#about" style={navLinkStyle}>About</a>
        <a href="#skills" style={navLinkStyle}>Skills</a>
        <a href="#projects" style={navLinkStyle}>Projects</a>
        <a href="#contact" style={navLinkStyle}>Contact</a>
      </nav>
    </header>
  );
}

// Reusable style for nav links
const navLinkStyle = {
  color: "#ffffff",
  marginLeft: "20px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
  transition: "color 0.3s"
};

export default Header;
