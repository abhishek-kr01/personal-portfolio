// import { assets, infoList, toolsData } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";
// import { motion } from "motion/react";

// const About = ({ isDarkMode }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id="about"
//       className="w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-20"
//     >
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="text-center mb-2 text-lg font-Ovo"
//       >
//         Introduction
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo"
//       >
//         About me
//       </motion.h2>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.7 }}
//         className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 my-20"
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="w-64 sm:w-80 lg:w-96 rounded-3xl max-w-none"
//         >
//           <Image
//             src={assets.user_image}
//             alt="user"
//             className="w-full rounded-3xl"
//           />
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.7 }}
//           className="flex-1"
//         >
//           <p>
//             I am a passionate Full Stack Developer with a strong foundation in
//             the <strong>MERN Stack</strong> and <strong>Next.js</strong>, and a
//             deep interest in building modern, scalable, and user-focused web
//             applications. With hands-on experience in both frontend and backend
//             development, I love turning ideas into real products using
//             technologies like <strong>React</strong>, <strong>Node.js</strong>,{" "}
//             <strong>MongoDB</strong>, <strong>JavaScript</strong>,{" "}
//             <strong>TypeScript</strong>, <strong>Python</strong>, and{" "}
//             <strong>Java</strong>.
//           </p>
//           <p>
//             I’ve built and contributed to several full-stack applications with
//             clean architecture, RESTful API integration, and responsive design.
//             You can explore my work on GitHub:
//             <a
//               href="https://github.com/abhishek-kr01"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               here
//             </a>
//             .
//           </p>
//           <p>
//             Driven by curiosity and a problem-solving mindset, I enjoy
//             collaborating with teams, continuously learning, and crafting
//             applications that are not only functional but also meaningful.
//           </p>

//           <motion.ul
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto"
//           >
//             {infoList.map(({ icon, iconDark, title, description }, index) => (
//               <motion.li
//                 whileHover={{ scale: 1.05 }}
//                 className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
//                 key={index}
//               >
//                 <Image
//                   className="w-7 mt-3"
//                   src={isDarkMode ? iconDark : icon}
//                   alt={title}
//                 />
//                 <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
//                   {title}
//                 </h3>
//                 <p className="text-gray-600 text-sm dark:text-white/80">
//                   {description}
//                 </p>
//               </motion.li>
//             ))}
//           </motion.ul>

//           <motion.h4
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.8, duration: 0.5 }}
//             className="my-6 text-gray-700 font-Ovo dark:text-white/80"
//           >
//             Tools I use
//           </motion.h4>

//           <motion.ul
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.9, duration: 0.6 }}
//             className="flex flex-wrap gap-3 justify-center"
//           >
//             {toolsData.map((tool, index) => (
//               <motion.li
//                 whileHover={{ scale: 1.05 }}
//                 className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
//                 key={index}
//               >
//                 <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
//               </motion.li>
//             ))}
//           </motion.ul>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default About;
// // 


// import { assets, infoList, toolsData } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";
// import { motion } from "motion/react";

// const About = ({ isDarkMode }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id="about"
//       className="w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-20"
//     >
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="text-center mb-2 text-lg font-Ovo"
//       >
//         Introduction
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo"
//       >
//         About me
//       </motion.h2>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.7 }}
//         className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 my-20"
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="w-64 sm:w-80 lg:w-96 rounded-3xl max-w-none"
//         >
//           <Image
//             src={assets.user_image}
//             alt="user"
//             className="w-full rounded-3xl"
//           />
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.7 }}
//           className="flex-1"
//         >
//           <p>
//             I’m a backend-focused Full-Stack Developer skilled in the 
//             <strong> MERN stack</strong> and experienced in 
//             <strong> Java Spring Boot</strong>, <strong>Hibernate</strong>, 
//             <strong> Microservices</strong>, and <strong> Spring AI</strong>. 
//             I build secure, scalable REST APIs (JWT/OAuth2) and design optimized 
//             databases with <strong>MySQL</strong>, <strong>PostgreSQL</strong>, 
//             and <strong>MongoDB</strong>.
//           </p>

//           <p className="mt-4">
//             My projects follow clean architecture and CI/CD-friendly practices 
//             using Docker and Git. I enjoy solving backend challenges, improving 
//             performance, and creating real-world, production-ready applications.  
//             <a
//               href="https://github.com/abhishek-kr01"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="ml-1 underline"
//             >
//               View my work
//             </a>
//             .
//           </p>

//           <p className="mt-4">
//             I enjoy solving backend challenges, optimizing performance, and building systems that deliver value. I’m always
//             open to collaborating on backend-heavy or full-stack roles where I can contribute and continue growing.
//           </p>

//           <motion.ul
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto"
//           >
//             {infoList.map(({ icon, iconDark, title, description }, index) => (
//               <motion.li
//                 whileHover={{ scale: 1.05 }}
//                 className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
//                 key={index}
//               >
//                 <Image
//                   className="w-7 mt-3"
//                   src={isDarkMode ? iconDark : icon}
//                   alt={title}
//                 />
//                 <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
//                   {title}
//                 </h3>
//                 <p className="text-gray-600 text-sm dark:text-white/80">
//                   {description}
//                 </p>
//               </motion.li>
//             ))}
//           </motion.ul>

//           <motion.h4
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.8, duration: 0.5 }}
//             className="my-6 text-gray-700 font-Ovo dark:text-white/80"
//           >
//             Tools I use
//           </motion.h4>

//           <motion.ul
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.9, duration: 0.6 }}
//             className="flex flex-wrap gap-3 justify-center"
//           >
//             {toolsData.map((tool, index) => (
//               <motion.li
//                 whileHover={{ scale: 1.05 }}
//                 className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
//                 key={index}
//               >
//                 <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
//               </motion.li>
//             ))}
//           </motion.ul>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default About;


import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 lg:w-96 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="Abhishek Kumar"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex-1"
        >
          <p>
            I’m a <strong>Full Stack MERN Developer</strong> focused on building
            modern, scalable, and production-ready web applications. I work
            across the frontend and backend using{" "}
            <strong>React</strong>, <strong>Next.js</strong>,{" "}
            <strong>Node.js</strong>, and <strong>Express</strong>, with a strong
            emphasis on clean architecture and maintainable code.
          </p>

          <p className="mt-4">
            I also design and integrate{" "}
            <strong>AI & automation features</strong> using{" "}
            <strong>Python</strong> and <strong>FastAPI</strong>, enabling
            AI-powered content generation, chatbots, and intelligent workflows
            that solve real-world problems.
          </p>

          <p className="mt-4">
            I care deeply about performance, security, and user experience. My
            projects follow professional development practices, including Git
            version control, Docker-friendly setups, and cloud-ready deployment
            workflows.{" "}
            <a
              href="https://github.com/abhishek-kr01"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View my work
            </a>
            .
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto mt-10"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image
                  className="w-7 mt-3"
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I Use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
