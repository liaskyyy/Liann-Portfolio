import React from "react";
import LiannPhoto from "../assets/liannphoto.png";

function Home() {
  return (
    <section id="home" className="pt-28 sm:pt-32 pb-16 bg-base-100 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10 relative">
        <div>
          
          <h1 className="text-2xl sm:text-5xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Hey, I'm Liann Gonzales
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            An <strong>Information Technology</strong> student based in Bulacan, Philippines. I’m passionate about learning new technologies, building projects, and continuously improving my skills.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center px-5 py-3 rounded-lg bg-[#3246ea] text-white font-medium hover:opacity-90">View Projects</a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-lg border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-white/5">Contact Me</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={LiannPhoto} alt="Liann Gonzales" className="w-64 sm:w-80 md:w-[28rem] rounded-xl shadow-2xl" />
        </div>
      </div>
    </section>
  );
}

export default Home;
