import { Source_Sans_Pro } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {};

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export default function Faceless({}: Props) {
  useEffect(() => {
    document.title = "Challenge 05 | Faceless Auth";
  }, []);

  return (
    <main
      className={`min-h-screen antialiased flex ${sourceSansPro.className}`}
    >
      <div className="w-full md:w-1/4 bg-white px-[40px] py-[60px]">
        <Image src={"/faceless/logo.png"} alt="Logo" width={80} height={80} />
        <div className="mt-[40px]">
          <h2 className="text-2xl">
            Welcome to <span className="font-bold">Kodinger</span>
          </h2>
          <p className="text-sm mt-[5px] leading-[22px] text-black/60">
            Before you get started, you must login or register if you don't
            already have an account.
          </p>
        </div>

        {/* Login Form Here */}
        <div className="mt-[30px] mb-[60px]">
          {/* Navigation */}
          <div className="flex gap-[15px]">
            <div>
              <h2 className="text-sm font-semibold">LOGIN</h2>
              <span className="flex h-[2px] mt-[4px] bg-[#228FA6]"></span>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-black/60">REGISTER</h2>
            </div>
          </div>

          <form action="" className="mt-5">
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-black/60 mb-[5px]"
              >
                Email
              </label>
              <input
                type="text"
                className="bg-[#F2F2F2] rounded-[3px] h-10 w-full px-3 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-5">
              <div className="flex justify-between mb-[5px]">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-black/60"
                >
                  Password
                </label>
                <Link
                  href={"/"}
                  className="text-sm font-semibold underline text-[#228FA6]"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                className="bg-[#F2F2F2] rounded-[3px] h-10 w-full px-3 focus:outline-none"
              />
            </div>
            {/* Button sign in */}
            <button className="h-12 w-full bg-[#228FA6] text-white rounded-[3px] shadow-[0px_15px_30px_0px_rgba(34,143,166,0.50)] text-sm font-semibold">
              Sign In
            </button>
          </form>
        </div>
        {/* Copyright */}
        <p className="text-center text-sm font-semibold text-black/60">
          © Your Company. Design by Nauval
        </p>
      </div>
      <div className="hidden md:flex w-3/4 bg-[url('/faceless/bg_auth.png')] bg-center bg-cover"></div>
    </main>
  );
}
