"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[80rem] max-h-[120rem] bg-[linear-gradient(to_right,rgba(245,245,245,0.8),rgba(245,245,245,0.8)),url('/assets/svg/common-bg.svg')] bg-cover bg-center max-md:h-auto max-md:min-h-0">
      {/* Main Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[90rem] max-md:static max-md:transform-none max-md:py-[19rem] max-md:px-0 max-md:mx-auto">
        <h1 className="text-[6rem] uppercase tracking-[3px] text-center text-[#111] font-[800] max-md:text-[4.5rem]">
          Hey, I&apos;m Sabahat Atique
        </h1>
        <div className="mt-[3rem] mx-auto max-w-[80rem]">
          <p className="text-[2.2rem] text-[#333] text-center leading-[1.6] max-md:text-[2rem]">
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </p>
        </div>
        <div className="mt-[5rem] text-center">
          <Link
            href="/#projects"
            className="inline-block bg-[#7843E9] text-[#ffffff] uppercase tracking-[1px] font-[700] rounded-[5px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] px-[8rem] py-[1.5rem] text-[2rem]"
          >
            Projects
          </Link>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#ffffff] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] p-[0.5rem] max-lg:hidden">
        <div className="w-[5rem]">
          <a
            href="https://linkedin.com/in/sabahat-atique"
            className="w-full block p-[1rem] transition-colors rounded-[5px] hover:bg-[rgba(120,67,233,0.2)]"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/assets/svg/linkedin-dark.svg"
              alt="Sabahat Atique Linkedin Profile"
              className="w-full"
            />
          </a>
        </div>
        <div className="w-[5rem]">
          <a
            href="https://twitter.com/sabihawk"
            className="w-full block p-[1rem] transition-colors rounded-[5px] hover:bg-[rgba(120,67,233,0.2)]"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/assets/svg/twitter-dark.svg"
              alt="Sabahat Atique Twitter Profile"
              className="w-full"
            />
          </a>
        </div>
        <div className="w-[5rem]">
          <a
            href="https://youtube.com/@sabihawk"
            className="w-full block p-[1rem] transition-colors rounded-[5px] hover:bg-[rgba(120,67,233,0.2)]"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/assets/svg/yt-dark.svg"
              alt="Sabahat Atique Youtube Channel"
              className="w-full"
            />
          </a>
        </div>
        <div className="w-[5rem]">
          <a
            href="https://github.com/sabi-hawk"
            className="w-full block p-[1rem] transition-colors rounded-[5px] hover:bg-[rgba(120,67,233,0.2)]"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/assets/svg/github-dark.svg"
              alt="Sabahat Atique Github Profile"
              className="w-full"
            />
          </a>
        </div>
        <div className="w-[5rem]">
          <a
            href="https://dev.to/sabihawk"
            className="w-full block p-[1rem] transition-colors rounded-[5px] hover:bg-[rgba(120,67,233,0.2)]"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/assets/svg/book-dark.svg"
              alt="Sabahat Atique DEV.to Blog Profile"
              className="w-full"
            />
          </a>
        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-[3%] left-1/2 transform -translate-x-1/2 max-md:hidden">
        <div className="w-[25px] h-[40px] border-2 border-[#333] rounded-[60px] relative overflow-hidden">
          <div className="absolute w-[5px] h-[5px] bg-[#333] rounded-full left-1/2 -translate-x-1/2 top-[7px] animate-[wheel_1.3s_infinite]" />
        </div>
      </div>
    </section>
  );
} 