import { DM_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

type Props = {};

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Footer({}: Props) {
  return (
    <footer className={`bg-[#06061A] py-[50px] ${dmSans.className} rounded-se-[100px]`}>
      <div className="container">
        {/* Header */}
        <div className="flex justify-between mb-[100px]">
          <div className="text-white/80 max-w-xl">
            <h2 className="text-[26px] font-semibold leading-[44px]">
              Still have questions? We're here to help!
            </h2>
            <p className="text-base font-medium leading-[32px]">
              Chat with our support team by clicking the chat button in the
              right. We're here to assist you!
            </p>
          </div>
          <button className="flex gap-[15px] items-center text-base font-bold text-[#F4F7FF] bg-[#3A3AF4] rounded-[10px] px-[45px] py-[25px]">
            <Image
              src={"/hoster-support/ic_chat.svg"}
              alt="Chat"
              width={24}
              height={24}
            />
            <span>Chat Support</span>
          </button>
        </div>
        <hr className="border-white/10" />
        <div className="flex justify-between gap-[30px] py-[50px]">
          <div className="flex-1">
            <div>
              <a
                href=""
                className="text-base flex items-center text-white font-bold"
              >
                <Image
                  src={"/hoster-support/logo.png"}
                  alt="Logo"
                  width={50}
                  height={50}
                />
                <span className="ml-[15px]">Hoster</span>
              </a>
            </div>
            <p className="mt-[15px] text-base leading-[28px] text-white/80">
              At Hoster, we believe that reliable, high-quality hosting should
              be accessible to everyone. That's why we offer a range of hosting
              plans to suit the needs of businesses and individuals alike. Our
              team of experts is always on hand to provide fast, friendly
              support, and we use the latest technology to ensure that your
              website is always up and running smoothly.
            </p>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-[30px]">
              <div>
                <h3 className="text-sm text-white/60 uppercase font-bold tracking-[1.6px]">
                  PRODUCTS
                </h3>
                <ul className="mt-5">
                  <li className="text-base text-white/80 mb-2">
                    <a href="">Shared Hosting</a>
                  </li>
                  <li className="text-base text-white/80 mb-2">
                    <a href="">Virtual Private Server</a>
                  </li>
                  <li className="text-base text-white/80 mb-2">
                    <a href="">Domain</a>
                  </li>
                  <li className="text-base text-white/80 mb-2">
                    <a href="">Email Hosting</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm text-white/60 uppercase font-bold tracking-[1.6px]">
                  COMPANY
                </h3>
                <ul className="mt-5">
                  <li className="text-base text-white/80 mb-2">
                    <a href="">About Us</a>
                  </li>
                  <li className="text-base text-white/80 mb-2">
                    <a href="">Contact</a>
                  </li>
                  <li className="text-base text-white/80 mb-2">
                    <a href="">Privacy Policy</a>
                  </li>
                  <li className="text-base text-white/80 mb-2">
                    <a href="">Terms of Service</a>
                  </li>
                  <li className="text-base text-white/80 mb-2">
                    <a href="">Help</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm text-white/60 uppercase font-bold tracking-[1.6px]">
                  GET IN TOUCH
                </h3>
                <ul className="mt-5">
                  <li className="text-base text-white/80 mb-2">
                    <a href="">Twitter</a>
                  </li>
                  <li className="text-base text-white/80 mb-2">
                    <a href="">Facebook</a>
                  </li>
                  <li className="text-base text-white/80 mb-2">
                    <a href="">Dribble</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-white/10" />
        {/* Copyright text */}
        <p className="text-center text-xs font-bold text-white/40 mt-[51px]">
          COPYRIGHT © 2022 — DESIGN NAUVAL
        </p>
      </div>
    </footer>
  );
}
