import React from "react";
import LiannPhoto from "../assets/liannphoto.png";
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';


function Home() {
  return (
    <section style={{ 
      padding: "50px", 
      maxWidth: "1000px", 
      margin: "0 auto", 
      backgroundColor: "#eceeed", 
      color: "#3246ea", 
      fontFamily: "'Tahoma', sans-serif"
    }}>
      {/* Portfolio Title */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
       <h1 style={{ 
          fontSize: "100px", 
          margin: "0", 
          color: "#3246ea", 
          fontFamily: "Georgia, serif" // Portfolio title font
        }}>
          PORTFOLIO
        </h1>
        <h2 style={{ 
          fontSize: "20px", 
          margin: "10px 0", 
          backgroundColor: "#bdfa2eff", 
          color: "#3246ea", 
          display: "inline-block", 
          padding: "10px 25px", 
          borderRadius: "12px",
          fontWeight: "bold"
        }}>
          2025 Edition
        </h2>
      </div>

      {/* Intro + Polaroid Photo */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
        
        {/* Intro on the left */}
        <div style={{ flex: "1", minWidth: "300px", paddingRight: "30px" }}>
            <h3 style={{ fontSize: "42px", marginBottom: "15px", color: "#3246ea",fontFamily: "Georgia, serif"}}>Hello!</h3>
            <p style={{ fontSize: "16px", lineHeight: "1.8", textAlign: "justify" }}>
                It's <strong>Liann</strong>, an Information Technology student based in Bulacan, Philippines. 
                I'm interested in learning new technologies, building projects, and improving my skills. 
                I'm also a self-taught graphic designer, passionate about creating visually appealing designs.
            </p>
        </div>


        {/* Polaroid Photo on the right */}
        <div style={{ flex: "1", minWidth: "250px", textAlign: "center" }}>
          <div style={{
            display: "inline-block",
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            boxShadow: "0 8px 15px rgba(0,0,0,0.2)",

          }}>
            <img 
              src={LiannPhoto} 
              alt="Liann Gonzales" 
              style={{ width: "250px", borderRadius: "15px 15px 0 0", display: "block" }} 
            />

            {/* Info rectangle */}
            <div style={{
                backgroundColor: "#ffffff",
                padding: "12px",
                borderRadius: "0 0 15px 15px",
                marginTop: "-5px",
                color: "#000000", // text color black
                fontWeight: "bold",
                textAlign: "left"
                }}>
                    <p style={{ margin: "5px 0", fontSize: "16px" }}>Liann Gonzales</p>
                    <p style={{ display: "flex", alignItems: "center", color: "gray", margin: "5px 0", fontSize: "12px" }}>
                        <FaMapMarkerAlt style={{ marginRight: "5px" }} /> Bulacan, Philippines
                        </p>
                        <p style={{ display: "flex", alignItems: "center", color: "gray", margin: "5px 0", fontSize: "12px" }}>
                            <FaEnvelope style={{ marginRight: "5px" }} /> lianngonzales7@gmail.com
                    </p>
                            
                </div>


          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
