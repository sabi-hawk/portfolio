"use client";

import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { SocialSidebar } from "@/components/social-sidebar";

export default function Home() {
  return (
    <div className="relative pt-20">
      {/* Fixed Social Sidebar */}
      <SocialSidebar />

      {/* Main Content */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
