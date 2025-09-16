import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "#eceeed", minHeight: "100vh" }}>
      <Header />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
