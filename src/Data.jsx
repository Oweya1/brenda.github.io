import React, { useState } from 'react';
import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";


export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Design",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Development",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "AI",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Data Science",
  },
];

// your-link-data-file.js
export const navLinks = [
  {
    id: 1,
    href: "/",
    link: "Home",
  },
  {
    id: 2,
    href: "/pages",
    link: "About",
  },
  {
    id: 3,
    href: "/courses",
    link: "Courses",
  },
  {
    id: 4,
    href: "/jobs",
    link: "Jobs",
  },
  {
    id: 5,
    href: "/hackathons",
    link: "Hackathon",
  },
  {
    id: 6,
    href: "/contact",
    link: "Contact",
  },
];



export const accordions = [
  {
    id: 1,
    title: "What is Skillex?",
  },
  {
    id: 2,
    title: "What can I learn from Skillex?",
  },
  {
    id: 3,
    title: "Can I teach on Skillex?",
  },
  {
    id: 4,
    title: "What is included in my Skillex membership?",
  },
];
