"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

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
    href: "https://youtube.com/@sabihawk",
    icon: Youtube,
    label: "YouTube",
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