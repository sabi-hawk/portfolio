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
            PulseMeet Telemedicine Platform
          </h1>
          <div className="mt-[3rem] mx-auto max-w-[80rem]">
            <p className="text-[2.2rem] text-[#333] text-center w-full leading-[1.6] md:text-[2rem]">
              A comprehensive telemedicine platform with secure video calling, real-time chat, waiting rooms, provider and patient portals, appointment scheduling, pre-call device testing, and a dedicated support portal for live stats.
            </p>
          </div>
          <div className="mt-[5rem] text-center">
            <a href="#" className="bg-[#7843E9] text-[#ffffff] uppercase tracking-[1px] inline-block font-[700] rounded-[5px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] px-[8rem] py-[1.5rem] text-[2rem]" target="_blank" rel="noreferrer">
              Project Link
            </a>
          </div>
        </div>
      </section>
      <section className="py-[8rem]">
        <div className="max-w-[90rem] mx-auto">
          <div className="w-full mb-[6rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
            <img src="/screenshots/pulsemeet-1.png" alt="PulseMeet Screenshot 1" className="w-full rounded-lg" />
            <img src="/screenshots/pulsemeet-2.png" alt="PulseMeet Screenshot 2" className="w-full rounded-lg" />
            <img src="/screenshots/pulsemeet-3.png" alt="PulseMeet Screenshot 3" className="w-full rounded-lg" />
            <img src="/screenshots/pulsemeet-4.png" alt="PulseMeet Screenshot 4" className="w-full rounded-lg" />
          </div>
          <div className="w-full max-w-[70rem] mx-auto">
            <div className="mb-[7rem]">
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                Project Overview
              </h2>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                PulseMeet is a robust telemedicine platform I developed to enable seamless virtual healthcare. The platform supports secure video and audio calls (powered by Twilio), real-time chat and waiting rooms (using PubNub), and offers both provider and patient portals for appointment scheduling, pre-call device testing, and more.
              </p>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                I architected and implemented the full stack, ensuring HIPAA-compliant security, smooth user experience, and real-time communication. The support portal, built with Next.js, allows the support team to monitor live platform stats and assist users in real time.
              </p>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                Key features include:
              </p>
              <ul className="list-disc ml-[2rem] mt-[-1rem] mb-[2rem] text-[1.8rem] leading-[1.7] text-[#666]">
                <li>Video & audio calling (Twilio)</li>
                <li>Real-time chat & waiting rooms (PubNub)</li>
                <li>Provider and patient portals</li>
                <li>Appointment scheduling & management</li>
                <li>Pre-call device/camera/mic testing</li>
                <li>Support portal for live stats and user assistance</li>
                <li>Secure, scalable, and user-friendly design</li>
              </ul>
            </div>
            <div className="mb-[7rem]">
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                Tools Used
              </h2>
              <div className="flex flex-wrap">
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">React.js</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">TypeScript</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Tailwind CSS</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Node.js</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Express.js</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">MongoDB</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Next.js (Support Portal)</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Twilio</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">PubNub</div>
              </div>
            </div>
            <div>
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                See Live
              </h2>
              <a
                href="#"
                className="inline-block mr-[2rem] bg-[#7843E9] text-[#ffffff] uppercase tracking-[1px] font-[700] rounded-[5px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] px-[5rem] py-[1.5rem] text-[1.6rem] md:w-[70%] md:mr-0 md:mb-[2rem] md:text-center"
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
    </>
  );
} 