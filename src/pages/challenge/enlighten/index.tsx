import { Poppins } from "next/font/google";
import React, { useEffect } from "react";

type Props = {};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Enlighten({}: Props) {
  useEffect(() => {
    document.title = "Challenge 06 | Enlighten Coming Soon Page";
  }, []);

  return (
    <main className={`min-h-screen antialiased ${poppins.className} flex`}>
      <div className="w-full md:w-3/5 px-[40px] py-[60px] md:px-[130px] md:py-[70px]">
        <h2 className="text-xl font-semibold text-[#0A1B59] italic">
          Enlighten.
        </h2>
        {/* Content */}
        <div className="mt-[60px] md:mt-[150px]">
          {/* Badge coming soon */}
          <div className="px-[15px] py-[5px] bg-[#113FE2] bg-opacity-10 rounded-full w-max">
            <p className="text-sm font-bold text-[#113FE2] tracking-[2px]">
              COMING SOON
            </p>
          </div>
          <h1 className="text-[#0A1B59] text-[44px] font-bold max-w-md my-[15px]">
            Get your dancing shoes ready
          </h1>
          <p className="text-base text-[#0A1B59] text-opacity-60 leading-[32px] max-w-lg">
            We're putting the finishing touches on our website and getting ready
            to launch. Sign up for updates and be the first to know when we go
            live.
          </p>

          {/* Email form */}
          <div className="flex flex-row gap-5 max-w-lg mt-[40px]">
            <div className="flex-1">
              <input
                type="text"
                className="h-[52px] border border-[#0A1B5933] border-opacity-20 rounded-[8px] w-full px-[20px] py-[10px] text-base text-[#0A1B5999] text-opacity-60 focus:outline-none"
                placeholder="Email address"
              />
            </div>
            <div>
              <button className="h-[52px] px-[30px] py-[10px] bg-[#113FE2] text-white rounded-[8px]">
                Invite Me
              </button>
            </div>
          </div>

          {/* Information */}
          <p className="mt-5 text-xs leading-[24px] text-[#0A1B5999] text-opacity-60 max-w-lg">
            Sign up for updates to be the first to know when we launch. No spam,
            just important information and exclusive offers.
          </p>
        </div>
      </div>
      <div className="hidden md:flex w-2/5 bg-[url('/enlighten/bg_auth.png')] bg-cover bg-no-repeat"></div>
    </main>
  );
}
