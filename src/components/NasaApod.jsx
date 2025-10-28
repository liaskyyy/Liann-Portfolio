import React, { useEffect, useState } from "react";

export default function NasaApod() {
  const [apod, setApod] = useState(null);

  const API_KEY = "ts34OsW3aQnVdS5Tg9EewmYJkagxwO9sZHOoTc9l";

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setApod(data))
      .catch((err) => console.error(err));
  }, []);

  if (!apod) return <p>Loading...</p>;

  return (
    <div className="max-w-xs mx-auto p-2 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-white/20 text-center">
      <img
        src={apod.url}
        alt={apod.title}
        className="rounded-lg mb-2 w-full h-40 object-cover"
      />
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
        {apod.title}
      </h3>
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        {apod.date}
      </p>
    </div>
  );
}
