import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { Source_Sans_Pro } from "next/font/google";
import CardFeature from "./components/CardFeature";
import Footer from "./components/Footer";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export default function HosterSupport() {
  useEffect(() => {
    document.title = "Challenge 09 | Hoster Support";
  }, []);

  return (
    <main className="min-h-screen bg-[#EEEEFF]">
      {/* Hero section start */}
      <section className="pt-14 pb-32 h-[577px] bg-gradient-to-b from-[#0F0F33] to-[#050517] relative overflow-hidden">
        <div className="container">
          <Navbar />

          <div className={`${sourceSansPro.className} max-w-xl mt-[75px]`}>
            <h2 className="text-4xl font-semibold text-white leading-[52px]">
              Support Center
            </h2>
            <p className="text-base text-white leading-[28px] mt-[10px] mb-[30px]">
              Browse through our frequently asked questions, tutorials, and
              other self-help resources to find the answers you need.
            </p>
            {/* Input search */}
            <div className="flex mb-5">
              <div className="relative w-full flex items-center">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                        stroke="black"
                        stroke-opacity="0.4"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 21L16.65 16.65"
                        stroke="black"
                        stroke-opacity="0.4"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  className="pl-10 pr-3 py-2 border border-gray-300 focus:outline-none h-[60px] w-full"
                  placeholder="Search..."
                />
                <button className="h-[60px] bg-[#3A3AF4] text-white px-[30px]">
                  Search
                </button>
              </div>
            </div>
            <div className="flex gap-[14px]">
              <p className="text-white text-opacity-60 text-base font-semibold tracking-[1.6px]">
                POPULAR:
              </p>
              <a
                href=""
                className="text-white text-base font-semibold underline"
              >
                What is hosting?
              </a>
              <a
                href=""
                className="text-white text-base font-semibold underline"
              >
                Why my website is slow?
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-10 -bottom-8">
          <Image
            src={"/hoster-support/pattern_1.png"}
            alt="Pattern"
            width={477}
            height={716}
          />
          {/* <Image src={"/hoster-support/pattern_2.png"} alt="Pattern" /> */}
        </div>
      </section>
      {/* Hero section end */}

      {/* Main content start */}
      <section className="py-[80px]">
        <div className="container">
          <div className="grid grid-cols-3 gap-y-[52px] gap-x-[30px]">
            <CardFeature
              imageUrl="ic_feature_1.png"
              title="Introduction to hosting"
              features={[
                { value: "What is web hosting?" },
                { value: "Types of web hosting" },
                { value: "How to choose a hosting provider" },
                { value: "Common hosting features to look for" },
                { value: "Pros and cons of different hosting types" },
              ]}
            />
            <CardFeature
              imageUrl="ic_feature_2.png"
              title="Setting up a website"
              features={[
                { value: "How to register a domain name" },
                { value: "How to set up a hosting account" },
                { value: "How to install and configure a CMS" },
                { value: "How to upload and manage website ..." },
                { value: "Tips for optimizing website performa ..." },
              ]}
            />
            <CardFeature
              imageUrl="ic_feature_3.png"
              title="Security and privacy"
              features={[
                { value: "How hosting providers protect web ..." },
                { value: "What is SSL and why is it important?" },
                { value: "How to secure a website with a firewall" },
                { value: "How to protect sensitive information ..." },
                { value: "Tips for avoiding common security ..." },
              ]}
            />
            <CardFeature
              imageUrl="ic_feature_4.png"
              title="Email hosting"
              features={[
                { value: "What is email hosting and why do ..." },
                { value: "How to set up and configure email ..." },
                { value: "Tips for managing and organizing email" },
                { value: "How to troubleshoot common email ..." },
                { value: "Pros and cons of different email ..." },
              ]}
            />
            <CardFeature
              imageUrl="ic_feature_5.png"
              title="E-commerce hosting"
              features={[
                { value: "What is e-commerce hosting and why ..." },
                { value: "How to choose an e-commerce hosting" },
                { value: "Tips for setting up and managing" },
                { value: "How to secure an e-commerce website" },
                { value: "Common e-commerce hosting features" },
              ]}
            />
            <CardFeature
              imageUrl="ic_feature_6.png"
              title="Advanced hosting concepts"
              features={[
                { value: "What is a server and how does it work?" },
                { value: "What is a DNS and how does it work?" },
                { value: "What is a CDN and how does it work?" },
                { value: "What is a load balancer?" },
                { value: "What is a reverse proxy?" },
              ]}
            />
          </div>
        </div>
      </section>
      {/* Main content end */}

      {/* Footer start */}
      <Footer />
      {/* Footer end */}
    </main>
  );
}
