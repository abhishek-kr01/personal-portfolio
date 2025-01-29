import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import nodejs from "./nodejs.png";
import react from "./react.png";
import mysql from "./mysql.png";
import github from "./github.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import front from "./front.png";
import backend from "./backend.png";
import api from "./api.png";
import full_stack from "./full_stack.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  api,
  backend,
  front,
  full_stack,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  github,
  react,
  nodejs,
  mysql,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Full Stack Project",
    description: "A Secure Next.js Authentication System",
    bgImage: "/work-1.png",
    link: "https://github.com/abhishek-kr01/auth_nextjs",
  },
  {
    title: "Currency Converter",
    description: "Real-time currency conversion with React.",
    bgImage: "/work-2.png",
    link: "https://github.com/abhishek-kr01/CurrencyX-",
  },
  {
    title: "Weather App",
    description: "Real-time weather app with error handling.",
    bgImage: "/work-3.png",
    link: "https://github.com/abhishek-kr01/Weather_app_-Basic-",
  },
  {
    title: "Face Attendance",
    description: "Real-time face recognition for attendance.",
    bgImage: "/work-4.png",
    link: "https://github.com/abhishek-kr01/Face_Recognition",
  },
];

export const serviceData = [
  {
    icon: assets.full_stack,
    title: "Full-Stack Web Development",
    description:
      "I build scalable and responsive web applications using React.js, Node.js, Express.js, and MongoDB.",
    link: "",
  },
  {
    icon: assets.front,
    title: "Frontend Development",
    description:
      "Creating visually appealing and user-friendly interfaces with HTML, CSS, Tailwind CSS, and React.js.",
    link: "",
  },
  {
    icon: assets.backend,
    title: "Backend Development",
    description:
      "Developing robust server-side applications and APIs with Node.js, Express.js, and MongoDB to ensure seamless performance.",
    link: "",
  },
  {
    icon: assets.api,
    title: "API Integration & Database Management",
    description:
      "Integrating third-party services and building RESTful APIs, alongside managing data with SQL and MongoDB.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Tech Stack",
    description:
      "C, Java, JavaScript, Python, OOPs, React.js, Node.js, Express.js, Tailwind CSS, SQL, MongoDB",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: (
      <>
        Masters in Computer Application <br />
        Cochin University of Science and Technology (2023 - 2025) <br />
        GPA: 7.58 <br />
        Bachelors in Computer Application <br />
        B N Mandal University Madhepura (2019 - 2022) <br />
        GPA: 8.24
      </>
    ),
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: (
      <>
        A Secure Next.js Authentication System. <br />
        <br />
        Real-time currency conversion with React. <br />
        <br />
        Real-time weather app with error handling. <br />
        <br />
        ...and more!
      </>
    ),
  },
];

export const toolsData = [
  assets.vscode,
  assets.git,
  assets.github,
  assets.figma,
  assets.nodejs,
  assets.react,
  assets.mongodb,
  assets.mysql,
  assets.firebase,
];
