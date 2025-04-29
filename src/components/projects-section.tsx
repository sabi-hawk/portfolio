"use client";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-[12rem]">
      <div className="max-w-[120rem] mx-auto w-[92%]">
        <div className="mb-[9rem]">
          <span
            className="block text-[4rem] uppercase tracking-[3px] text-center mb-[3.5rem] relative text-[#111] font-[800]
            after:content-[''] after:absolute after:top-[calc(100%+1.5rem)] after:h-[5px] after:w-[3rem] 
            after:bg-[#7843E9] after:left-1/2 after:-translate-x-1/2 after:rounded-[5px]"
          >
            Projects
          </span>
          <span className="block text-center text-[#555] text-[2rem] font-[500] max-w-[80rem] mx-auto leading-[1.6]">
            Here you will find some of the personal and clients projects that I created with each project containing its own case study
          </span>
        </div>

        <div className="flex flex-col gap-[8rem]">
          <div className="flex gap-[5rem] items-center">
            <div className="flex-1 overflow-hidden rounded-[5px]">
              <img
                src="/screenshots/superset.png"
                alt="Apache Superset Customization"
                className="w-full h-auto block object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 py-[2rem]">
              <h3 className="font-[800] text-[2.8rem] mb-[3rem] text-[#111]">
                Apache Superset Enterprise Customization
              </h3>
              <p className="text-[1.8rem] text-[#666] leading-[1.7] mb-[3rem]">
                Led the enterprise customization of Apache Superset: developed new plugins, advanced charting, RLS, dynamic datasets, and embedded analytics for multi-tenant BI. Used React, TypeScript, Python, Flask, Redis, PostgreSQL, and Docker to deliver robust, scalable solutions.
              </p>
              <a
                className="bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-[800] rounded-[5px] 
                  shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] 
                  px-[5rem] py-[1.5rem] text-[1.6rem]"
                href="/project-1"
              >
                CASE STUDY
              </a>
            </div>
          </div>

          <div className="flex gap-[5rem] items-center">
            <div className="flex-1 overflow-hidden rounded-[5px]">
              <img
                src="/screenshots/pulsemeet-1.png"
                alt="PulseMeet Telemedicine Platform"
                className="w-full h-auto block object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 py-[2rem]">
              <h3 className="font-[800] text-[2.8rem] mb-[3rem] text-[#111]">
                PulseMeet Telemedicine Platform
              </h3>
              <p className="text-[1.8rem] text-[#666] leading-[1.7] mb-[3rem]">
                Developed PulseMeet, a full-featured telemedicine platform with secure video calling, real-time chat, waiting rooms, provider and patient portals, appointment scheduling, and pre-call device testing. Used Twilio for video/audio, PubNub for real-time chat and waiting room, and built a support portal for live platform stats. Tech: React, TypeScript, Tailwind, Node.js, Express, MongoDB, Next.js.
              </p>
              <a
                className="bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-[800] rounded-[5px] 
                  shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] 
                  px-[5rem] py-[1.5rem] text-[1.6rem]"
                href="/project-2"
              >
                CASE STUDY
              </a>
            </div>
          </div>

          <div className="flex gap-[5rem] items-center">
            <div className="flex-1 overflow-hidden rounded-[5px]">
              <img
                src="/screenshots/atoms-1.png"
                alt="ATOM Automated Task & Operations Management"
                className="w-full h-auto block object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 py-[2rem]">
              <h3 className="font-[800] text-[2.8rem] mb-[3rem] text-[#111]">
                ATOM (Automated Task & Operations Management)
              </h3>
              <p className="text-[1.8rem] text-[#666] leading-[1.7] mb-[3rem]">
                ATOM is a unified web platform for client engagement, growth strategies, and business management. Features include lead generation, drag-n-drop mail composer, bulk email, real-time chat, AI tools, analytics, and more. Tech: React, TypeScript, Tailwind, Node.js, MongoDB, Express, Bootstrap, Ant Design, Liveblocks, Mailtrap, Unlayer, Redux, Zustand.
              </p>
              <a
                className="bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-[800] rounded-[5px] 
                  shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] 
                  px-[5rem] py-[1.5rem] text-[1.6rem]"
                href="/project-3"
              >
                CASE STUDY
              </a>
            </div>
          </div>

          <div className="flex gap-[5rem] items-center">
            <div className="flex-1 overflow-hidden rounded-[5px]">
              <img
                src="/screenshots/edu-nexus-1.png"
                alt="EduNexus Educational Platform"
                className="w-full h-auto block object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 py-[2rem]">
              <h3 className="font-[800] text-[2.8rem] mb-[3rem] text-[#111]">
                EduNexus Educational Platform
              </h3>
              <p className="text-[1.8rem] text-[#666] leading-[1.7] mb-[3rem]">
                EduNexus is a ready-to-launch educational SaaS with customizable Student, Teacher, and Admin portals. Institutions can select only the features they need, set up their own branded system in minutes, and launch a professional, scalable platform without custom development. Tech: Next.js, Nest.js, PostgreSQL, Ant Design, Docker, REST APIs, CI/CD, Cloud Hosting, JWT Auth, and more.
              </p>
              <a
                className="bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-[800] rounded-[5px] 
                  shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] 
                  px-[5rem] py-[1.5rem] text-[1.6rem]"
                href="/project-4"
              >
                CASE STUDY
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 