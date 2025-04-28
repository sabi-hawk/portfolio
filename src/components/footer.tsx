"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000] text-[#fff]">
      <div className="max-w-[120rem] mx-auto w-[92%]">
        <div className="flex justify-between py-[8rem] md:py-[6rem] md:block">
          <div className="order-2 md:mb-[5rem]">
            <h2 className="text-[2.2rem] uppercase tracking-[1px]">
              <span>Social</span>
            </h2>
            <div className="mt-[2rem] flex">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/in/sabahat-atique"
              >
                <img
                  className="w-[2.5rem] mr-[1rem]"
                  src="https://www.rammaheshwari.com/assets/png/linkedin-ico.png"
                  alt="Sabahat Atique Linkedin Profile"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sabi-hawk"
              >
                <img
                  className="w-[2.5rem] mr-[1rem]"
                  src="https://www.rammaheshwari.com//assets/png/github-ico.png"
                  alt="Sabahat Atique Github Profile"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/sabi_hawk"
              >
                <img
                  className="w-[2.5rem] mr-[1rem]"
                  src="https://www.rammaheshwari.com//assets/png/twitter-ico.png"
                  alt="Sabahat Atique Twitter Profile"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dev.to/sabi_hawk"
              >
                <img
                  className="w-[2.5rem] mr-[1rem]"
                  src="https://www.rammaheshwari.com//assets/png/blog-ico.png"
                  alt="Sabahat Atique DEV.to Blog Profile"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/@sabi_hawk"
              >
                <img
                  className="w-[2.5rem]"
                  src="https://www.rammaheshwari.com//assets/png/yt-ico.png"
                  alt="Sabahat Atique Youtube Channel"
                />
              </a>
            </div>
          </div>
          <div className="order-1 w-[40%] max-w-[50rem] md:w-full">
            <h2 className="text-[2.2rem] uppercase tracking-[1px]">
              Sabahat Atique
            </h2>
            <p className="mt-[2rem] text-[#eee] text-[1.5rem] leading-[1.7]">
              A Full-Stack Developer building both the Frontend and Backend of
              Websites and Web Applications that drive the success of the
              overall product
            </p>
          </div>
        </div>

        <div className="py-[4rem] border-t border-[#444] text-[#eee] text-[1.2rem] text-center md:py-[3.5rem]">
          © Copyright {currentYear}. Made by
          <a
            rel="noreferrer"
            target="_blank"
            href="https://sabahat-atique.vercel.app"
            className="underline font-bold ml-[2px]"
          >
            Sabahat Atique
          </a>
        </div>
      </div>
    </footer>
  );
} 