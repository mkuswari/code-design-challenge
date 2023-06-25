import React, { useEffect } from "react";
import { Source_Sans_Pro } from "next/font/google";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export default function TwitterEmbed() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    window.document.title = "Challenge 1 | Twitter Embed";
  }, []);

  return (
    <main
      className={`min-h-screen bg-[#ECF8FF] dark:bg-[#141D26] antialiased flex ${sourceSansPro.className} relative`}
    >
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      >
        <CiLight size={30} />
      </div>
      <div className="w-[601px] m-auto px-[31px] py-[35px] bg-white dark:bg-[#243447] rounded-[10px] border dark:border-0 border-[#1DA1F2]/20 shadow-[0px_15px_60px_rgba(29,161,242,0.15)] dark:shadow-[0px_15px_60px_rgba(52,81,116,0.15)]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[22px]">
            <Image
              src={"/twitter-embed/avatar.png"}
              alt="Person"
              width={50}
              height={50}
            />
            <div>
              <h2 className="font-bold text-black dark:text-white text-lg">
                John Doe
              </h2>
              <p className="font-normal text-black/60 dark:text-white/60 text-base">
                @realjohndoe
              </p>
            </div>
          </div>
          <Image
            src={"/twitter-embed/twitter-logo.png"}
            alt="Twitter Logo"
            width={30}
            height={30}
          />
        </div>
        <div className="mt-[15px]">
          <blockquote className="font-normal text-black dark:text-white text-base leading-[26px]">
            Why do they call it 'debugging' when it feels more like 'wildy
            guessing and hoping for the best'?{" "}
            <span className="text-[#1DA1F2]">
              #programming #coding #debugging
            </span>
          </blockquote>
          <div className="mt-[15px] flex justify-start items-center gap-[20px]">
            <div className="flex gap-2 items-center justify-start">
              <AiOutlineHeart
                size={24}
                className="text-black/60 dark:text-white/60"
              />
              <p className="font-semibold text-black/60 dark:text-white/60 text-base">
                650
              </p>
            </div>
            <p className="font-semibold text-black/60 dark:text-white/60 text-base">
              3:40 PM – Feb 24, 2022
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
