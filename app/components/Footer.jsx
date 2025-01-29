import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Mail Icon"
            className="w-6"
          />
          abhishekmdp11@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-4 sm:mx-[10%] mt-12 py-6">
        <p className="text-sm sm:text-base">
          © 2025 Abhishek Kumar. All Rights Reserved.
        </p>
        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/abhishek-kr01"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/abhishek-kumar-6202249339ak/"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          {/* <li>
            <a
              target="_blank"
              href="https://github.com/abhishek-kr01"
              className="hover:underline"
            >
              Instagram
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
