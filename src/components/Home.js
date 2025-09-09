import React from "react";
import LiannPhoto from "../assets/liannphoto.png";


function Home() {
  return (
    <section style={{ textAlign: "center", padding: "50px" }}>
      <h1>Hi, I'm Liann Gonzales</h1>
      <img 
      src={LiannPhoto} 
      alt="Liann Gonzales" 
      style={{ width: "150px", borderRadius: "50%" }} 
      />

      <p>Information Technology Student | Developer | Designer</p>
    </section>
  );
}

export default Home;
