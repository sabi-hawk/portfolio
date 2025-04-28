"use client";

export function ProjectsSection() {
  return (
    <section id="projects" className="md:py-[8rem]">
      <div className="max-w-[120rem] mx-auto w-[92%]">
        <div className="mb-[11rem] md:mb-[8rem]">
          <span
            className="block text-[4rem] uppercase tracking-[3px] text-center mb-[3.5rem] relative text-[#111] font-[700]
            after:content-[''] after:absolute after:top-[calc(100%+1.5rem)] after:h-[5px] after:w-[3rem] 
            after:bg-[#7843E9] after:left-1/2 after:-translate-x-1/2 after:rounded-[5px] 
            md:after:top-[calc(100%+1.2rem)]"
          >
            Projects
          </span>
          <span className="block text-center text-[#555] text-[2rem] font-[500] max-w-[80rem] mx-auto leading-[1.6] md:text-[1.8rem]">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </span>
        </div>

        <div>
          <div className="grid grid-cols-[1.5fr_1fr] gap-[5rem] mb-[11rem] md:grid-cols-[1fr] md:gap-[2rem] md:mb-[8rem] last:mb-0">
            <div className="overflow-hidden">
              <img
                src="/screenshots/superset.png"
                alt="Apache Superset Customization"
                className="w-full block object-cover"
                loading="lazy"
              />
            </div>
            <div className="py-[2rem] flex justify-center flex-col items-start md:items-center md:text-center">
              <h3 className="font-[700] text-[2.8rem] mb-[2rem] md:text-[2.4rem]">
                Apache Superset Enterprise Customization
              </h3>
              <p className="text-[1.8rem] text-[#666] max-w-[60rem] leading-[1.7] mb-[3rem] md:text-[1.7rem]">
                Led the enterprise customization of Apache Superset: developed new plugins, advanced charting, RLS, dynamic datasets, and embedded analytics for multi-tenant BI. Used React, TypeScript, Python, Flask, Redis, PostgreSQL, and Docker to deliver robust, scalable solutions.
              </p>
              <a
                className="bg-[#7843E9] text-white text-[#ffffff] uppercase tracking-[1px] inline-block font-[700] rounded-[5px] \
                  shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] \
                  px-[5rem] py-[1.5rem] text-[1.6rem]"
                href="/project-1"
                target="_blank"
              >
                Case Study
              </a>
            </div>
          </div>

          <div className="grid grid-cols-[1.5fr_1fr] gap-[5rem] mb-[11rem] md:grid-cols-[1fr] md:gap-[2rem] md:mb-[8rem] last:mb-0">
            <div className="overflow-hidden">
              <img
                src="/screenshots/pulsemeet-1.png"
                alt="PulseMeet Telemedicine Platform"
                className="w-full block object-cover"
                loading="lazy"
              />
            </div>
            <div className="py-[2rem] flex justify-center flex-col items-start md:items-center md:text-center">
              <h3 className="font-[700] text-[2.8rem] mb-[2rem] md:text-[2.4rem]">
                PulseMeet Telemedicine Platform
              </h3>
              <p className="text-[1.8rem] text-[#666] max-w-[60rem] leading-[1.7] mb-[3rem] md:text-[1.7rem]">
                Developed PulseMeet, a full-featured telemedicine platform with secure video calling, real-time chat, waiting rooms, provider and patient portals, appointment scheduling, and pre-call device testing. Used Twilio for video/audio, PubNub for real-time chat and waiting room, and built a support portal for live platform stats. Tech: React, TypeScript, Tailwind, Node.js, Express, MongoDB, Next.js.
              </p>
              <a
                className="bg-[#7843E9] text-white text-[#ffffff] uppercase tracking-[1px] inline-block font-[700] rounded-[5px] \
                  shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] \
                  px-[5rem] py-[1.5rem] text-[1.6rem]"
                href="/project-2"
                target="_blank"
              >
                Case Study
              </a>
            </div>
          </div>

          <div className="grid grid-cols-[1.5fr_1fr] gap-[5rem] mb-[11rem] md:grid-cols-[1fr] md:gap-[2rem] md:mb-[8rem] last:mb-0">
            <div className="overflow-hidden">
              <img
                src="https://www.rammaheshwari.com/assets/jpeg/boreal-coffee-clone.jpeg"
                alt="Software Screenshot"
                className="w-full block object-cover"
                loading="lazy"
              />
            </div>
            <div className="py-[2rem] flex justify-center flex-col items-start md:items-center md:text-center">
              <h3 className="font-[700] text-[2.8rem] mb-[2rem] md:text-[2.4rem]">
                Boreal Coffee Clone
              </h3>
              <p className="text-[1.8rem] text-[#666] max-w-[60rem] leading-[1.7] mb-[3rem] md:text-[1.7rem]">
                I re-created the frontend of Boreal Coffee&apos;s official web
                app because I got attracted to their beautiful UI. It was a
                great experience for me to build the entire frontend.
              </p>
              <a
                className="bg-[#7843E9] text-white text-[#ffffff] uppercase tracking-[1px] inline-block font-[700] rounded-[5px] 
                  shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] 
                  px-[5rem] py-[1.5rem] text-[1.6rem]"
                href="/project-3"
                target="_blank"
              >
                Case Study
              </a>
            </div>
          </div>

          <div className="grid grid-cols-[1.5fr_1fr] gap-[5rem] mb-[11rem] md:grid-cols-[1fr] md:gap-[2rem] md:mb-[8rem] last:mb-0">
            <div className="overflow-hidden">
              <img
                src="https://www.rammaheshwari.com/assets/jpeg/crown-template.jpeg"
                alt="Software Screenshot"
                className="w-full block object-cover"
                loading="lazy"
              />
            </div>
            <div className="py-[2rem] flex justify-center flex-col items-start md:items-center md:text-center">
              <h3 className="font-[700] text-[2.8rem] mb-[2rem] md:text-[2.4rem]">
                Crown Template
              </h3>
              <p className="text-[1.8rem] text-[#666] max-w-[60rem] leading-[1.7] mb-[3rem] md:text-[1.7rem]">
                Crown is a web template that I created targeting the restaurant
                and food industry which anyone can use to present their business
                online.
              </p>
              <a
                className="bg-[#7843E9] text-white text-[#ffffff] uppercase tracking-[1px] inline-block font-[700] rounded-[5px] 
                  shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] 
                  px-[5rem] py-[1.5rem] text-[1.6rem]"
                href="/project-4"
                target="_blank"
              >
                Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 