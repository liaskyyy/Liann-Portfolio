import React, { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://zenquotes.io/api/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[0].q);
        setAuthor(data[0].a);
      })
      .catch((err) => console.error("Error fetching quote:", err));
  }, []);

  return (
    <div className="text-center mt-6 p-4 bg-gray-100 rounded-2xl shadow-md max-w-md mx-auto">
      <p className="text-lg italic text-gray-800">“{quote}”</p>
      <p className="text-sm text-gray-600 mt-2">— {author}</p>
    </div>
  );
}

export default Quote;
