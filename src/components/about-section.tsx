"use client";

const skills = [
  // Frontend
  "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Ant Design", "Bootstrap", "SCSS",
  // Backend
  "Node.js", "Nest.js", "Python", "Express.js",
  // Database
  "MongoDB", "SQL",
  // API/DevOps/Tools
  "API Development", "RESTful APIs", "Docker", "CI/CD", "Git/GitHub", "Postman", "JEST",
  // Soft Skills
  "Agile/Scrum", "Problem-solving", "Mentorship"
];

export function AboutSection() {
  return (
    <section id="about" className="bg-[#fafafa] py-[12rem] md:py-[8rem]">
      <div className="max-w-[120rem] mx-auto w-[92%]">
        <div className="mb-[9rem] md:mb-[8rem]">
          <span
            className="block text-[4rem] uppercase tracking-[3px] text-center mb-[3.5rem] relative text-[#111] font-[700]
            after:content-[''] after:absolute after:top-[calc(100%+1.5rem)] after:h-[5px] after:w-[3rem] 
            after:bg-[#7843E9] after:left-1/2 after:-translate-x-1/2 after:rounded-[5px] 
            md:after:top-[calc(100%+1.2rem)]"
          >
            About Me
          </span>
          <span className="block text-center text-[#555] text-[2rem] font-[500] max-w-[80rem] mx-auto leading-[1.6] md:text-[1.8rem]">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-[10rem] md:grid-cols-[1fr] md:gap-[8rem]">
          <div>
            <h3 className="text-[2.8rem] font-[700] mb-[3rem] md:text-[2.4rem]">
              Get to know me!
            </h3>
            <div>
              <p className="text-[1.8rem] text-[#666] max-w-[60rem] leading-[1.7] mb-[1rem]">
                I&apos;m a <strong>Full-Stack Developer</strong> with over 5 years of experience specializing in the <strong>US Healthcare</strong> domain. I&apos;ve successfully delivered multiple healthcare solutions that have improved patient care and clinical workflows. Check out some of my work in the <strong>Projects</strong> section.
              </p>
              <p className="text-[1.8rem] text-[#666] max-w-[60rem] leading-[1.7] mb-[1rem]">
                My expertise includes developing telemedicine platforms, healthcare analytics dashboards, and patient management systems. I&apos;m passionate about creating solutions that make a real difference in healthcare delivery. Feel free to Connect or Follow me on my{" "}
                <a
                  href="https://linkedin.com/in/sabahat-atique"
                  className="text-[#7843E9] font-[700] underline mx-[3px]"
                  rel="noreferrer"
                  target="_blank"
                >
                  Linkedin
                </a>{" "}
                where I share insights about healthcare technology and development.
              </p>
              <p className="text-[1.8rem] text-[#666] max-w-[60rem] leading-[1.7] mb-[4rem]">
                I&apos;m open to <strong>Job</strong> opportunities where I can contribute my healthcare domain expertise and full-stack development skills. If you have a good opportunity that matches my experience, don&apos;t hesitate to <strong>contact</strong> me.
              </p>
            </div>
            <a
              href="#contact"
              className="bg-[#7843E9] text-[#ffffff] text-white uppercase tracking-[1px] inline-block font-[700] rounded-[5px] 
                shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] 
                px-[5rem] py-[1.5rem] text-[1.6rem]"
            >
              Contact
            </a>
          </div>
          <div>
            <h3 className="text-[2.8rem] font-[700] mb-[3rem] md:text-[2.4rem]">
              My Skills
            </h3>
            <div className="flex flex-wrap">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] 
                    bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 