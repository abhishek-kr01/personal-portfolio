// "use client";
// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";

// const Navbar = ({ isDarkMode, setIsDarkMode }) => {
//   const [isScroll, setIsScroll] = useState(false);
//   const [isMounted, setIsMounted] = useState(false); // Track whether the component is mounted on the client
//   const sideMenuRef = useRef();

//   const openMenu = () => {
//     sideMenuRef.current.style.transform = "translateX(0)";
//   };
//   const closeMenu = () => {
//     sideMenuRef.current.style.transform = "translateX(100%)";
//   };

//   useEffect(() => {
//     setIsMounted(true); // Set to true after the component mounts on the client side

//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScroll(true);
//       } else {
//         setIsScroll(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Render nothing until the component is mounted to avoid hydration issues
//   if (!isMounted) return null;

//   return (
//     <>
//       <div className="fixed top-0 right-0 w-full z-10 translate-y-[-80%] dark:hidden">
//         {/* Change the background image based on dark mode */}
//         <Image
//           src={isDarkMode ? assets.header_bg_dark : assets.header_bg_light} // Use light background for light mode
//           alt="Header Background"
//           className="w-full"
//         />
//       </div>

//       <nav
//         className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
//           isScroll
//             ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
//             : "bg-transparent"
//         }`}
//       >
//         <a href="#top">
//           <Image
//             src={isDarkMode ? assets.logo_dark : assets.logo}
//             alt="Logo"
//             className="w-28 cursor-pointer mr-14"
//           />
//         </a>

//         {/* Desktop Menu */}
//         <ul
//           className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
//             isScroll
//               ? ""
//               : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
//           }`}
//         >
//           <li>
//             <a className="font-Ovo" href="#top">
//               Home
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" href="#about">
//               About me
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" href="#services">
//               Services
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" href="#work">
//               My Work
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" href="#contact">
//               Contact me
//             </a>
//           </li>
//         </ul>

//         <div className="flex items-center gap-4">
//           {/* Dark Mode Toggle */}
//           <button onClick={() => setIsDarkMode((prev) => !prev)}>
//             <Image
//               src={isDarkMode ? assets.sun_icon : assets.moon_icon}
//               alt="Dark Mode Toggle"
//               className="w-6"
//             />
//           </button>

//           {/* Contact Button */}
//           <a
//             href="#contact"
//             className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
//           >
//             Contact
//             <Image
//               src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
//               alt="Arrow Icon"
//               className="w-3"
//             />
//           </a>

//           {/* Mobile Menu Toggle Button */}
//           <button onClick={openMenu} className="block md:hidden ml-3">
//             <Image
//               src={isDarkMode ? assets.menu_white : assets.menu_black}
//               alt="Menu Icon"
//               className="w-6"
//             />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         ref={sideMenuRef}
//         className="fixed top-0 right-0 w-64 h-full bg-rose-50 dark:bg-darkHover dark:text-white transition-transform duration-500 transform translate-x-full z-50"
//         style={{ transform: "translateX(100%)" }}
//       >
//         <div className="flex justify-end p-4">
//           <Image
//             src={isDarkMode ? assets.close_white : assets.close_black}
//             alt="Close Icon"
//             className="w-5 cursor-pointer"
//             onClick={closeMenu}
//           />
//         </div>
//         <ul className="flex flex-col items-center gap-6 py-20">
//           <li>
//             <a className="font-Ovo" onClick={closeMenu} href="#top">
//               Home
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" onClick={closeMenu} href="#about">
//               About me
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" onClick={closeMenu} href="#services">
//               Services
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" onClick={closeMenu} href="#work">
//               My Work
//             </a>
//           </li>
//           <li>
//             <a className="font-Ovo" onClick={closeMenu} href="#contact">
//               Contact me
//             </a>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;



"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Track whether the component is mounted on the client
  const sideMenuRef = useRef();

  const openMenu = () => {
    // same direct DOM transform approach as before
    if (sideMenuRef.current) sideMenuRef.current.style.transform = "translateX(0)";
  };
  const closeMenu = () => {
    if (sideMenuRef.current) sideMenuRef.current.style.transform = "translateX(100%)";
  };

  useEffect(() => {
    setIsMounted(true); // Set to true after the component mounts on the client side

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Render nothing until the component is mounted to avoid hydration issues
  if (!isMounted) return null;

  return (
    <>
      <div className="fixed top-0 right-0 w-full z-10 translate-y-[-80%] dark:hidden" aria-hidden>
        {/* Background image (visual) */}
        <Image
          src={isDarkMode ? assets.header_bg_dark : assets.header_bg_light}
          alt="Header background"
          className="w-full"
        />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <a href="#top" aria-label="Go to top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
          role="menubar"
          aria-hidden={false}
        >
          <li role="none">
            <a className="font-Ovo" href="#top" role="menuitem">
              Home
            </a>
          </li>
          <li role="none">
            <a className="font-Ovo" href="#about" role="menuitem">
              About me
            </a>
          </li>
          <li role="none">
            <a className="font-Ovo" href="#services" role="menuitem">
              Services
            </a>
          </li>
          <li role="none">
            <a className="font-Ovo" href="#work" role="menuitem">
              My Work
            </a>
          </li>
          <li role="none">
            <a className="font-Ovo" href="#contact" role="menuitem">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="p-1"
            type="button"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt={isDarkMode ? "Sun icon" : "Moon icon"}
              className="w-6"
            />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow Icon"
              className="w-3"
            />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={openMenu}
            className="block md:hidden ml-3"
            aria-label="Open menu"
            type="button"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu Icon"
              className="w-6"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={sideMenuRef}
        className="fixed top-0 right-0 w-64 h-full bg-rose-50 dark:bg-darkHover dark:text-white transition-transform duration-500 transform translate-x-full z-50"
        style={{ transform: "translateX(100%)" }}
        aria-hidden="true"
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="inline-flex items-center justify-center"
            type="button"
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close Icon"
              className="w-5 cursor-pointer"
            />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-6 py-20" role="menu">
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top" role="menuitem">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about" role="menuitem">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services" role="menuitem">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work" role="menuitem">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact" role="menuitem">
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
