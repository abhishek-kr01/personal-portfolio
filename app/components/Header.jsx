import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Abhishek Kumar"
          className="rounded-full w-32 sm:w-48"
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl sm:text-2xl md:text-3xl mb-3 font-Ovo"
      >
        Hi! I’m Abhishek Kumar
        <Image src={assets.hand_icon} alt="Hand Icon" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-5xl lg:text-[47px] font-Ovo"
      >
        Full Stack Software Engineer <br />
        <span className="text-gray-600 dark:text-white/70 text-2xl sm:text-3xl lg:text-[37px] font-Ovo">
          MERN | Next.js | Backend APIs | AI Automation
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-sm sm:text-base"
      >
        I build modern, scalable, and production-ready web applications using{" "}
        <strong>React</strong>, <strong>Next.js</strong>,{" "}
        <strong>Node.js</strong>, and <strong>Express</strong>. I also integrate{" "}
        <strong>AI-powered automation</strong> using{" "}
        <strong>Python</strong> and <strong>FastAPI</strong>, leveraging{" "}
        <strong>OpenAI</strong> and <strong>Gemini APIs</strong> to build features such as chatbots,
        content generation, and automated workflows.
      </motion.p>


      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Right Arrow"
            className="w-4"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Abhishek.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
}

export default Header;
