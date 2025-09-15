import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-3xl font-extrabold text-[#3246ea] tracking-wide">
          logo
        </h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-8 text-gray-700 font-medium">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group hover:text-[#3246ea] transition"
                >
                  {item}
                  {/* Animated underline */}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#3246ea] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
