import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div style={{ backgroundColor: "#eceeed", minHeight: "100vh" }}>
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
}


export default App;
