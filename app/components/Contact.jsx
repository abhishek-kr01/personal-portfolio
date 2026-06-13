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
  setSending(false);
}
};

return ( <section
   id="contact"
   className="w-full px-4 sm:px-8 lg:px-[12%] py-12 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
 >
{/* Heading */}
<motion.div
initial={{ opacity: 0, y: -20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="text-center"
> <h4 className="text-lg mb-2 font-Ovo text-gray-600 dark:text-gray-300">
Let’s Connect </h4>

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
    className="text-center max-w-3xl mx-auto mt-5 mb-8 text-sm sm:text-base text-gray-700 dark:text-white/80"
  >
    I’m currently open to{" "}
    <strong>
      Software Engineering, Backend Engineering, and Full Stack opportunities
    </strong>.

    <br />
    <br />

    I specialize in building{" "}
    <strong>
      scalable backend systems, AI-powered applications, and production-ready
      web platforms
    </strong>.

    <br />
    <br />

    Feel free to reach out for opportunities, collaborations, or technical
    discussions.

    <br />
    <br />

    Email:{" "}
    <a
      href="mailto:abhishekmdp11@gmail.com"
      className="font-medium hover:underline"
    >
      abhishekmdp11@gmail.com
    </a>
  </motion.p>

  {/* Social Links */}
  <div className="flex flex-wrap justify-center gap-4 mb-10">
    <a
      href="https://github.com/abhishek-kr01"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 border rounded-full hover:bg-white/10 transition"
    >
      GitHub
    </a>

    <a
      href="https://linkedin.com/in/akr-abhishek-kr01"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 border rounded-full hover:bg-white/10 transition"
    >
      LinkedIn
    </a>

    <a
      href="/Abhishek.pdf"
      download
      className="px-4 py-2 border rounded-full hover:bg-white/10 transition"
    >
      Resume
    </a>
  </div>

  {/* Contact Form */}
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
        className="p-4 border border-gray-300 rounded-md outline-none bg-white dark:bg-darkHover/30 dark:border-white/70"
        type="text"
        placeholder="Your Name"
        required
        name="name"
      />

      <input
        className="p-4 border border-gray-300 rounded-md outline-none bg-white dark:bg-darkHover/30 dark:border-white/70"
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
      type="submit"
      className={`py-3 px-8 flex items-center gap-2 rounded-full mx-auto transition ${
        sending
          ? "bg-gray-400 text-white cursor-not-allowed"
          : "bg-black text-white hover:bg-black/90 dark:bg-transparent dark:border"
      }`}
    >
      {sending ? "Sending..." : "Send Message"}

      <Image
        src={assets.right_arrow_white}
        alt="Send icon"
        className="w-4"
      />
    </motion.button>

    <p
      className={`mt-4 text-center text-sm ${
        result.includes("successfully")
          ? "text-green-500"
          : result.includes("Sending")
          ? "text-yellow-500"
          : result
          ? "text-red-500"
          : ""
      }`}
    >
      {result}
    </p>
  </motion.form>
</section>
);
};

export default Contact;



// "use client";
// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

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
//       setResult("Contact service not configured properly.");
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
//         setResult("Message sent successfully. I’ll get back to you soon.");
//         event.target.reset();
//       } else {
//         setResult("Something went wrong. Please try again.");
//       }
//     } catch {
//       setResult("Network error. Please try again later.");
//     } finally {
//       setTimeout(() => setSending(false), 800);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="w-full px-4 sm:px-8 lg:px-[12%] py-12 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
//       aria-label="Contact section"
//     >
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center"
//       >
//         <h4 className="text-lg mb-2 font-Ovo text-gray-600 dark:text-gray-300">
//           Let’s Connect
//         </h4>
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-Ovo">
//           Get in Touch
//         </h2>
//       </motion.div>

//       {/* Description */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.3 }}
//         className="text-center max-w-2xl mx-auto mt-5 mb-8 text-sm sm:text-base text-gray-700 dark:text-white/80"
//       >
//         I’m currently open to <strong>Software Engineer, Backend Engineer,
//         and Full Stack Engineer opportunities</strong>.
        
//         <br />
        
//         I specialize in building <strong>scalable backend systems,
//         AI-powered applications, and production-ready web platforms</strong>.
        
//         <br />
        
//         Feel free to reach out for opportunities, collaborations, or technical discussions.
//         <br /><br />
//         Email:{" "}
//         <a
//           href="mailto:abhishekmdp11@gmail.com"
//           className="underline font-medium"
//           aria-label="Email Abhishek"
//         >
//           abhishekmdp11@gmail.com
//         </a>
//       </motion.p>

//       <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
//         <a
//           href="https://github.com/abhishek-kr01"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="underline font-medium"
//         >
//           GitHub
//         </a>
      
//         <a
//           href="https://linkedin.com/in/akr-abhishek-kr01"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="underline font-medium"
//         >
//           LinkedIn
//         </a>
      
//         <a
//           href="/Abhishek.pdf"
//           download
//           className="underline font-medium"
//         >
//           Resume
//         </a>
//       </div>

//       {/* Form */}
//       <motion.form
//         onSubmit={onSubmit}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.4 }}
//         className="max-w-2xl mx-auto"
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
//           <input
//             className="p-3 border border-gray-300 rounded-md outline-none bg-white dark:bg-darkHover/30 dark:border-white/70"
//             type="text"
//             placeholder="Your Name"
//             required
//             name="name"
//           />

//           <input
//             className="p-3 border border-gray-300 rounded-md outline-none bg-white dark:bg-darkHover/30 dark:border-white/70"
//             type="email"
//             placeholder="Your Email"
//             required
//             name="email"
//           />
//         </div>

//         <textarea
//           className="w-full p-4 border border-gray-300 rounded-md outline-none bg-white mb-6 dark:bg-darkHover/30 dark:border-white/70"
//           rows="6"
//           placeholder="Tell me about your opportunity or project..."
//           required
//           name="message"
//         />

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           disabled={sending}
//           className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto ${
//                       sending
//                         ? "bg-gray-400 text-white cursor-not-allowed"
//                         : "bg-black/80 text-white hover:bg-black"
//                     } duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover`}
//                     type="submit"
//         >
//           {sending ? "Sending..." : "Send Message"}
//           <Image
//             src={assets.right_arrow_white}
//             alt="Send icon"
//             className="w-4"
//           />
//         </motion.button>

//         <p className="mt-4 text-center text-sm" role="status">
//           {result}
//         </p>
//       </motion.form>
//     </section>
//   );
// };

// export default Contact;
