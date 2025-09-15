import React from "react";
import LiannPhoto from "../assets/liannphoto.png";

function Home() {
  return (
    <section id="home" className="pt-28 pb-20 bg-[#3246ea]">
      <div className="relative max-w-7xl mx-auto px-6 overflow-hidden">
        {/* Greeting */}
        <div className="relative z-10 text-center mb-6">
          <p className="text-lg sm:text-2xl md:text-3xl text-white/90 font-normal">Hello, welcome to my</p>
          <p className="mt-1 font-extrabold tracking-tight text-white text-[14vw] sm:text-[12vw] md:text-[10vw] leading-none">PORTFOLIO</p>
        </div>
        

        {/* Foreground content */}
        <div className="relative z-20 -mt-20 sm:-mt-28 md:-mt-36 flex justify-center">
          <div className="relative">
            {/* Large centered photo */}
            <img src={LiannPhoto} alt="Liann Gonzales" className="relative z-10 w-80 sm:w-[26rem] md:w-[34rem] rounded-xl" />
            {/* Small card below elbow (overlapping bottom-left on md+) */}
            <div className="mt-4 md:mt-0 md:absolute md:-left-24 md:bottom-6 bg-white/10 backdrop-blur-xl border border-white/30 rounded-xl shadow-lg ring-1 ring-white/10 p-4 max-w-xs text-white z-20">
              <p className="text-sm font-extrabold tracking-wide" style={{ color: '#ccff00' }}>I'm Liann C. Gonzales</p>
              <p className="mt-1 text-xs leading-6 text-white/90">
                An Information Technology student based in Bulacan, Philippines. I’m passionate about learning new
                technologies, building projects, and continuously improving my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
