import React from "react";
import LiannPhoto from "../assets/liannphoto.png";

function Home() {
  return (
    <section style={{ padding: "50px", maxWidth: "1000px", margin: "0 auto" }}>
      {/* Portfolio Title */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "50px", margin: "0" }}>Portfolio</h1>
        <h2 style={{ fontSize: "30px", margin: "10px 0", color: "#555" }}>2025 Edition</h2>
      </div>

      {/* Intro + Photo */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
        {/* Intro on the left */}
        <div style={{ flex: "1", minWidth: "300px", paddingRight: "20px" }}>
          <p style={{ fontSize: "20px", lineHeight: "1.6" }}>
            Hello! It's Liann, an Information Technology student based in Bulacan, Philippines. 
            I'm interested in learning new technologies, building projects, and improving my skills. 
            I'm also a self-taught graphic designer, passionate about creating visually appealing designs.
          </p>
        </div>

        {/* Photo on the right */}
        <div style={{ flex: "1", minWidth: "200px", textAlign: "center" }}>
          <img 
            src={LiannPhoto} 
            alt="Liann Gonzales" 
            style={{ width: "250px", borderRadius: "50%" }} 
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
