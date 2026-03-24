// import { assets, serviceData } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";

// const Services = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id="services"
//       className="w-full px-4 sm:px-8 md:px-[12%] py-10 scroll-mt-20"
//     >
//       <motion.h4
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//         className="text-center mb-2 text-lg font-Ovo"
//       >
//         What I Do
//       </motion.h4>

//       <motion.h2
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.5 }}
//         className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo"
//       >
//         My Services
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.8, duration: 0.5 }}
//         className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base"
//       >
//         I help businesses and individuals build{" "}
//         <strong>modern, scalable, and production-ready web applications</strong>{" "}
//         using the <strong>MERN stack</strong> and <strong>Next.js</strong>. I also
//         design and integrate <strong>AI & automation solutions</strong> using{" "}
//         <strong>Python</strong> and <strong>FastAPI</strong>, leveraging{" "}
//         <strong>OpenAI</strong> and <strong>Gemini APIs</strong> to improve
//         efficiency, user experience, and real-world workflows.
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.9, duration: 0.6 }}
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10"
//       >
//         {serviceData.map(({ icon, title, description, link }, index) => (
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             key={index}
//             className="border border-gray-400 rounded-lg px-6 py-8 sm:px-8 sm:py-10 hover:shadow-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
//           >
//             <Image src={icon} alt={title} className="w-10 mx-auto" />
//             <h3 className="text-lg my-4 text-gray-700 dark:text-white text-center">
//               {title}
//             </h3>
//             <p className="text-sm text-gray-600 leading-5 dark:text-white/80 text-center">
//               {description}
//             </p>
//             <a
//               href={link}
//               className="flex items-center justify-center gap-2 text-sm mt-5"
//             >
//               Learn more
//               <Image src={assets.right_arrow} alt="" className="w-4" />
//             </a>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Services;



import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full px-4 sm:px-8 md:px-[12%] py-12 scroll-mt-20"
      aria-label="What I Do"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h4 className="text-lg mb-2 font-Ovo text-gray-600 dark:text-gray-300">
          What I Do
        </h4>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-Ovo">
          What I Build
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-sm sm:text-base text-gray-700 dark:text-white/80"
      >
        I build <strong>scalable, production-grade web applications</strong> using{" "}
        <strong>React, Next.js, Node.js, and TypeScript</strong>.
        I also develop <strong>AI-powered features</strong> using{" "}
        <strong>OpenAI APIs, Gemini API, and modern AI tools</strong> to enable
        automation, improve user experience, and solve real-world problems.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {serviceData.map(({ icon, title, description, link }) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={title}
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-6 py-8 hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <Image
              src={icon}
              alt={`${title} icon`}
              className="w-10 mx-auto"
            />

            <h3 className="text-lg my-4 text-gray-800 dark:text-white text-center font-semibold">
              {title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-white/80 text-center leading-relaxed">
              {description}
            </p>

            <a
              href={link}
              className="flex items-center justify-center gap-2 text-sm mt-5 font-medium hover:text-blue-500 transition"
              aria-label={`Learn more about ${title}`}
            >
              Learn more
              <Image
                src={assets.right_arrow}
                alt="Arrow icon"
                className="w-4"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;