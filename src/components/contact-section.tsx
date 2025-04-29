"use client";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-[12rem] md:py-[8rem] bg-[linear-gradient(to_right,rgba(245,245,245,0.8),rgba(245,245,245,0.8)),url(/assets/svg/common-bg.svg)] bg-center bg-cover"
    >
      <div className="max-w-[120rem] mx-auto w-[92%]">
        <div className="mb-[9rem] md:mb-[8rem]">
          <span
            className="block text-[4rem] uppercase tracking-[3px] text-center mb-[3.5rem] relative text-[#111] font-[700]
            after:content-[''] after:absolute after:top-[calc(100%+1.5rem)] after:h-[5px] after:w-[3rem] 
            after:bg-[#7843E9] after:left-1/2 after:-translate-x-1/2 after:rounded-[5px] 
            md:after:top-[calc(100%+1.2rem)]"
          >
            Contact
          </span>
          <span className="block text-center text-[#333] text-[2rem] font-[500] max-w-[80rem] mx-auto leading-[1.6] md:text-[1.8rem]">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </span>
        </div>

        <div
          className="relative z-10 bg-white border border-[#ececec] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] p-[4rem] mt-[6rem] max-w-[80rem] text-right w-[95%] rounded-[5px] mx-auto md:p-[3rem]"
          style={{ backgroundColor: '#fff' }}
        >
          <form action="#" method="post">
            <input type="hidden" name="form-name" value="form 1" />

            <div className="mb-[4rem] md:mb-[3rem]">
              <label
                className="text-[#666] text-[1.4rem] tracking-[1px] font-[700] mb-[1rem] block text-left"
                htmlFor="name"
              >
                Name
              </label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="text-[#333] p-[2rem] w-full border border-[#ebebeb] text-[1.6rem] tracking-[0px] bg-[#f0f0f0] rounded-[5px] font-[600] placeholder:text-[#999] placeholder:font-[600] placeholder:text-[1.6rem]"
                name="name"
                id="name"
              />
            </div>

            <div className="mb-[4rem] md:mb-[3rem]">
              <label
                className="text-[#666] text-[1.4rem] tracking-[1px] font-[700] mb-[1rem] block text-left"
                htmlFor="email"
              >
                Email
              </label>
              <input
                required
                placeholder="Enter Your Email"
                type="email"
                className="text-[#333] p-[2rem] w-full border border-[#ebebeb] text-[1.6rem] tracking-[0px] bg-[#f0f0f0] rounded-[5px] font-[600] placeholder:text-[#999] placeholder:font-[600] placeholder:text-[1.6rem]"
                name="email"
                id="email"
              />
            </div>

            <div className="mb-[4rem] md:mb-[3rem]">
              <label
                className="text-[#666] text-[1.4rem] tracking-[1px] font-[700] mb-[1rem] block text-left"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                required
                placeholder="Enter Your Message"
                className="text-[#333] p-[2rem] w-full border border-[#ebebeb] text-[1.6rem] tracking-[0px] bg-[#f0f0f0] rounded-[5px] font-[600] placeholder:text-[#999] placeholder:font-[600] placeholder:text-[1.6rem]"
                name="message"
                id="message"
                cols={30}
                rows={10}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#7843E9] text-[#fff] uppercase tracking-[1px] inline-block font-[700] rounded-[5px] 
                shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-[3px] 
                w-[30%] px-[2rem] py-[1.5rem] text-[1.4rem] max-[600px]:w-full"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 