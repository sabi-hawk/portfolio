"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000] text-[#fff]">
      <div className="max-w-[120rem] mx-auto w-[92%]">
        <div className="flex justify-between py-[8rem]">
          {/* Right Side - Social Section (Order 2) */}
          <div className="order-2">
            <h2 className="text-[2.2rem] uppercase tracking-[1px] font-[700] mb-[2rem]">
              Social
            </h2>
            <div className="mt-[2rem] flex">
              <a
                href="https://linkedin.com/in/sabahat-atique"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#7843E9] transition-colors mr-[1rem]"
              >
                <img
                  src="https://www.rammaheshwari.com/assets/png/linkedin-ico.png"
                  alt="Sabahat Atique LinkedIn Profile"
                  className="w-[2.5rem] h-[2.5rem]"
                />
              </a>
              <a
                href="https://github.com/sabi-hawk"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#7843E9] transition-colors mr-[1rem]"
              >
                <img
                  src="https://www.rammaheshwari.com/assets/png/github-ico.png"
                  alt="Sabahat Atique GitHub Profile"
                  className="w-[2.5rem] h-[2.5rem]"
                />
              </a>
              <a
                href="https://twitter.com/sabi_hawk"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#7843E9] transition-colors mr-[1rem]"
              >
                <img
                  src="https://www.rammaheshwari.com/assets/png/twitter-ico.png"
                  alt="Sabahat Atique Twitter Profile"
                  className="w-[2.5rem] h-[2.5rem]"
                />
              </a>
              <a
                href="https://dev.to/sabi_hawk"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#7843E9] transition-colors mr-[1rem]"
              >
                <img
                  src="https://www.rammaheshwari.com/assets/png/blog-ico.png"
                  alt="Sabahat Atique Blog"
                  className="w-[2.5rem] h-[2.5rem]"
                />
              </a>
              <a
                href="https://www.youtube.com/@sabi_hawk"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#7843E9] transition-colors"
              >
                <img
                  src="https://www.rammaheshwari.com/assets/png/yt-ico.png"
                  alt="Sabahat Atique YouTube Channel"
                  className="w-[2.5rem] h-[2.5rem]"
                />
              </a>
            </div>
          </div>

          {/* Left Side - About Section (Order 1) */}
          <div className="order-1 w-[40%] max-w-[50rem]">
            <h2 className="text-[2.2rem] uppercase tracking-[1px] font-[700] mb-[2rem]">
              Sabahat Atique
            </h2>
            <p className="text-[#eee] text-[1.5rem] leading-[1.7] mt-[2rem]">
              A Full-Stack Developer building both the Frontend and Backend of Websites and
              Web Applications that drive the success of the overall product
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-[4rem] border-t border-[#444] text-[#eee] text-[1.2rem] text-center">
          © Copyright {currentYear}. Made by{" "}
          <a
            href="https://sabahat-atique.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-[#7843E9] font-[700] underline ml-[2px]"
          >
            Sabahat Atique
          </a>
        </div>
      </div>
    </footer>
  );
} 