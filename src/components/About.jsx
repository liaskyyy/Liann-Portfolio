export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-sm font-medium text-[#3246ea]">What I can do</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Bringing your ideas to life
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I blend design and development to build clean, responsive, and user-centric experiences.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature title="UI/UX Design" points={["HTML, CSS, JavaScript, React", "Responsive and modern websites", "Wireframes & prototypes"]} />
          <Feature title="Web Development" points={["HTML, CSS, JavaScript, React","Build responsive and modern websites"]} />
          <Feature title="Microsoft Excel" points={["Certified in MS Excel", "Data organization & visualization", "Using formulas to automate tasks"]} />
          <Feature title="Graphic Design" points={["Logos & branding", "Posters & kits", "Illustrations"]} />
        </div>
      </div>
    </section>
  );
}
function Feature({ title, points }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc pl-5">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
