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
            Vue Admin Dashboard
          </h1>
          <div className="mt-[3rem] mx-auto max-w-[80rem]">
            <p className="text-[2.2rem] text-[#333] text-center w-full leading-[1.6] md:text-[2rem]">
              This page contains the case study of Vue Admin Dashboard which includes the Project 
              Overview, Tools Used and Live Links to the official product.
            </p>
          </div>
          <div className="mt-[5rem] text-center">
            <a href="https://github.com/sabi-hawk/vue-admin" className="bg-[#7843E9] text-white uppercase tracking-[1px] inline-block font-[700] rounded-[5px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-[3px] px-[8rem] py-[1.5rem] text-[2rem]" target="_blank" rel="noreferrer">
              Project Link
            </a>
          </div>
        </div>
      </section>
      <section className="py-[8rem]">
        <div className="max-w-[90rem] mx-auto">
          <div className="w-full mb-[6rem]">
            <img src="/screenshots/vue-admin.jpeg" alt="Project Image" className="w-full" />
          </div>
          <div className="w-full max-w-[70rem] mx-auto">
            <div className="mb-[7rem]">
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                Project Overview
              </h2>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                Vue Admin Dashboard is a comprehensive admin panel template built with Vue.js. I developed this project to provide developers with a ready-to-use solution for creating modern admin interfaces.
              </p>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                The dashboard includes essential features like data visualization with charts, tables with sorting and filtering, user management, and a responsive layout that works seamlessly across all devices.
              </p>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                The project demonstrates best practices in Vue.js development, including Vuex for state management, Vue Router for navigation, and component reusability.
              </p>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                Feel free to check out the Project by visiting the Project Link.
              </p>
            </div>
            <div className="mb-[7rem]">
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                Tools Used
              </h2>
              <div className="flex flex-wrap">
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Vue.js</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Vuex</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Vue Router</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">JavaScript</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">SASS</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Chart.js</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">GIT</div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">Github</div>
              </div>
            </div>
            <div>
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                See Live
              </h2>
              <a
                href="https://github.com/sabi-hawk/vue-admin"
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