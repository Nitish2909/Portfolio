import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#project" },
    { name: "Contact", link: "#contact" },
  ];

  // Apply dark mode to html
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 shadow-md bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <a
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className={`transition duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? "text-orange-500"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-orange-500`}
              >
                {item.name}
              </a>

              {activeSection === item.name.toLowerCase() && (
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white hover:scale-110 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer text-gray-900 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 py-4 space-y-4 transition">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => handleNavClick(item.name)}
              className={`block ${
                activeSection === item.name.toLowerCase()
                  ? "text-orange-500"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {item.name}
            </a>
          ))}

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-full mt-4 px-4 py-2 rounded-full bg-orange-500 text-white"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";

// const Navbar = ({ darkMode, toggleDarkMode }) => {
//   const [activeSection, setActiveSection] = useState("home");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { name: "Home", link: "#home" },
//     { name: "About", link: "#about" },
//     { name: "Skills", link: "#skills" },
//     { name: "Projects", link: "#project" },
//     { name: "Contact", link: "#contact" },
//   ];

//   const lightColors = {
//     navBg: "bg-gradient-to-br from-orange-200 to-white",
//     textPrimary: "text-gray-900",
//     textSecondary: "text-gray-800",
//     textHover: "hover:text-orange-500",
//     textActive: "text-orange-600",
//     indicator: "from-orange-500 to-amber-500",
//     button: "from-orange-500 to-amber-500",
//   };

//   const darkColors = {
//     navBg: "bg-gradient-to-br from-orange-700 to-black",
//     textPrimary: "text-white",
//     textSecondary: "text-gray-300",
//     textHover: "hover:text-orange-400",
//     textActive: "text-orange-400",
//     indicator: "from-orange-500 to-amber-500",
//     button: "from-orange-500 to-amber-500",
//   };

//   const colors = darkMode ? darkColors : lightColors;

//   const handleNavClick = (itemName) => {
//     setActiveSection(itemName.toLowerCase());
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className={`fixed w-full z-50 shadow-md ${colors.navBg}`}>
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
//         {/* Logo */}
//         <h1 className={`text-2xl font-bold ${colors.textPrimary}`}>
//           MyPortfolio
//         </h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 items-center">
//           {navItems.map((item) => (
//             <li key={item.name} className="relative">
//               <a
//                 href={item.link}
//                 onClick={() => handleNavClick(item.name)}
//                 className={`transition duration-300 ${
//                   activeSection === item.name.toLowerCase()
//                     ? colors.textActive
//                     : colors.textSecondary
//                 } ${colors.textHover}`}
//               >
//                 {item.name}
//               </a>

//               {/* Active Indicator */}
//               {activeSection === item.name.toLowerCase() && (
//                 <span
//                   className={`absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r ${colors.indicator} rounded-full`}
//                 ></span>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Dark Mode Button */}
//         <button
//           onClick={toggleDarkMode}
//           className={`hidden md:block px-4 py-2 rounded-full bg-gradient-to-r ${colors.button} text-white font-medium`}
//         >
//           {darkMode ? "Light Mode" : "Dark Mode"}
//         </button>

//         {/* Mobile Menu Button */}
//         <div
//           className={`md:hidden text-2xl cursor-pointer ${colors.textPrimary}`}
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           ☰
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4 space-y-4">
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.link}
//               onClick={() => handleNavClick(item.name)}
//               className={`block transition duration-300 ${
//                 activeSection === item.name.toLowerCase()
//                   ? colors.textActive
//                   : "text-white"
//               }`}
//             >
//               {item.name}
//             </a>
//           ))}

//           <button
//             onClick={toggleDarkMode}
//             className={`w-full px-4 py-2 rounded-full bg-gradient-to-r ${colors.button} text-white font-medium`}
//           >
//             {darkMode ? "Light Mode" : "Dark Mode"}
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

