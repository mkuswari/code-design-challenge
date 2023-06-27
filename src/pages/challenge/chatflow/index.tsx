import { Source_Sans_Pro } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const source_sans_pro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export default function Chatflow() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = "Challenge 08 | ChatFlow PopUp";
  }, []);

  return (
    <main
      className={`min-h-screen bg-[#F1F7FF] relative ${source_sans_pro.className}`}
    >
      {/* PopUp Chatting */}
      <div
        className={`absolute bottom-[15%] right-10 w-[390px] rounded-lg bg-white shadow-[0px_30px_60px_0px_rgba(70,41,242,0.14)] overflow-hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Header */}
        <div className="bg-[#4629F2] p-[30px]">
          {/* Icon and close */}
          <div className="flex justify-between mb-[20px]">
            <div>
              <Image
                src={"/chatflow/logo.png"}
                alt="Logo"
                width={60}
                height={60}
              />
            </div>
            <div>
              <button
                className="bg-white bg-opacity-20 w-10 h-10 rounded-full flex justify-center items-center"
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src={"/chatflow/close_icon.svg"}
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white">ChatFlow</h2>
          <p className="text-base text-white mt-[5px]">
            A live chat interface that allows for seamless, natural
            communication and connection.
          </p>
        </div>
        {/* Chat container */}
        <div className="p-[30px]">
          {/* Chat Me */}
          <div className="flex flex-row justify-end mb-[20px]">
            <div>
              <div className="px-[15px] py-[10px] bg-[#4629F2] rounded-ss-[10px] rounded-ee-[10px] rounded-es-[10px]">
                <p className="text-base text-white">
                  Hello, how are you doing?
                </p>
              </div>
              <p className="text-sm text-[#0D082C66] text-opacity-40">
                08:15 AM
              </p>
            </div>
          </div>
          {/* Chat Person */}
          <div className="flex flex-row justify-start mb-[20px]">
            <div className="flex flex-row gap-[10px]">
              <div>
                <Image
                  src={"/chatflow/person.png"}
                  alt="Assistant"
                  width={40}
                  height={40}
                />
              </div>
              <div className="w-3/4">
                <p className="text-[#0D082C] text-base font-semibold">
                  Assistant
                </p>
                <div className="px-[15px] py-[10px] bg-[#F1F7FF] text-[#0D082C] mt-[5px] rounded-se-[10px] rounded-es-[10px] rounded-ee-[10px]">
                  <p className="text-base">
                    I'm doing well, thank you! How can I help you today?
                  </p>
                </div>
                <div className="flex justify-end">
                  <p className="text-sm text-[#0D082C66] text-opacity-40">
                    08:16 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Chat Me */}
          <div className="flex flex-row justify-end mb-[20px]">
            <div className="w-[90%]">
              <div className="px-[15px] py-[10px] bg-[#4629F2] rounded-ss-[10px] rounded-ee-[10px] rounded-es-[10px]">
                <p className="text-base text-white">
                  I have a question about the return policy for a product I
                  purchased.
                </p>
              </div>
              <p className="text-sm text-[#0D082C66] text-opacity-40">
                Just Now
              </p>
            </div>
          </div>
          {/* Chat Person */}
          <div className="flex flex-row justify-start mb-[20px]">
            <div className="flex flex-row gap-[10px]">
              <div>
                <Image
                  src={"/chatflow/person.png"}
                  alt="Assistant"
                  width={40}
                  height={40}
                />
              </div>
              <div className="w-3/4">
                <p className="text-[#0D082C] text-base font-semibold">
                  Assistant
                </p>
                <div className="px-[15px] py-[10px] bg-[#F1F7FF] text-[#0D082C] mt-[5px] rounded-se-[10px] rounded-es-[10px] rounded-ee-[10px]">
                  <div className="flex gap-[8px]">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#C7DFFF] animate-bounce"></div>
                    <div className="w-[15px] h-[15px] rounded-full bg-[#C7DFFF] animate-bounce"></div>
                    <div className="w-[15px] h-[15px] rounded-full bg-[#C7DFFF] animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Message container */}
        <div className="px-[30px] py-[20px]">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-[20px] items-center">
              <div>
                <Image
                  src={"/chatflow/smile_icon.svg"}
                  alt="Smile"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className="text-base text-[#0D082C99] text-opacity-60">
                  Reply...
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-[15px] items-center">
              <div>
                <Image
                  src={"/chatflow/gallery_icon.svg"}
                  alt="Gallery"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <button className="w-10 h-10 rounded-full bg-[#4629F2] flex justify-center items-center">
                  <Image
                    src={"/chatflow/arrow_right_icon.svg"}
                    alt="Send"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="absolute right-10 bottom-10">
        <button
          className="w-20 h-20 rounded-full bg-[#4629F2] shadow-[0px_30px_60px_0px_rgba(70,41,242,0.43)] flex justify-center items-center"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={"/chatflow/chat_icon.svg"}
            alt="Chat Icon"
            width={24}
            height={24}
          />
        </button>
      </div>
    </main>
  );
}
