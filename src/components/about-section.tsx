"use client";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Wordpress",
  "PHP", "SASS", "GIT", "Github", "Responsive Design",
  "SEO", "Terminal"
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
                I&apos;m a <strong>Frontend Focused Web Developer</strong>{" "}
                building and managing the Front-end of Websites and Web
                Applications that leads to the success of the overall product.
                Check out some of my work in the <strong>Projects</strong>{" "}
                section.
              </p>
              <p className="text-[1.8rem] text-[#666] max-w-[60rem] leading-[1.7] mb-[1rem]">
                I also like sharing content related to the stuff that I have
                learned over the years in <strong>Web Development</strong> so it
                can help other people of the Dev Community. Feel free to Connect
                or Follow me on my{" "}
                <a
                  href="https://linkedin.com/in/sabahat-atique"
                  className="text-[#7843E9] font-[700] underline mx-[3px]"
                  rel="noreferrer"
                  target="_blank"
                >
                  Linkedin
                </a>{" "}
                where I post useful content related to Web Development and
                Programming
              </p>
              <p className="text-[1.8rem] text-[#666] max-w-[60rem] leading-[1.7] mb-[4rem]">
                I&apos;m open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don&apos;t hesitate to{" "}
                <strong>contact</strong> me.
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