"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-[1000] bg-[#ffffff] shadow-[0_10px_100px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between px-[5rem] py-[1rem] max-md:px-[2rem]">
        <Link href="/" className="flex items-center cursor-pointer text-[#333] hover:text-[#7843E9] transition-colors">
          <div className="w-[5rem] h-[5rem] rounded-[50px] overflow-hidden mr-[1.5rem] bg-[#7843E9] max-md:w-[4.5rem] max-md:h-[4.5rem] max-md:mr-[1.2rem]">
            <Image
              src="/screenshots/Profile Pic.jpg"
              alt="Sabahat Atique Logo"
              width={50}
              height={50}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="text-[1.8rem] uppercase font-[700] tracking-[1px]">Sabahat Atique</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="max-md:hidden">
          <ul className="flex">
            {[
              { href: "/", label: "Home" },
              { href: "/#about", label: "About" },
              { href: "/#projects", label: "Projects" },
              { href: "/#contact", label: "Contact" }
            ].map((link) => (
              <li key={link.label}>
                <Link 
                  href={link.href}
                  className="px-[3rem] py-[2.2rem] inline-block text-[1.6rem] text-[#333] uppercase tracking-[1px] font-[700] hover:text-[#7843E9] transition-colors max-lg:px-[1.8rem] max-lg:text-[1.5rem]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="hidden max-md:block w-[3rem] py-[2.2rem]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <img 
            src={isOpen ? "/assets/svg/ham-menu-close.svg" : "/assets/svg/ham-menu.svg"}
            alt={isOpen ? "Close Menu" : "Open Menu"}
            className="w-full"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`bg-[#ffffff] absolute w-full top-full shadow-[0px_5px_5px_0px_rgba(0,0,0,0.1)] transition-all duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} max-md:block hidden`}>
        <nav>
          {[
            { href: "/", label: "Home" },
            { href: "/#about", label: "About" },
            { href: "/#projects", label: "Projects" },
            { href: "/#contact", label: "Contact" }
          ].map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={`block py-[2.5rem] px-[3rem] text-[1.6rem] text-[#333] text-right font-[700] uppercase tracking-[2px] hover:text-[#7843E9] transition-colors border-b border-[#eee] ${
                index === 0 ? 'border-t' : ''
              } ${index === 3 ? 'border-b-0' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
} 