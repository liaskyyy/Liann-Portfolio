import React, { useState } from "react";

export default function Projects() {
  const [tab, setTab] = useState("it");

  // Sync with hash from header links
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
    <section id="projects" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#3246ea]">
            Projects
          </h2>

          {/* Tabs control (also duplicated in header via anchors) */}
          <div className="inline-flex rounded-lg border border-gray-200 overflow-hidden">
            <button
              onClick={() => setTab("it")}
              className={`px-4 py-2 text-sm font-medium ${tab === "it" ? "bg-[#3246ea] text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
              aria-pressed={tab === "it"}
            >
              Information Technology
            </button>
            <button
              onClick={() => setTab("design")}
              className={`px-4 py-2 text-sm font-medium ${tab === "design" ? "bg-[#3246ea] text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
              aria-pressed={tab === "design"}
            >
              Graphic Design
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-10" id="projects-it">
          {tab === "it" ? <ItProjects /> : <DesignProjects />}
        </div>
        {/* Anchor target for design tab */}
        <div id="projects-design" className="sr-only" aria-hidden></div>
      </div>
    </section>
  );
}

function ItProjects() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {["Cherry Tomato App (Pomodoro)", "Face Recognition (Python)", "Portfolio Site (React)"]
        .map((title) => (
          <article key={title} className="rounded-xl border border-gray-200 p-5 bg-white shadow-sm">
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">Short description of the project and tech stack used.</p>
            <div className="mt-3 text-sm text-[#3246ea]">View details →</div>
          </article>
        ))}
    </div>
  );
}

function DesignProjects() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {["Brand Logo Pack", "Event Poster Series", "Social Media Kit"]
        .map((title) => (
          <article key={title} className="rounded-xl border border-gray-200 p-5 bg-white shadow-sm">
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">Short description of the design work and tools used.</p>
            <div className="mt-3 text-sm text-[#3246ea]">View details →</div>
          </article>
        ))}
    </div>
  );
}


