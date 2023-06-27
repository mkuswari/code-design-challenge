import { DM_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className={`flex justify-between items-center ${dmSans.className}`}>
      <div>
        <a href="" className="text-base flex items-center text-white font-bold">
          <Image
            src={"/hoster-support/logo.png"}
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="ml-[15px]">Hoster</span>
        </a>
      </div>
      <nav>
        <ul className="flex space-x-[50px] text-white">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </nav>
      <button className="text-base font-bold text-[#060619] px-[30px] py-[15px] rounded-[100px] bg-white">
        My Account
      </button>
    </header>
  );
}
