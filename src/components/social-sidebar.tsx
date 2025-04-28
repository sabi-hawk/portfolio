"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    href: "https://linkedin.com/in/sabahat-atique",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/sabi-hawk",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://twitter.com/sabihawk",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://drive.google.com/file/d/1AbckdL_3nyNvT1FoZk1vqUDD7jURr3Tx/view?usp=sharing",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 4h16v16H4z" />
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M4 10h16" />
        <path d="M9 14h6" />
        <path d="M9 18h6" />
      </svg>
    ),
    label: "Resume",
  },
];

export function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed left-8 bottom-0 hidden xl:flex flex-col items-center gap-4 after:content-[''] after:w-[1px] after:h-32 after:bg-border"
    >
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={link.label}
        >
          <link.icon className="h-5 w-5" />
        </a>
      ))}
    </motion.div>
  );
} 