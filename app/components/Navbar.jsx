"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(0)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(100%)";
    }
  };

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div className="fixed top-0 right-0 w-full z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={isDarkMode ? assets.header_bg_dark : assets.header_bg_light}
          alt=""
          className="w-full"
          priority
        />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Abhishek Kumar Logo"
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
        >
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About</a></li>
          <li><a className="font-Ovo" href="#services">What I Do</a></li>
          <li><a className="font-Ovo" href="#experience">Experience</a></li>
          <li><a className="font-Ovo" href="#work">Projects</a></li>
          <li><a className="font-Ovo" href="#contact">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
            className="p-1"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
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
              alt=""
              className="w-3"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={openMenu}
            className="block md:hidden ml-3"
            aria-label="Open menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={sideMenuRef}
        className="fixed top-0 right-0 w-64 h-full bg-rose-50 dark:bg-darkHover dark:text-white transition-transform duration-500 transform translate-x-full z-50"
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} aria-label="Close menu">
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5"
            />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-6 py-20">
          <li><a onClick={closeMenu} href="#top">Home</a></li>
          <li><a onClick={closeMenu} href="#about">About</a></li>
          <li><a onClick={closeMenu} href="#services">What I Do</a></li>
          <li><a onClick={closeMenu} href="#experience">Experience</a></li>
          <li><a onClick={closeMenu} href="#work">Projects</a></li>
          <li><a onClick={closeMenu} href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
