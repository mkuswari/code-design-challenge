import { Source_Sans_Pro, DM_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function HolaDok() {
  return (
    <main className="bg-white min-h-screen antialiased md:bg-[url('/holadok/background.png')] bg-no-repeat bg-contain bg-[right_8rem_top_1rem]">
      {/* Background start */}
      <header
        className={`flex justify-between items-center py-8 container ${sourceSansPro.className} sticky top-0`}
      >
        <div className="flex gap-[93px]">
          <div>
            <a href="" className="flex gap-2 font-bold text-lg text-[#101C45]">
              <Image
                src={"/holadok/icon-doctor.svg"}
                alt="Icon Doctor"
                width={24}
                height={24}
              />
              Holadok
            </a>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex justify-start gap-[50px]">
              <li className="text-base font-semibold text-[#101C45]">
                <a href="">Home</a>
              </li>
              <li className="text-base font-normal">
                <a href="">Features</a>
              </li>
              <li className="text-base font-normal">
                <a href="">Blog</a>
              </li>
              <li className="text-base font-normal">
                <a href="">About Us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-start items-center gap-4 text-[#101C45] font-semibold">
          <button className="px-[20px] py-[6px]">Login</button>
          <button className="px-[20px] py-[6px] border border-[#101C45]">
            Book Now
          </button>
        </div>
      </header>
      {/* Background end */}
      {/* Hero section start */}
      <section className="py-8 container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1 max-w-[457px]">
            <h1
              className={`${dmsans.className} font-medium text-[48px] text-[#101C45] leading-[62px]`}
            >
              Get the healthcare you need, when you need it.
            </h1>
            <p
              className={`${dmsans.className} text-[#101C45] text-lg font-normal leading-[30px] mt-[15px]`}
            >
              Manage all of your healthcare needs in one convenient place - from
              booking appointments to tracking your health history
            </p>
            <div className="mt-[40px]">
              <button
                className={`px-[35px] py-[15px] bg-[#203271] text-white ${sourceSansPro.className}`}
              >
                Book an Appointment
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-end relative">
            <div
              className={`bg-white rounded-[10px] shadow-[0px_15px_30px_rgba(0,0,0,0.1)] h-max p-[20px] max-w-xs absolute top-32 left-64 ${sourceSansPro.className}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <Image
                    src={"/holadok/avatar.png"}
                    alt="Jane Doe"
                    width={30}
                    height={30}
                  />
                  <p>Jane Doe</p>
                </div>
                <Image
                  src={"/holadok/quote.png"}
                  alt="Quote"
                  width={24}
                  height={24}
                />
              </div>
              <blockquote className="text-xs text-[#101C45] leading-[20px] mt-3">
                “The doctor appointment app has been great for me. Scheduling
                appointments and getting medication reminders is much easier,
                and I love the option for virtual consultations. I'd recommend
                this app to others.”
              </blockquote>
            </div>
            <div>
              <Image
                src={"/holadok/doctor.png"}
                alt="Doctor"
                width={530}
                height={794}
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#203271] w-full p-[40px] grid grid-cols-3 gap-8">
          <div
            className={`${dmsans.className} text-white flex justify-between items-start gap-[25px] max-w-[359px]`}
          >
            <Image
              src={"/holadok/calendar.png"}
              alt="Calendar"
              width={40}
              height={40}
            />
            <div>
              <h4 className="text-lg font-bold">
                Online appointment scheduling
              </h4>
              <p className="text-base leading-[26px] font-normal mt-[10px]">
                Allows users to schedule appointmens with their healthcare
                provider through the app
              </p>
            </div>
          </div>
          <div
            className={`${dmsans.className} text-white flex justify-between items-start gap-[25px] max-w-[359px]`}
          >
            <Image
              src={"/holadok/bell.png"}
              alt="Bell"
              width={40}
              height={40}
            />
            <div>
              <h4 className="text-lg font-bold">Medication reminders</h4>
              <p className="text-base leading-[26px] font-normal mt-[10px]">
                Allows users to schedule appointments with their healthcare
                provider through the app.
              </p>
            </div>
          </div>
          <div
            className={`${dmsans.className} text-white flex justify-between items-start gap-[25px] max-w-[359px]`}
          >
            <Image
              src={"/holadok/camera.png"}
              alt="Camera"
              width={40}
              height={40}
            />
            <div>
              <h4 className="text-lg font-bold">Virtual consulations</h4>
              <p className="text-base leading-[26px] font-normal mt-[10px]">
                Allows users to schedule appointments with their healthcare
                provider through the app.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section end */}
    </main>
  );
}
