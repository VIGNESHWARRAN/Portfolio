// src/data/config.tsx
import { Github, Linkedin, Code, Terminal, FileText, Mail } from "lucide-react";

export const siteConfig = {
  name: "Vigneshwarran S",
  title: "AI Engineer & Researcher",
  description: "Building intelligent systems with robustness and clarity. Focused on Deep Learning, Computer Vision, and Agentic AI.",
  email: "vigneshwarran0@gmail.com",
  
  // Navigation Links
  navItems: [
    { name: "Work", href: "/projects" },
    { name: "Research", href: "/research" }, // Mapped from your Leadership/Research focus
    { name: "Notes", href: "/blog" },
    { name: "Resume", href: "/resume.pdf" }, // Direct link to PDF
  ],

  // Social Links
  socials: [
    { 
      name: "GitHub", 
      href: "https://github.com/VIGNESHWARRAN", 
      icon: <Github className="w-5 h-5" /> 
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/vigneshwarran-s-82084b287/", 
      icon: <Linkedin className="w-5 h-5" /> 
    },
    { 
      name: "LeetCode", 
      href: "https://leetcode.com/u/Vigneshwarran_S/", 
      icon: <Code className="w-5 h-5" /> 
    },
    { 
      name: "CodeChef", 
      href: "https://www.codechef.com/users/vigneshwarran", 
      icon: <Terminal className="w-5 h-5" /> 
    },
  ],

  // Timeline / Experience
  timeline: [
    { 
      year: "2025", 
      title: "Incoming Software Engineer Co-Op", 
      company: "AlgoUniversity", 
      desc: "Upcoming internship focusing on backend systems and algorithmic optimization."
    },
    { 
      year: "2025", 
      title: "Research Author", 
      company: "Academic", 
      desc: "Co-authored 'Multispectral Document Binarization' (ResNet-UNet) and 'DEDA-AFCQ' (Edge Detection)."
    },
    { 
      year: "2024", 
      title: "Hackathon Winner", 
      company: "Visa & Others", 
      desc: "Developed 'Visa InsightFlow' (Agentic AI) and 'CareSight' (Healthcare AI)."
    },
  ],

  // Focus Areas
  focusAreas: [
    {
      title: "Agentic AI & LLMs",
      desc: "Building autonomous agents using LangGraph and Pathway.",
    },
    {
      title: "Computer Vision",
      desc: "ResNet-UNet architectures, CNNs, and Robot Vision (ROS 2).",
    },
    {
      title: "Distributed Systems",
      desc: "MapReduce, Docker, and Cloud-native deployments.",
    }
  ]
};