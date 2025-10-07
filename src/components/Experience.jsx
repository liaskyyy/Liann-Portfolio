import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-gray-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#3246ea] text-center">
          Experience
        </h2>

        <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          <ExperienceItem
            role="Freelance Graphic Designer"
            period="2021 – 2022"
            description="Worked on logo design, branding, and illustration projects for various clients, focusing on creating visually appealing and impactful designs."
          />

          <ExperienceItem
            role="Gymnastics Coach"
            period="2020 – Present"
            description="Coaching young gymnasts in skills development, discipline, and performance, contributing to both recreational and competitive training programs."
          />

          <ExperienceItem
            role="Technical Director – Gymnastics Competitions"
            period="2022 – Present"
            description="Managing the technical aspects of gymnastics competitions, including scoring systems, event coordination, and ensuring smooth execution of events."
          />
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ role, period, description }) {
  return (
    <article className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-white/10 shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
          {role}
        </h3>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {period}
        </span>
      </div>
      <p className="mt-4 text-sm sm:text-base leading-7 text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </article>
  );
}
