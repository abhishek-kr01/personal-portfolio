// import { assets, workData } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";

// const Work = ({ isDarkMode }) => {
//   return (
//     <motion.div
//       id="work"
//       className="w-full px-[5%] py-10 scroll-mt-20"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <motion.h4
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//         className="text-center mb-2 text-lg font-Ovo"
//       >
//         My portfolio
//       </motion.h4>
//       <motion.h2
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.5 }}
//         className="text-center text-5xl font-Ovo"
//       >
//         My latest work
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.7, duration: 0.5 }}
//         className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
//       >
//         Here are some of my latest projects, where I combine technology and
//         innovation to build efficient, user-friendly solutions. From frontend
//         design to backend development, I focus on delivering high-quality,
//         scalable applications. Explore my work to see how I turn ideas into
//         reality!
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.9, duration: 0.6 }}
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 dark:text-black"
//       >
//         {workData.map((project, index) => (
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             key={index}
//             className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
//             style={{ backgroundImage: `url(${project.bgImage})` }}
//           >
//             <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
//               <div>
//                 <h2 className="font-semibold">{project.title}</h2>
//                 <p className="text-sm text-gray-700">{project.description}</p>
//               </div>
//               <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
//                 <a target="_blank" href={project.link}>
//                   <Image
//                     src={assets.send_icon}
//                     alt="send icon"
//                     className="w-5"
//                   />
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.a
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 1.1, duration: 0.5 }}
//         href=""
//         className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
//       >
//         Show more{" "}
//         <Image
//           src={
//             isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
//           }
//           alt="Right arrow"
//           className="w-4"
//         />
//       </motion.a>
//     </motion.div>
//   );
// };

// export default Work;



// import { assets, workData } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";

// const Work = ({ isDarkMode }) => {
//   return (
//     <motion.div
//       id="work"
//       className="w-full px-[5%] py-10 scroll-mt-20"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <motion.h4
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//         className="text-center mb-2 text-lg font-Ovo"
//       >
//         My portfolio
//       </motion.h4>

//       <motion.h2
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.5 }}
//         className="text-center text-5xl font-Ovo"
//       >
//         Selected projects
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.7, duration: 0.5 }}
//         className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base"
//       >
//         A selection of projects that showcase backend-first systems (APIs,
//         authentication, microservices and Spring Boot) alongside full-stack apps
//         built with React/Next.js. Check the project links to see architecture,
//         code, and deployment details.
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.9, duration: 0.6 }}
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 dark:text-black"
//       >
//         {workData.map((project, index) => (
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             key={index}
//             className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
//             style={{ backgroundImage: `url(${project.bgImage})` }}
//           >
//             <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
//               <div>
//                 <h2 className="font-semibold">{project.title}</h2>
//                 <p className="text-sm text-gray-700">{project.description}</p>
//               </div>
//               <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
//                 <a target="_blank" rel="noreferrer" href={project.link}>
//                   <Image
//                     src={assets.send_icon}
//                     alt="send icon"
//                     className="w-5"
//                   />
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.a
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 1.1, duration: 0.5 }}
//         href=""
//         className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
//       >
//         View more projects{" "}
//         <Image
//           src={
//             isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
//           }
//           alt="Right arrow"
//           className="w-4"
//         />
//       </motion.a>
//     </motion.div>
//   );
// };

// export default Work;


import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      id="work"
      className="w-full px-[5%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Work
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Selected Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base"
      >
        A selection of real-world projects showcasing full-stack web
        applications built with <strong>React</strong>,{" "}
        <strong>Next.js</strong>, <strong>Node.js</strong>, and{" "}
        <strong>MongoDB</strong>, along with <strong>AI-powered features</strong>{" "}
        and secure backend APIs. Each project focuses on clean architecture,
        scalability, and production-ready implementation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">
                  {project.description}
                </p>
              </div>

              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.link}
                  aria-label={`View ${project.title}`}
                >
                  <Image
                    src={assets.send_icon}
                    alt="Project link"
                    className="w-5"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="https://github.com/abhishek-kr01"
        target="_blank"
        rel="noreferrer"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        View more projects
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
