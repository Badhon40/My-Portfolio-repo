'use client';
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex justify-between items-center h-16 px-4">
        <div className="flex items-center gap-2">
        <button className="lg:hidden text-white text-xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
          {/* Left: Logo */}
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold ">
            BADHON<span className="text-orange-500">RANI</span>
          </h1>
        </div>

          {/* Center: Nav links with pill-style background */}
          <div className="hidden lg:flex text-white items-center gap-6 bg-white/10 px-6 py-2 rounded-full shadow-inner backdrop-blur-md">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`font-medium transition-all duration-300 ease-in-out ${
                  active === link.href
                    ? 'bg-purple-800 px-3 py-1  rounded-full'
                    : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Download button */}
          <div className="">
            <a
              href="/cv.pdf"
              download
              className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition font-medium"
            >
              My Resume
            </a>
          </div>

          {/* Hamburger (mobile) */}
        
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden flex flex-col gap-4 py-4 px-6 mt-2 w-[80%] h-screen bg-white/20 bg-opacity-30 shadow-lg text-white transform duration-300 ease-in-out ${
                    open ? 'translate-x-0 opacity-100 pointer-events-auto' : '-translate-x-100 opacity-0 pointer-events-none'}`}>
                {links.map((link) => (
                    <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActive(link.href);
                       // Optional: closes the mobile menu
                    }}
                    className={`font-medium transition-all duration-300  ${
                      active === link.href
                        ? 'bg-purple-800 text-white px-3 py-1 rounded-full'
                        : 'text-white '
                    }`}
                  >
                    {link.name}
                  </Link>
                  
                ))}
               
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
