import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import Sidebar from "./components/sidebar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Register() {
  return (
    <main
      className={`${inter.className} min-h-screen bg-[#202433] flex flex-row`}
    >
      <div className="flex-1 hidden md:flex p-[17px]">
        <Sidebar />
      </div>
      <div className="flex-1 flex p-10">
        <div className="w-[440px] m-auto">
          <div>
            <h2 className="text-white text-2xl font-semibold mb-[10px]">
              Register
            </h2>
            <p className="text-white/60 text-base leading-[28px]">
              Enter your user details bellow
            </p>

            {/* Authentication Forms */}
            <form action="" className="mt-[30px]">
              <div className="flex flex-col mb-[30px]">
                <label
                  className="text-base font-semibold text-white mb-[10px]"
                  htmlFor="email"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="text-base px-[40px] py-[20px] bg-[#33394F] rounded-md text-white w-full focus:outline-none placeholder:text-white/60"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col mb-[30px]">
                <label
                  className="text-base font-semibold text-white mb-[10px]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="text-base px-[40px] py-[20px] bg-[#33394F] rounded-md text-white w-full focus:outline-none placeholder:text-white/60"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col mb-[30px]">
                <div className="flex justify-between">
                  <label
                    className="text-base font-semibold text-white mb-[10px]"
                    htmlFor="password"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  className="text-base px-[40px] py-[20px] bg-[#33394F] rounded-md text-white w-full focus:outline-none placeholder:text-white/60"
                  placeholder="Enter your password"
                />
              </div>

              {/* Remember Me */}
              <div className="flex gap-[15px] mb-[30px]">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="w-6 h-6 rounded-lg"
                />
                <label
                  htmlFor="remember"
                  className="text-base font-semibold text-white"
                >
                  Agree with terms and conditions
                </label>
              </div>

              <button className="text-base font-semibold text-[#202433] bg-[#FC728B] rounded-md p-5 w-full">
                Register
              </button>

              <div className="text-center mt-[30px]">
                <p className="text-base font-semibold text-white/60">
                  Have an account?{" "}
                  <Link href="/challenge/grolin" className="text-[#FC728B]">
                    Login!
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
