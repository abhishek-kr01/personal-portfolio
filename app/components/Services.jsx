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
//         What I Offer
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
//         I specialize in building scalable and responsive web applications using
//         React.js, Node.js, and Express.js. With expertise in frontend
//         development using modern UI frameworks and robust backend development, I
//         deliver efficient server-side solutions. I also ensure seamless API
//         integration and effective database management with SQL and MongoDB.
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
//             className="border border-gray-400 rounded-lg px-6 py-8 sm:px-8 sm:py-10 hover:shadow-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
//             key={index}
//           >
//             <Image src={icon} alt="" className="w-10 mx-auto" />
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
//               Read more{" "}
//               <Image src={assets.right_arrow} alt="" className="w-4" />
//             </a>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Services;


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
//         What I Offer
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
//         I build scalable, secure, and intelligent web applications with 
//         <strong> Java Spring Boot</strong>, <strong>Spring AI</strong>, 
//         <strong> Hibernate</strong>, and <strong>Microservices</strong>, 
//         backed by efficient databases like <strong>PostgreSQL</strong> and 
//         <strong> MongoDB</strong>. I also develop full-stack solutions using 
//         the <strong>MERN stack</strong>, ensuring clean architecture, seamless 
//         API integration, and responsive frontends built with 
//         <strong> React.js</strong> and <strong>Next.js</strong>.
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
//             className="border border-gray-400 rounded-lg px-6 py-8 sm:px-8 sm:py-10 hover:shadow-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
//             key={index}
//           >
//             <Image src={icon} alt="" className="w-10 mx-auto" />
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
//               Read more{" "}
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-4 sm:px-8 md:px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Do
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base"
      >
        I help businesses and individuals build{" "}
        <strong>modern, scalable, and production-ready web applications</strong>{" "}
        using the <strong>MERN stack</strong> and <strong>Next.js</strong>. I also
        design and integrate <strong>AI & automation solutions</strong> using{" "}
        <strong>Python</strong> and <strong>FastAPI</strong>, leveraging{" "}
        <strong>OpenAI</strong> and <strong>Gemini APIs</strong> to improve
        efficiency, user experience, and real-world workflows.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-6 py-8 sm:px-8 sm:py-10 hover:shadow-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-10 mx-auto" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white text-center">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80 text-center">
              {description}
            </p>
            <a
              href={link}
              className="flex items-center justify-center gap-2 text-sm mt-5"
            >
              Learn more
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
