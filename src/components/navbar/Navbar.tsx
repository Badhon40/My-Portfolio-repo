'use client';
import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#project" },
    { name: "Skills", href: "#skills" },
    { name: "About me", href: "#aboutme" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md h-20">
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex justify-between items-center h-16 px-4">
        <div className="flex items-center gap-4">
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
         <div className="flex gap-4">
         <a href="https://github.com/Badhon40" target="_blank" rel="noopener noreferrer">
                <Github className="text-white w-8 h-8" />
              </a>
          <a href="https://www.linkedin.com/in/badhon-rani-468250306/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-white w-8 h-8" />
                </a>
         </div>
        
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden flex flex-col gap-4 py-4 px-6 mt-2 w-[80%] h-screen bg-white/10 bg-opacity-30 shadow-lg text-white transform duration-300 ease-in-out ${
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
