import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering",
    location: "Bahir Dar, ET",
    description:
      "I graduated after 5 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Web Developer Intern",
    location: "Bahir Dar, ET",
    description:
      "I worked as a web developer intern for 4 months. I also skilled with Django, Python.",
    icon: React.createElement(CgWorkAlt),
    date: "May, 2021 - Sep, 2021",
  },
  {
    title: "Junior Full-Stack Developer",
    location: "Addis Ababa, ET",
    description:
      "I'm now a Junior Full-Stack Developer working on Creavers Service PLC. My stack includes Angular, React, Material UI, TypeScript, Tailwind, NodeJs, MySQL and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Hospital Management System",
    description:
      "I worked as a full-stack developer on this startup project for 6 months. It optimize the administrative, operational, and clinical processes within a healthcare facility.",
    tags: ["Angular", "Typescript", "MSSQL", "Bootstrap", "ASP.Net"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Food Delivery App",
    description:
      "Food delivery app for order online. I was the mobile app developer. It has features like ordering, payment and designing.",
    tags: ["Flutter", "Dart", "API"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Restaurant Website",
    description:
      "It serves as an online hub for showcasing menus, reservations, and information to engage customers and enhance their dining experience.",
    tags: ["Wordpress", "Elementor", "MetForm", "Slider Revolution"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Flutter",
  "Wordpress",
] as const;
