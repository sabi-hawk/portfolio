"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  repoLink: string;
  demoLink: string;
  technologies: string[];
}

export function ProjectCard({
  title,
  description,
  images,
  repoLink,
  demoLink,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="grid md:grid-cols-12 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="md:col-span-7 relative aspect-[16/10] rounded-xl overflow-hidden"
      >
        <Image
          src={images[0]}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button variant="outline" size="lg" className="text-white border-white hover:text-white" asChild>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="md:col-span-5"
      >
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Button className="button-primary" asChild>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              Case Study
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
} 