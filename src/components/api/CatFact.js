import React, { useEffect, useState } from "react";

function CatFact() {
  const [fact, setFact] = useState("Loading cat fact...");

  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        const res = await fetch("https://catfact.ninja/fact");
        const data = await res.json();
        setFact(data.fact || "Cats are amazing creatures!");
      } catch (err) {
        console.error(err);
        setFact("Cats are amazing creatures!");
      }
    };

    fetchCatFact();
  }, []); // Empty dependency array = run once on mount

  return (
    <p className="mt-6 text-lg italic text-gray-600 dark:text-gray-300 max-w-lg">
      {fact}
    </p>
  );
}

export default CatFact;
