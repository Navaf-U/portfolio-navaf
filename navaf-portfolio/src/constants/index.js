
import {
  backend,
  mobile,
  web,
  css,
  socketio,
  project2,
  project3,
  express,
  mui,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  nextjs,
  redis,
  project1,
} from '../assets'

import anasPng from "../assets/anas.jpg";
import sahadPng from "../assets/sahad.jpg";
import nishajPng from "../assets/nishaj.jpg";

import BridgeonLogo from "../assets/company/bridgeonLogo.jpg";


export const navLinks = [


  {
    id: "about",
    title: "About",

  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Socket.io",
    icon: socketio,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Bridgeon Solutions",
    icon: BridgeonLogo,
    iconBg: "#383E56",
    date: "April 2024 - May 2025",
    points: [
      "Built scalable web apps using the MERN stack for clients in logistics and education sectors.",
      "Integrated third-party APIs and payment gateways to enhance product functionality.",
      "Led the development of an internal admin dashboard for managing customer and order data.",
      "Collaborated in an Agile environment, participating in daily stand-ups and sprint planning.",
      "Optimized MongoDB queries and implemented caching for improved backend performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Navaf proved me wrong.",
    name: "Anas",
    designation: "Team Lead",
    company: "Libay",
    image: anasPng,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Navaf does.",
    name: "Nishaj",
    designation: "Full stack Developer",
    company: "Ontoborn Technologies LLC",
    image: nishajPng,
  },
  {
    testimonial:
      "Navaf is a highly skilled developer with a strong understanding of both frontend and backend technologies. His ability to solve complex challenges is impressive.",
    name: "Sahad",
    designation: "Team Lead",
    company: "VorreiX",
    image: sahadPng,
  },
];


const projects = [
  {
    name: "SCOPEO",
    description:
      "Scopeo is a powerful monitoring library designed for developers to track real-time server performance and uptime. It provides easy-to-implement tools for monitoring server health, performance metrics, and real-time alerts, enabling developers to maintain optimal server performance with minimal overhead.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Node Js",
        color: "white-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Redis",
        color: "green-text-gradient",
      },

    ],
    image: project1,
    source_code_link: "https://github.com/scopeo-tech/scopeo-monitor",
  },
  {
    name: "TikTok Clone",
    description:
      "TikTok Clone is a social media platform designed for seamless video sharing and discovery. Users can upload, view, and interact with short videos. Featuring real-time interactions, personalized feeds, and a smooth user experience, it's the go-to space for entertainment and creativity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Socket io",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Navaf-U/tiktok-clone",
  },
  {
    name: "StepPrime-Ecommerce",
    description:
      "Step Prime is your go-to online store for premium shoes across various styles and brands. Whether you're looking for casual wear, formal shoes, or sports footwear, Step Prime offers a seamless shopping experience, ensuring quality, comfort, and style—all in one place.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Navaf-U/e-commerce-webapp",
  },
];

export { services, technologies, experiences, testimonials, projects };
