import Image from "next/image";
import React from "react";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#F4C395] to-[#F27F94] rounded-[20px] relative overflow-hidden">
      <div className="absolute top-32 left-16">
        <Image src={"/grolin/icon.png"} alt="Logo" width={50} height={50} />
        <p className="mt-10 text-[15px] font-semibold text-[#202433]">
          ACCOUNT.IO
        </p>
        <h2 className="text-4xl font-medium text-[#202433] max-w-md leading-[56px]">
          Manage multiple accounts in one place!
        </h2>
      </div>
      <div className="absolute top-2/4">
        <div className="flex gap-12">
          <div className="w-[287px] bg-[#FFE3CA] rounded-[10px] p-[37px] shadow-[10px_10px_0px_0px_rgba(32,36,51,0.14)]">
            <Image
              src={"/grolin/logo_twitter.svg"}
              alt="Twitter"
              width={38}
              height={31}
            />
            <h2 className="mt-[27px] text-base font-semibold text-[#202433]">
              Twitter Account
            </h2>
            <p className="mt-[9px] text-xs text-[#202433] leading-[22px]">
              Tweet, reply to tweet, manage DMs, and more in a single dashboard.
            </p>
          </div>
          <div className="w-[287px] bg-[#FFE3CA] rounded-[10px] p-[37px] shadow-[10px_10px_0px_0px_rgba(32,36,51,0.14)]">
            <Image
              src={"/grolin/logo_twitter.svg"}
              alt="Twitter"
              width={38}
              height={31}
            />
            <h2 className="mt-[27px] text-base font-semibold text-[#202433]">
              Twitter Account
            </h2>
            <p className="mt-[9px] text-xs text-[#202433] leading-[22px]">
              Tweet, reply to tweet, manage DMs, and more in a single dashboard.
            </p>
          </div>
          <div className="w-[287px] bg-[#FFE3CA] rounded-[10px] p-[37px] shadow-[10px_10px_0px_0px_rgba(32,36,51,0.14)]">
            <Image
              src={"/grolin/logo_instagram.svg"}
              alt="Twitter"
              width={38}
              height={31}
            />
            <h2 className="mt-[27px] text-base font-semibold text-[#202433]">
              Instagram Account
            </h2>
            <p className="mt-[9px] text-xs text-[#202433] leading-[22px]">
              Post a story, manage DMs, and more in a single dashboard.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-16">
        <a href="" className="text-xs font-semibold">
          PRIVACY POLICY
        </a>
        <span className="mx-3">&bull;</span>
        <a href="" className="text-xs font-semibold">
          TERM OF SERVICE
        </a>
      </div>
    </div>
  );
}
