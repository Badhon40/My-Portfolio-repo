import { Mail, Phone, Github, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
        <footer className="bg-gray-950 text-gray-300 py-10 px-6 w-full">
      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Branding */}
          <div>
            <h2 className="text-white text-xl font-bold mb-2">Badhon.dev</h2>
            <p className="text-sm">
              Crafting clean, modern and interactive web experiences. Passionate about frontend, full-stack, and UI design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/"><span className="hover:underline">Home</span></Link></li>
              <li><Link href="#about"><span className="hover:underline">About</span></Link></li>
              <li><Link href="#projects"><span className="hover:underline">Projects</span></Link></li>
              <li><Link href="#contact"><span className="hover:underline">Contact</span></Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> badhonraniroy@gmail.com.dev
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> (+880)1876638846
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-2">Follow Me</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Badhon40" target="_blank" rel="noopener noreferrer">
                <Github className="hover:text-white w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/badhon-rani-468250306/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="hover:text-white w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/home.php" target="_blank" rel="noopener noreferrer">
                <Facebook className="hover:text-white w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} BadhonRani.dev — All rights reserved.
      </div>
    </footer>

  );
}
