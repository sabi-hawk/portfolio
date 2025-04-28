"use client";

import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <>
      <Navbar />
      <section className="relative bg-[linear-gradient(to_right,#f5f5f5cc,#f5f5f5cc),url('/assets/svg/common-bg.svg')] bg-cover bg-center">
        <div className="py-[25rem] max-w-[90rem] w-[92%] mx-auto md:py-[19rem]">
          <h1 className="text-[6rem] uppercase tracking-[3px] text-center text-[#111] font-[800] md:text-[4.5rem]">
            EduNexus Educational Platform
          </h1>
          <div className="mt-[3rem] mx-auto max-w-[80rem]">
            <p className="text-[2.2rem] text-[#333] text-center w-full leading-[1.6] md:text-[2rem]">
              A complete, ready-to-launch educational SaaS with customizable Student, Teacher, and Admin portals. Institutions can select only the features they need, set up their own branded system in minutes, and launch a professional, scalable platform without custom development.
            </p>
          </div>
          <div className="mt-[5rem] text-center">
            <a href="#" className="bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-[700] rounded-[5px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] px-[8rem] py-[1.5rem] text-[2rem]" target="_blank" rel="noreferrer">
              Project Link
            </a>
          </div>
        </div>
      </section>
      <section className="py-[8rem]">
        <div className="max-w-[90rem] mx-auto">
          <div className="w-full mb-[6rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
            <img src="/screenshots/edu-nexus-1.png" alt="EduNexus Screenshot 1" className="w-full rounded-lg" />
            <img src="/screenshots/edu-nexus-2.png" alt="EduNexus Screenshot 2" className="w-full rounded-lg" />
            <img src="/screenshots/edu-nexus-3.png" alt="EduNexus Screenshot 3" className="w-full rounded-lg" />
            <img src="/screenshots/edu-nexus-4.png" alt="EduNexus Screenshot 4" className="w-full rounded-lg" />
          </div>
          <div className="w-full max-w-[70rem] mx-auto">
            <div className="mb-[7rem]">
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                Project Overview
              </h2>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                EduNexus offers a complete, ready-to-launch educational solution featuring three customizable portals: Student, Teacher, and Admin. Users can easily purchase the portals they need and select only the features relevant to their institution, keeping the system lean, efficient, and cost-effective.
              </p>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                Designed for maximum flexibility and ease of use, the platform allows anyone to set up their own branded educational portal within minutes — no need for expensive custom development or contractors. Institutions simply provide their name, logo, primary and secondary colors, and choose their desired portals and features.
              </p>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                Whether you&apos;re setting up for a school, academy, or training center, this platform empowers you to launch a professional, fully functional system quickly and effortlessly, perfectly tailored to your needs.
              </p>
              <h3 className="font-[700] text-[2rem] mb-[1.5rem]">Key Features:</h3>
              <ul className="list-disc ml-[2rem] mb-[2rem] text-[1.8rem] leading-[1.7] text-[#666]">
                <li>Customizable Student, Teacher, and Admin portals</li>
                <li>Feature selection for lean, efficient systems</li>
                <li>Branded setup in minutes (name, logo, colors)</li>
                <li>Role-based access and permissions</li>
                <li>Course management and scheduling</li>
                <li>Assignment and grading tools</li>
                <li>Attendance tracking</li>
                <li>Communication tools (announcements, messaging)</li>
                <li>Analytics and reporting dashboards</li>
                <li>Secure authentication (JWT, OAuth)</li>
                <li>Cloud hosting and CI/CD deployment</li>
                <li>Payment integration for portal purchases</li>
                <li>Scalable, multi-tenant architecture</li>
              </ul>
            </div>
            <div className="mb-[7rem]">
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                Tools Used
              </h2>
              <div className="flex flex-wrap">
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Next.js</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Nest.js</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">PostgreSQL</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Ant Design</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Docker</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">REST APIs</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">CI/CD</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Cloud Hosting</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">JWT Auth</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">OAuth</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Multi-Tenant</div>
              </div>
            </div>
            <div>
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                See Live
              </h2>
              <a
                href="#"
                className="inline-block mr-[2rem] bg-[#7843E9] text-white uppercase tracking-[1px] font-[700] rounded-[5px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] px-[5rem] py-[1.5rem] text-[1.6rem] md:w-[70%] md:mr-0 md:mb-[2rem] md:text-center"
                target="_blank"
                rel="noreferrer"
              >
                Project Link
              </a>
              <Link href="/" className="inline-block text-[#111] bg-white border-2 border-[#7843E9] uppercase tracking-[1px] font-[700] rounded-[5px] transition-transform hover:-translate-y-[3px] px-[calc(5rem-2px)] py-[calc(1.5rem-2px)] text-[1.6rem] md:w-[70%] md:text-center">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
} 