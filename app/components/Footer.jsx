// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";

// const Footer = ({ isDarkMode }) => {
//   return (
//     <div className="mt-20">
//       <div className="text-center">
//         <Image
//           src={isDarkMode ? assets.logo_dark : assets.logo}
//           alt="Logo"
//           className="w-36 mx-auto mb-2"
//         />

//         <div className="w-max flex items-center gap-2 mx-auto">
//           <Image
//             src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
//             alt="Mail Icon"
//             className="w-6"
//           />
//           abhishekmdp11@gmail.com
//         </div>
//       </div>

//       <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-4 sm:mx-[10%] mt-12 py-6">
//         <p className="text-sm sm:text-base">
//           © Abhishek Kumar. All Rights Reserved. Made With ❤
//         </p>
//         <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
//           <li>
//             <a
//               target="_blank"
//               href="https://github.com/abhishek-kr01"
//               className="hover:underline"
//             >
//               GitHub
//             </a>
//           </li>
//           <li>
//             <a
//               target="_blank"
//               href="https://www.linkedin.com/in/abhishek-kumar-6202249339ak/"
//               className="hover:underline"
//             >
//               LinkedIn
//             </a>
//           </li>
//           <li>
//             <a
//               target="_blank"
//               href="https://x.com/Abhishek_kr__"
//               className="hover:underline"
//             >
//               Twitter
//             </a>
//           </li>
//           <li>
//             <a
//               target="_blank"
//               href="https://www.instagram.com/abhishek__kr.__/?hl=en"
//               className="hover:underline"
//             >
//               Instagram
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Footer;


// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";

// const Footer = ({ isDarkMode }) => {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="mt-20">
//       <div className="text-center">
//         <Image
//           src={isDarkMode ? assets.logo_dark : assets.logo}
//           alt="Abhishek Kumar logo"
//           className="w-36 mx-auto mb-2"
//         />

//         <div className="w-max flex items-center gap-2 mx-auto">
//           <Image
//             src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
//             alt="Mail Icon"
//             className="w-5"
//           />
//           <a
//             href="mailto:abhishekmdp11@gmail.com"
//             className="underline"
//             aria-label="Send email to Abhishek Kumar"
//           >
//             abhishekmdp11@gmail.com
//           </a>
//         </div>
//       </div>

//       <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-4 sm:mx-[10%] mt-12 py-6">
//         <p className="text-sm sm:text-base">
//           © {year} Abhishek Kumar. All Rights Reserved. Made with ❤
//         </p>

//         <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
//           <li>
//             <a
//               href="https://github.com/abhishek-kr01"
//               target="_blank"
//               rel="noreferrer noopener"
//               className="hover:underline"
//               aria-label="Abhishek's GitHub"
//             >
//               GitHub
//             </a>
//           </li>

//           <li>
//             <a
//               href="https://www.linkedin.com/in/abhishek-kumar-6202249339ak/"
//               target="_blank"
//               rel="noreferrer noopener"
//               className="hover:underline"
//               aria-label="Abhishek's LinkedIn"
//             >
//               LinkedIn
//             </a>
//           </li>

//           <li>
//             <a
//               href="https://x.com/Abhishek_kr__"
//               target="_blank"
//               rel="noreferrer noopener"
//               className="hover:underline"
//               aria-label="Abhishek's X (Twitter)"
//             >
//               X
//             </a>
//           </li>

//           <li>
//             <a
//               href="https://www.instagram.com/abhishek__kr.__/?hl=en"
//               target="_blank"
//               rel="noreferrer noopener"
//               className="hover:underline"
//               aria-label="Abhishek's Instagram"
//             >
//               Instagram
//             </a>
//           </li>

//           <li>
//             <a
//               href="/Abhishek.pdf"
//               download
//               className="hover:underline"
//               aria-label="Download Abhishek's resume"
//             >
//               Resume
//             </a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Abhishek Kumar logo"
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Mail Icon"
            className="w-5"
          />
          <a
            href="mailto:abhishekmdp11@gmail.com"
            className="underline"
            aria-label="Send email to Abhishek Kumar"
          >
            abhishekmdp11@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-4 sm:mx-[10%] mt-12 py-6">
        <p className="text-sm sm:text-base">
          © {year} Abhishek Kumar. All rights reserved.
        </p>

        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="https://github.com/abhishek-kr01"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:underline"
              aria-label="Abhishek's GitHub"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/akr-abhishek-kr01/"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:underline"
              aria-label="Abhishek's LinkedIn"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href="https://x.com/Abhishek_kr__"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:underline"
              aria-label="Abhishek's X (Twitter)"
            >
              X
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/abhishek__kr.__/?hl=en"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:underline"
              aria-label="Abhishek's Instagram"
            >
              Instagram
            </a>
          </li>

          <li>
            <a
              href="/Abhishek.pdf"
              download
              className="hover:underline"
              aria-label="Download Abhishek's resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
