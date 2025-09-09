import React from "react";
import LiannPhoto from "../assets/liannphoto.png";

function Home() {
  return (
    <section style={{ textAlign: "center", padding: "50px" }}>
      {/* Portfolio Title */}
      <h2>Portfolio</h2>

      {/* Your Name */}
      <h1>Liann Gonzales</h1>

      {/* Photo */}
      <img 
        src={LiannPhoto} 
        alt="Liann Gonzales" 
        style={{ width: "150px", borderRadius: "50%", margin: "20px 0" }} 
      />

      {/* Introduction */}
      <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6", fontSize: "18px" }}>
        Hello! It's Liann, an Information Technology student based in Bulacan, Philippines. 
        I'm interested in learning new technologies, building projects, and improving my skills. 
        I'm also a self-taught graphic designer, passionate about creating visually appealing designs.
      </p>
    </section>
  );
}

export default Home;
