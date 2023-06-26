import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useEffect } from "react";
import Sidebar from "./components/sidebar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Grolin() {
  useEffect(() => {
    document.title = "Challenge 4 | Grolin Auth Page";
  }, []);

  return (
    <main
      className={`${inter.className} min-h-screen bg-[#202433] flex flex-row`}
    >
      <div className="flex-1 hidden md:flex p-[17px]">
        <Sidebar />
      </div>
      <div className="flex-1 flex p-10">
        <div className="max-w-md m-auto">
          <div>
            <h2 className="text-white text-2xl font-semibold mb-[10px]">
              Login
            </h2>
            <p className="text-white/60 text-base leading-[28px]">
              You can login with your registered account or quick login with
              your Google account.
            </p>

            {/* Button Sign Google Sign In */}
            <button className="text-base font-semibold text-[#202433] bg-white rounded-md p-5 w-full my-[30px]">
              <div className="flex gap-[15px] justify-center items-center">
                <Image
                  src={"/grolin/google_icon.svg"}
                  alt="Google Icon"
                  width={25}
                  height={25}
                />{" "}
                <span>Login with Google</span>
              </div>
            </button>

            {/* Divider */}
            <div className="flex flex-row items-center gap-3">
              <hr className="flex-1 border border-[#33394F]" />
              <p className="text-white font-semibold text-base">or</p>
              <hr className="flex-1 border border-[#33394F]" />
            </div>

            {/* Authentication Forms */}
            <form action="">
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
                  <a href="" className="text-base font-semibold text-[#FC728B]">
                    Forgot Password?
                  </a>
                </div>
                <input
                  type="password"
                  className="text-base px-[40px] py-[20px] bg-[#33394F] rounded-md text-white w-full focus:outline-none placeholder:text-white/60"
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
                  Remember me
                </label>
              </div>

              <button className="text-base font-semibold text-[#202433] bg-[#FC728B] rounded-md p-5 w-full">
                Login
              </button>

              <div className="text-center mt-[30px]">
                <p className="text-base font-semibold text-white/60">
                  Don't have an account?{" "}
                  <Link
                    href="/challenge/grolin/register"
                    className="text-[#FC728B]"
                  >
                    Create one!
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
