import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <footer className="relative bg-black text-white pt-20 pb-10 overflow-hidden">

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            size: { value: 2 },
            move: { speed: 1 },
            links: { enable: true, opacity: 0.2 },
          },
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Nitish Kumar
            </h2>
            <p className="text-gray-400 mt-4 text-sm">
              Full-Stack Developer building scalable and modern web apps.
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center justify-center gap-6">
            <a href="https://github.com/Nitish2909" className="hover:text-orange-400 transition">
              <FaGithub size={22} />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaLinkedin size={22} />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaInstagram size={22} />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} Nitish Kumar. All Rights Reserved.
        </div>

      </div>

      {/* Scroll Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <FaArrowUp />
        </button>
      )}
       {/* Scroll Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;