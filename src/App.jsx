import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Set default dark mode on first load
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen transition-all duration-500"
          : "bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen transition-all duration-500"
      }
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;



// import React, { useEffect, useState } from 'react'
// import AOS from "aos"
// import 'aos/dist/aos.css'
// import Navbar from './components/Navbar'

// const App = () => {
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(()=>{
//   AOS.init({
//     duration:1000,
//     once:false,
//     offset: 100
//   });
//   document.documentElement.classList.add('dark');
//   },[]);

//   const toggleDarkMode = ()=>{
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     document.documentElement.classList.toggle('dark');
//   }
//   return (
//     <div className={
//       darkMode ? 'bg-linear-to-br from bg-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
//       : 'bg-linear-to-br from bg-gray-50 to-blue-50 min-h-screen'
//     }>
//       <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
//     </div>
//   )
// }

// export default App
