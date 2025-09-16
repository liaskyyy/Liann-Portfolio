import React, { useState } from "react";
import orgShirt from "../assets/REVISED ORG POLO SHIRT.png";
import cherryTomato from "../assets/CHERRY TOMATO LOGO w TEXT-03.png";
import frog from "../assets/pepeTheFrog.png";
import tmc from "../assets/tmc-logo.jpg";



export default function Projects() {
  const [tab, setTab] = useState("it");

  React.useEffect(() => {
    const applyFromHash = () => {
      if (window.location.hash === "#projects-design") setTab("design");
      if (window.location.hash === "#projects-it") setTab("it");
    };
    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  return (
    <section id="projects" className="bg-white dark:bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-sm font-medium text-[#3246ea]">Selected Work</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Projects I've built
          </h2>
          <div className="mt-6 inline-flex rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
            <button
              onClick={() => setTab("it")}
              className={`px-4 py-2 text-sm font-medium ${
                tab === "it"
                  ? "bg-[#3246ea] text-white"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
              }`}
              aria-pressed={tab === "it"}
            >
              Information Technology
            </button>
            <button
              onClick={() => setTab("design")}
              className={`px-4 py-2 text-sm font-medium ${
                tab === "design"
                  ? "bg-[#3246ea] text-white"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
              }`}
              aria-pressed={tab === "design"}
            >
              Graphic Design
            </button>
          </div>
        </div>

        <div className="mt-10" id="projects-it">
          {tab === "it" ? <ItProjects /> : <DesignProjects />}
        </div>
        <div id="projects-design" className="sr-only" aria-hidden></div>
      </div>
    </section>
  );
}

function Card({ title, description, image, link }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <figure
          className="bg-white flex items-center justify-center h-48 w-full cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <img src={image} alt={title} className="object-contain h-full w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          {link && (
            <div className="card-actions justify-end">
              <a
                href={link}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          )}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <img
            src={image}
            alt={title}
            className="max-h-[80vh] max-w-[90vw] object-contain shadow-2xl rounded"
          />
        </div>
      )}
    </>
  );
}





function ItProjects() {
const items = [
  {
    title: "Cherry Tomato App (Pomodoro)",
    description:
      "Created the UI design for our capstone project — a Pomodoro timer app with task management and progress tracking features.",
    image: cherryTomato,
    link: "https://www.figma.com/design/SUhaT4WfdsFubPVW3eOMw9/Cherry-Tomato?node-id=0-1&t=rLvc2qtTrgeSSMsW-1"
    
  },
  {
    title: "Pepe the Frog Mini Game",
    description:
      "Developed a fun mini game using Godot, featuring Pepe the Frog as the main character. Focused on simple mechanics, smooth controls, and engaging gameplay.",
    image: frog,
    link: "https://github.com/liaskyyy/pepethefroggame.git",
  },
  {
    title: "TMC Website",
    description:
      "Developed a responsive website for a gymnastics sports academy, featuring programs, coaches, and events with user-friendly navigation.",
    image: tmc,
    link: "https://github.com/liaskyyy/tmc-website.git",
  },
];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it) => (
        <Card key={it.title} {...it} />
      ))}
    </div>
  );
}

function DesignProjects() {
const items = [
  {
    title: "JPSSITE ORG SHIRT",
    description:
      "Designed the official organization shirt for JPSSITE, combining creativity and branding. Recognized as the winning design.",
    image: orgShirt,
  },
];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it) => (
        <Card key={it.title} {...it} />
      ))}
    </div>
  );
}