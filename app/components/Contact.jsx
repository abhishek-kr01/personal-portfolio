// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React, { useState } from "react";
// import { motion } from "motion/react";

// const Contact = () => {
//   const [result, setResult] = useState("");
//   const [sending, setSending] = useState(false);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     if (sending) return;
//     setSending(true);
//     setResult("Sending...");

//     const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
//     if (!accessKey) {
//       setResult(
//         "Contact service key missing. Please set NEXT_PUBLIC_ACCESS_KEY in your environment."
//       );
//       setSending(false);
//       return;
//     }

//     const formData = new FormData(event.target);
//     formData.append("access_key", accessKey);

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (data.success) {
//         setResult("Message sent successfully. I’ll get back to you soon!");
//         event.target.reset();
//       } else {
//         setResult(data.message || "Something went wrong. Please try again.");
//       }
//     } catch (err) {
//       setResult("Network error. Please try again later.");
//     } finally {
//       setTimeout(() => setSending(false), 800);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id="contact"
//       className="w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
//     >
//       <motion.h4
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//         className="text-center mb-2 text-lg font-Ovo"
//       >
//         Let’s Connect
//       </motion.h4>

//       <motion.h2
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.5 }}
//         className="text-center text-5xl font-Ovo"
//       >
//         Get in Touch
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.7, duration: 0.5 }}
//         className="text-center max-w-2xl mx-auto mt-5 mb-8 font-Ovo text-sm sm:text-base"
//       >
//         Have a project idea, freelance requirement, or hiring opportunity?
//         I’m open to working on <strong>full-stack web applications</strong> and
//         <strong> AI-powered solutions</strong> using modern technologies.
//         <br />
//         Reach out via the form below or email me directly:
//         <br />
//         <a
//           href="mailto:abhishekmdp11@gmail.com"
//           className="underline"
//           aria-label="Email Abhishek"
//         >
//           abhishekmdp11@gmail.com
//         </a>{" "}
//         ·{" "}
//         <a
//           href="/Abhishek.pdf"
//           className="underline"
//           aria-label="Download resume"
//           download
//         >
//           Download Resume
//         </a>
//       </motion.p>

//       <motion.form
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.8, duration: 0.5 }}
//         onSubmit={onSubmit}
//         className="max-w-2xl mx-auto"
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 mb-6">
//           <motion.input
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.7, duration: 0.6 }}
//             className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
//             type="text"
//             placeholder="Your name"
//             required
//             name="name"
//           />

//           <motion.input
//             initial={{ x: 50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//             className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
//             type="email"
//             placeholder="Your email"
//             required
//             name="email"
//           />
//         </div>

//         <motion.textarea
//           initial={{ y: 100, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.9, duration: 0.6 }}
//           className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
//           rows="6"
//           placeholder="Tell me briefly about your project or requirement"
//           required
//           name="message"
//         />

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//           className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto ${
//             sending
//               ? "bg-gray-400 text-white cursor-not-allowed"
//               : "bg-black/80 text-white hover:bg-black"
//           } duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover`}
//           type="submit"
//           disabled={sending}
//         >
//           {sending ? "Sending..." : "Submit"}
//           <Image src={assets.right_arrow_white} alt="" className="w-4" />
//         </motion.button>

//         <p className="mt-4 text-center" role="status">
//           {result}
//         </p>
//       </motion.form>
//     </motion.div>
//   );
// };

// export default Contact;


"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;

    setSending(true);
    setResult("Sending...");

    const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

    if (!accessKey) {
      setResult("Contact service not configured properly.");
      setSending(false);
      return;
    }

    const formData = new FormData(event.target);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully. I’ll get back to you soon.");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch {
      setResult("Network error. Please try again later.");
    } finally {
      setTimeout(() => setSending(false), 800);
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-8 lg:px-[12%] py-12 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
      aria-label="Contact section"
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
          Let’s Connect
        </h4>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-Ovo">
          Get in Touch
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-8 text-sm sm:text-base text-gray-700 dark:text-white/80"
      >
        I’m currently open to <strong>Full Stack / Software Engineer roles</strong>.
        If you’re looking for someone who can build <strong>scalable web applications</strong>
        and integrate <strong>AI-powered features</strong>, feel free to reach out.
        <br /><br />
        Email:{" "}
        <a
          href="mailto:abhishekmdp11@gmail.com"
          className="underline font-medium"
          aria-label="Email Abhishek"
        >
          abhishekmdp11@gmail.com
        </a>{" "}
        ·{" "}
        <a
          href="/Abhishek.pdf"
          className="underline font-medium"
          aria-label="Download resume"
          download
        >
          Download Resume
        </a>
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <input
            className="p-3 border border-gray-300 rounded-md outline-none bg-white dark:bg-darkHover/30 dark:border-white/70"
            type="text"
            placeholder="Your Name"
            required
            name="name"
          />

          <input
            className="p-3 border border-gray-300 rounded-md outline-none bg-white dark:bg-darkHover/30 dark:border-white/70"
            type="email"
            placeholder="Your Email"
            required
            name="email"
          />
        </div>

        <textarea
          className="w-full p-4 border border-gray-300 rounded-md outline-none bg-white mb-6 dark:bg-darkHover/30 dark:border-white/70"
          rows="6"
          placeholder="Tell me about your opportunity or project..."
          required
          name="message"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          disabled={sending}
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto ${
                      sending
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-black/80 text-white hover:bg-black"
                    } duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover`}
                    type="submit"
        >
          {sending ? "Sending..." : "Send Message"}
          <Image
            src={assets.right_arrow_white}
            alt="Send icon"
            className="w-4"
          />
        </motion.button>

        <p className="mt-4 text-center text-sm" role="status">
          {result}
        </p>
      </motion.form>
    </section>
  );
};

export default Contact;