export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-medium text-[#3246ea]">What I can do</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Bringing your ideas to life
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I blend design and development to build clean, responsive, and user-centric experiences.
          </p>
        </div>

        {/* Features as cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            title="UI/UX Design"
            points={[
              "Wireframes & prototypes",
              "User-friendly experiences",
              "Visual design systems",
            ]}
          />
          <Feature
            title="Web Development"
            points={[
              "HTML, CSS, JavaScript, React",
              "Responsive & modern websites",
              "Reusable components",
            ]}
          />
          <Feature
            title="Microsoft Excel"
            points={[
              "Certified in MS Excel",
              "Data organization & visualization",
              "Formulas & automation",
            ]}
          />
          <Feature
            title="Graphic Design"
            points={[
              "Logos & branding",
              "Posters & marketing kits",
              "Illustrations",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, points }) {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-white/10 shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc pl-5">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
