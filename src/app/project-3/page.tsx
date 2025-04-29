"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <>
      <Navbar />
      <section className="relative bg-[linear-gradient(to_right,#f5f5f5cc,#f5f5f5cc),url('/assets/svg/common-bg.svg')] bg-cover bg-center">
        <div className="py-[25rem] max-w-[90rem] w-[92%] mx-auto md:py-[19rem]">
          <h1 className="text-[6rem] uppercase tracking-[3px] text-center text-[#111] font-[800] md:text-[4.5rem]">
            ATOM (Automated Task & Operations Management)
          </h1>
          <div className="mt-[3rem] mx-auto max-w-[80rem]">
            <p className="text-[2.2rem] text-[#333] text-center w-full leading-[1.6] md:text-[2rem]">
              A unified web platform for client engagement, growth strategies,
              and business management. ATOM integrates lead generation, email
              tools, real-time chat, AI, analytics, and more into a single
              user-friendly solution.
            </p>
          </div>
          <div className="mt-[5rem] text-center">
            <a
              href="https://github.com/sabi-hawk/blast"
              className="bg-[#7843E9] text-[#ffffff] uppercase tracking-[1px] inline-block font-[700] rounded-[5px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] px-[8rem] py-[1.5rem] text-[2rem]"
              target="_blank"
              rel="noreferrer"
            >
              Project Link
            </a>
          </div>
        </div>
      </section>
      <section className="py-[8rem]">
        <div className="max-w-[90rem] mx-auto">
          <div className="w-full mb-[6rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
            <img
              src="/screenshots/atoms-1.png"
              alt="ATOM Screenshot 1"
              className="w-full rounded-lg"
            />
            <img
              src="/screenshots/atoms-2.png"
              alt="ATOM Screenshot 2"
              className="w-full rounded-lg"
            />
            <img
              src="/screenshots/atoms-3.png"
              alt="ATOM Screenshot 3"
              className="w-full rounded-lg"
            />
            <img
              src="/screenshots/atoms-4.png"
              alt="ATOM Screenshot 4"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full max-w-[70rem] mx-auto">
            <div className="mb-[7rem]">
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                Project Overview
              </h2>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                ATOM (Automated Task & Operations Management) is a revolutionary
                web-application platform designed to streamline client
                engagement, enhance growth strategies, and empower business
                developers, digital marketers, freelancers, and business owners.
                By unifying essential business tools, ATOM improves efficiency,
                reduces operational costs, and fosters business growth.
              </p>
              <h3 className="font-[700] text-[2rem] mb-[1.5rem]">
                Project Goals:
              </h3>
              <ul className="list-disc ml-[2rem] mb-[2rem] text-[1.8rem] leading-[1.7] text-[#666]">
                <li>Streamline client outreach and engagement processes.</li>
                <li>
                  Enhance growth strategies through integrated marketing tools.
                </li>
                <li>
                  Provide a user-friendly platform that combines multiple
                  business functions.
                </li>
                <li>
                  Increase operational efficiency and reduce costs for users.
                </li>
                <li>
                  Foster business development for digital marketers,
                  freelancers, and business owners.
                </li>
              </ul>
              <h3 className="font-[700] text-[2rem] mb-[1.5rem]">
                Scope of Work:
              </h3>
              <ul className="list-disc ml-[2rem] mb-[2rem] text-[1.8rem] leading-[1.7] text-[#666]">
                <li>
                  Lead Generation Utility: Niche-based lead generation
                  capabilities.
                </li>
                <li>
                  Mail Composer (Drag n Drop): User-friendly email design tool
                  (Unlayer).
                </li>
                <li>
                  Bulk Email Sender: Efficient mass email communication
                  (Mailtrap).
                </li>
                <li>Mail Tracking Feature: Campaign tracking features.</li>
                <li>
                  Dedicated Chat Rooms: Real-time client interaction
                  (Liveblocks).
                </li>
                <li>Leads Import: Import existing leads.</li>
                <li>Cloud Space: Virtual storage solutions.</li>
                <li>Text Editor: Built-in text editor.</li>
                <li>AI-Based Proposal Writer: AI-powered proposal creation.</li>
                <li>Todo List: Task management features.</li>
                <li>Embedded AI Search: AI-powered search tool.</li>
                <li>Portfolio: Showcase user work.</li>
                <li>
                  Analytics: Comprehensive dashboard for campaign metrics.
                </li>
                <li>
                  Subscription Plans: Tiered plans for different user needs.
                </li>
                <li>Payment Method Integration: Secure payment gateways.</li>
              </ul>
            </div>
            <div className="mb-[7rem]">
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                Tools Used
              </h2>
              <div className="flex flex-wrap">
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  React.js
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  TypeScript
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Tailwind CSS
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Node.js
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Express.js
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  MongoDB
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Bootstrap
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Ant Design
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Liveblocks
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Mailtrap
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Unlayer
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Redux
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Zustand
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                See Live
              </h2>
              <a
                href="https://github.com/sabi-hawk/blast"
                className="inline-block mr-[2rem] bg-[#7843E9] text-[#ffffff] uppercase tracking-[1px] font-[700] rounded-[5px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] px-[5rem] py-[1.5rem] text-[1.6rem] md:w-[70%] md:mr-0 md:mb-[2rem] md:text-center"
                target="_blank"
                rel="noreferrer"
              >
                Project Link
              </a>
              <Link
                href="/"
                className="inline-block text-[#111] bg-white border-2 border-[#7843E9] uppercase tracking-[1px] font-[700] rounded-[5px] transition-transform hover:-translate-y-[3px] px-[calc(5rem-2px)] py-[calc(1.5rem-2px)] text-[1.6rem] md:w-[70%] md:text-center"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 