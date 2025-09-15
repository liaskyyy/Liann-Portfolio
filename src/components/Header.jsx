import React from "react";

function Header() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onDocClick = (e) => {
      // Close when clicking outside the dropdown
      if (!(e.target.closest && e.target.closest('#projects-menu'))) {
        setOpen(false);
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200/60 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-3xl font-extrabold text-[#3246ea] tracking-wide">
          logo
        </h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-8 text-gray-700 font-medium items-center">
            <li>
              <a href="#home" className="relative group hover:text-[#3246ea] transition">
                Home
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#3246ea] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#about" className="relative group hover:text-[#3246ea] transition">
                About
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#3246ea] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            {/* Projects with two selectable options (click to open) */}
            <li id="projects-menu" className="relative">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="relative hover:text-[#3246ea] transition focus:outline-none"
              >
                Projects
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#3246ea] transition-all duration-300" style={{ width: open ? '100%' : '0%' }}></span>
              </button>
              {open && (
                <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-56 z-50">
                  <a href="#projects-it" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">Information Technology</a>
                  <a href="#projects-design" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">Graphic Design</a>
                </div>
              )}
            </li>
            <li>
              <a href="#experience" className="relative group hover:text-[#3246ea] transition">
                Experience
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#3246ea] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#skills" className="relative group hover:text-[#3246ea] transition">
                Skills
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#3246ea] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#contact" className="relative group hover:text-[#3246ea] transition">
                Contact
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#3246ea] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
