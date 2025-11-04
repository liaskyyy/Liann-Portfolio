import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import LiannPhoto from "../assets/liannphoto.png";
import resume from "../assets/LiannGonzalesResume.pdf";
import BibleVerse from "./BibleVerse";
import Weather from "./Weather";

function Home() {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <motion.section
      id="home"
      className="pt-28 sm:pt-32 pb-16 bg-base-100 dark:bg-gray-950 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >

      <div className="absolute top-6 right-6">
        <Weather />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

        <div className="flex justify-center md:justify-start">
          <motion.div
            onClick={handleFlip}
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 cursor-pointer relative"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.8 }}
          >

            <div
              className="absolute w-full h-full rounded-2xl shadow-2xl overflow-hidden flex justify-center items-center p-4 text-center"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img
                src={LiannPhoto}
                alt="Liann Gonzales"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

 
            <div
              className="absolute w-full h-full rounded-2xl shadow-2xl overflow-hidden flex justify-center items-center p-4 text-center"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <img
                src={LiannPhoto}
                alt="Liann Gonzales"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>


        <div>
          <motion.h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Liann Gonzales
          </motion.h1>

          <motion.div className="text-xl sm:text-2xl mt-3 font-semibold text-[#3246ea]">
            <ReactTyped
              strings={[
                "I am an IT Student 💻",
                "I am a Graphic Designer 🎨",
                "I am a Front-End Developer 🖥️",
                "I am a Digital Artist ✏️",
                "I am a Gymnastics Coach 🤸‍♀️",
                "I am a UI/UX Designer 📱",
              ]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1500}
              loop
            />
          </motion.div>


          <div className="mt-6">
            <BibleVerse />
          </div>


          <motion.div className="mt-8 flex flex-wrap gap-3">
            <a
              href={resume}
              download="LiannGonzalesResume.pdf"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#3246ea] to-blue-500 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              📄 Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-xl border border-gray-300 dark:border-white/10 text-gray-900 dark:text-gray-200 font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transform hover:-translate-y-1 transition-all duration-300"
            >
              ✉️ Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
