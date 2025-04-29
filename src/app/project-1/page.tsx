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
            Apache Superset Enterprise Customization
          </h1>
          <div className="mt-[3rem] mx-auto max-w-[80rem]">
            <p className="text-[2.2rem] text-[#333] text-center w-full leading-[1.6] md:text-[2rem]">
              This page details my work customizing and extending Apache
              Superset for enterprise BI needs, including plugin development,
              advanced charting, security, and multi-tenant features.
            </p>
          </div>
          <div className="mt-[5rem] text-center">
            <a
              href="https://github.com/apache/superset"
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
          <div className="w-full mb-[6rem]">
            <img
              src="/screenshots/superset.png"
              alt="Apache Superset Customization"
              className="w-full"
            />
          </div>
          <div className="w-full max-w-[70rem] mx-auto">
            <div className="mb-[7rem]">
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                Project Overview
              </h2>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                I led the internal development and enterprise customization of
                Apache Superset for a major client. My work included forking the
                project, developing new plugins, introducing advanced and custom
                chart types, and enhancing existing charts to support multiple
                dimensions and business requirements.
              </p>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                I implemented Row Level Security (RLS) for fine-grained data
                access, built a dynamic dataset feature enabling multiple
                clients to use the same dashboard with data isolation based on
                enterprise ID, and embedded dashboards into our own SaaS product
                for seamless analytics integration.
              </p>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                My contributions spanned both frontend (React, TypeScript) and
                backend (Python, Flask), leveraging technologies like Redis,
                PostgreSQL, and Docker to ensure scalable, secure, and
                high-performance BI solutions.
              </p>
              <p className="text-[1.8rem] leading-[1.7] text-[#666] mb-[2rem]">
                This work empowered enterprise clients with robust, customizable
                analytics and improved data-driven decision making across the
                organization.
              </p>
            </div>
            <div className="mb-[7rem]">
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                Tools Used
              </h2>
              <div className="flex flex-wrap">
                {/* front-end */}
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  React.js
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  TypeScript
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  JavaScript (ES6+)
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  HTML5 / CSS3
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  SCSS
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Apache ECharts
                </div>
                {/* back-end */}
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Python
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Flask
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Gunicorn
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  OAuth 2.0
                </div>
                {/* database  & cache */}
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  PostgreSQL
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  ClickHouse
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Redis
                </div>
                {/* devops */}
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Docker
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  Git
                </div>
                <div className="px-[2rem] py-[1rem] mb-[1.5rem] mr-[1.5rem] text-[1.6rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-[600] text-[#666]">
                  GitHub Actions / Jenkins
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-[700] text-[2.8rem] mb-[3rem] md:text-[2.4rem]">
                See Live
              </h2>
              <a
                href="https://github.com/apache/superset"
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
      <Footer />
    </>
  );
}
