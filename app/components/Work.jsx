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
//         Projects
//       </motion.h4>

//       <motion.h2
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.5 }}
//         className="text-center text-5xl font-Ovo"
//       >
//         Featured Projects
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.7, duration: 0.5 }}
//         className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base"
//       >
//         A collection of <strong>real-world backend, full-stack, and AI-powered projects</strong> focused on{" "}
//         <strong>scalability, performance, and modern application architecture</strong>.
//         These projects demonstrate my ability to build reliable backend systems,
//         develop responsive user experiences, and integrate <strong>AI-powered solutions</strong>.
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
//             <a
//               target="_blank"
//               rel="noreferrer"
//               href={project.link}
//               aria-label={`View ${project.title}`}
//               className="block"
//             >
//               <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">

//                 <div>
//                   <h2 className="font-semibold">{project.title}</h2>
//                   <p className="text-sm text-gray-700">
//                     {project.description}
//                   </p>
//                 </div>

//                 <div className="border rounded-full border-black w-12 h-12 flex items-center justify-center shadow-[2px_2px_0_#000]">
//                   <Image
//                     src={assets.send_icon}
//                     alt="Project link"
//                     className="w-4"
//                   />
//                 </div>

//               </div>
//             </a>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.a
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 1.1, duration: 0.5 }}
//         href="https://github.com/abhishek-kr01"
//         target="_blank"
//         rel="noreferrer"
//         className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
//       >
//         View more projects
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
    <motion.section
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
        Projects
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-Ovo"
      >
        Featured Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base"
      >
        A collection of <strong>real-world backend, full-stack, and AI-powered projects</strong> focused on{" "}
        <strong>scalability, performance, and modern application architecture</strong>.
        These projects demonstrate my ability to build reliable backend systems,
        develop responsive user experiences, and integrate <strong>AI-powered solutions</strong>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="aspect-square bg-cover bg-center rounded-xl relative overflow-hidden group shadow-md"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition duration-300" />

            <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 p-4">
              <h3 className="font-semibold text-sm sm:text-base text-black dark:text-white">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 mt-1 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-3 py-1 rounded-full bg-black text-white hover:opacity-90 transition"
                  >
                    Live Demo
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                )}
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
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700 rounded-full py-3 px-10 mx-auto my-16 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Explore GitHub

        <Image
          src={
            isDarkMode
              ? assets.right_arrow_bold_dark
              : assets.right_arrow_bold
          }
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.section>

);
};

export default Work;
