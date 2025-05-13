'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Linkedin } from 'lucide-react';
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('/'); // Default active link
  const pathname = usePathname();

  useEffect(() => {
    setActive(pathname); // Update active state when pathname changes
  }, [pathname]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/#project" },
    { name: "Skills", href: "/#skills" },
    { name: "About me", href: "/#aboutme" },
    { name: "Blogs", href: "/#blogs" },
    { name: "Contact", href: "/#contact" },
    { name: "All Projects", href: "/projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-transparent backdrop-blur-md h-20">
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex justify-between items-center h-16 px-4">
          {/* Left: Logo & Hamburger */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-white text-3xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
              BADHON<span className="text-orange-500">RANI</span>
            </h1>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden lg:flex text-white items-center gap-6 bg-white/10 px-6 py-2 rounded-full shadow-inner backdrop-blur-md">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`font-medium transition-all duration-300 ease-in-out ${
                  active === link.href ? 'bg-purple-800 px-3 py-1 rounded-full' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-4">
            <a href="https://github.com/Badhon40" target="_blank" rel="noopener noreferrer">
              <Github className="text-white w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/badhonrani" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-white w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
            <div
              className={`fixed top-20 left-0 z-40 lg:hidden flex flex-col gap-4 py-6 px-6 w-[80%] h-[calc(100vh-5rem)] bg-black/40 shadow-lg text-white transform transition duration-300 ease-in-out ${
                open ? 'translate-x-0 opacity-100 pointer-events-auto' : '-translate-x-full opacity-0 pointer-events-none'
              }`}
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActive(link.href);
                    setOpen(false); // Close menu on click
                  }}
                  className={`font-medium  transition-all duration-300 ${
                    active === link.href
                      ? 'bg-purple-800 text-white text-md px-3 py-1 rounded-full'
                      : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
)}
      </div>
    </nav>
  );
};

export default Navbar;
