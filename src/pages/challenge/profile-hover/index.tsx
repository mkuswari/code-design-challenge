import { Inter, Source_Sans_Pro } from "next/font/google";
import Image from "next/image";
import React, { useEffect } from "react";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function ProfileHover() {
  useEffect(() => {
    document.title = "Challenge 07 | Profile Hover";
  }, []);

  return (
    <main
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage:
          "conic-gradient(from 159deg at 23.75% 32.81%, #6C49F6 0deg, #7649FF 273.7500071525574deg, #4517C8 360deg",
      }}
    >
      <div className="group">
        <Image
          src={"/profile-hover/avatar.png"}
          alt="John Doe"
          width={40}
          height={40}
          className="border border-white rounded-full cursor-pointer"
        />
        <div className="relative hidden group-hover:flex">
          {/* Arrow */}
          <div className="w-3 h-3 bg-white/90 rotate-45 absolute top-3 left-3"></div>
          <div className="absolute top-4 -left-5 w-[400px] p-[25px] bg-white rounded-md">
            {/* Profile */}
            <div className="flex justify-between items-center">
              <div className="flex flex-row gap-[15px]">
                <Image
                  src={"/profile-hover/avatar.png"}
                  alt="John Doe"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className={`${inter.className}`}>
                  <h3 className="text-base font-semibold">John Smith</h3>
                  <p className="text-sm text-black/60">@jsmith</p>
                </div>
              </div>
              <button
                className={`${sourceSansPro.className} text-base text-white font-semibold px-[18px] py-[7px] bg-[#6C49F6] rounded-[3px] shadow-[0px_8px_25px_0px_rgba(108,73,246,0.50)]`}
              >
                Follow
              </button>
            </div>
            <blockquote
              className={`my-[15px] ${sourceSansPro.className} text-base leading-[26px]`}
            >
              Tech enthusiast and amateur photographer based in San Francisco.
              Software engineer at a startup in the Bay Area. Enjoys exploring
              the city, and trying new restaurants.
            </blockquote>
            {/* Followers info */}
            <div
              className={`flex gap-[30px] justify-start ${sourceSansPro.className}`}
            >
              <div>
                <p className="text-base leading-[28px] text-black/60">
                  Followers
                </p>
                <h2 className="text-[22px] font-semibold leading-[28px]">
                  198,549
                </h2>
              </div>
              <div>
                <p className="text-base leading-[28px] text-black/60">
                  Following
                </p>
                <h2 className="text-[22px] font-semibold leading-[28px]">
                  4,513
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
