import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import LiannPhoto from "../assets/liannphoto.png";
import resume from "../assets/LiannGonzalesResume.pdf";
import NasaApod from "./NasaApod";


function Home() {
  const [quote, setQuote] = useState("Loading inspiration...");
  const [flipped, setFlipped] = useState(false);
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
      .then((res) => res.json())
      .then((data) =>
        setQuote(data?.text ? `“${data.text}”` : "“Stay curious, keep creating.” — Liann Gonzales")
      )
      .catch(() => setQuote("“Stay curious, keep creating.” — Liann Gonzales"));
  }, []);

  const fetchApod = async () => {
    try {
      const res = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=ts34OsW3aQnVdS5Tg9EewmYJkagxwO9sZHOoTc9l"
      );
      const data = await res.json();
      setApodData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFlip = async () => {
    await fetchApod();
    setFlipped(!flipped);
  };

  return (
    <motion.section
      id="home"
      className="pt-28 sm:pt-32 pb-16 bg-base-100 dark:bg-gray-950"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Left: Flip Card */}
        <div className="flex justify-center md:justify-start">
          <motion.div
            onClick={handleFlip}
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 cursor-pointer relative"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Front: Profile Picture */}
            <div
              className="absolute w-full h-full rounded-2xl shadow-2xl overflow-hidden backface-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img
                src={LiannPhoto}
                alt="Liann Gonzales"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Back: NASA APOD */}
            <div
              className="absolute w-full h-full rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900 flex justify-center items-center p-4 backface-hidden"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              {apodData ? <NasaApod apodData={apodData} /> : <p>Loading NASA...</p>}
            </div>
          </motion.div>
        </div>

        {/* Right: Info */}
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

          <motion.p className="mt-6 text-lg italic text-gray-600 dark:text-gray-300 max-w-lg">
            {quote}
          </motion.p>

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
