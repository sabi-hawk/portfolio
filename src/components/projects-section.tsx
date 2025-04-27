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
                src="https://www.rammaheshwari.com/assets/jpeg/dopefolio.jpeg"
                alt="Software Screenshot"
                className="w-full block object-cover"
                loading="lazy"
              />
            </div>
            <div className="py-[2rem] flex justify-center flex-col items-start md:items-center md:text-center">
              <h3 className="font-[700] text-[2.8rem] mb-[2rem] md:text-[2.4rem]">
                Dopefolio
              </h3>
              <p className="text-[1.8rem] text-[#666] max-w-[60rem] leading-[1.7] mb-[3rem] md:text-[1.7rem]">
                Dopefolio is a successful Open-Source project that I created
                which have been featured on some of the biggest tech sites like
                CSS-Tricks, Hostinger, etc &amp; used by thousands of developers
                globally
              </p>
              <a
                className="bg-[#7843E9] text-white text-[#ffffff] text-[#ffffff] uppercase tracking-[1px] inline-block font-[700] rounded-[5px] 
                  shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] 
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
                src="https://www.rammaheshwari.com/assets/jpeg/wilsonport.jpeg"
                alt="Software Screenshot"
                className="w-full block object-cover"
                loading="lazy"
              />
            </div>
            <div className="py-[2rem] flex justify-center flex-col items-start md:items-center md:text-center">
              <h3 className="font-[700] text-[2.8rem] mb-[2rem] md:text-[2.4rem]">
                Wilsonport
              </h3>
              <p className="text-[1.8rem] text-[#666] max-w-[60rem] leading-[1.7] mb-[3rem] md:text-[1.7rem]">
                Wilsonport is a multiservice logistics and transport company and
                I created their website from scratch using the frontend tools I
                know.
              </p>
              <a
                className="bg-[#7843E9] text-white text-[#ffffff] uppercase tracking-[1px] inline-block font-[700] rounded-[5px] 
                  shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] 
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