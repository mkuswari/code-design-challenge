import React, { useEffect } from "react";
import { Source_Sans_Pro } from "next/font/google";
import Image from "next/image";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export default function TwitterComment() {
  useEffect(() => {
    document.title = "Challenge 3 | Twitter Comment Section";
  }, []);

  return (
    <main
      className={`bg-[#F1F8FF] min-h-screen antialiased flex justify-center items-center ${sourceSansPro.className}`}
    >
      <div className="w-[635px] bg-white p-[30px] shadow-[0px_30px_60px_0px_rgba(2,80,124,0.15);] rounded-lg">
        <h2 className="font-semibold text-[28px] text-black">Comments</h2>
        <div className="mt-5 shadow-[0px_4px_8px_0px_rgba(10,58,100,0.15);] border-[#0089FF] border p-5 rounded-lg">
          <div className="flex gap-2 items-center mb-[15px]">
            <Image
              src={"/twitter-comment/avatar_1.png"}
              width={40}
              height={40}
              alt="Avatar User"
            />
            <p className="font-semibold text-lg">John Doe</p>
          </div>
          <article className="text-base leading-[28px]">
            I just tried this recipe and it was amazing! The instructions were
            clear and easy to follow, and the end result was delicious. I will
            definitely be making this again. Thanks for sharing!
          </article>
          <hr className="my-[15px]" />
          <div className="flex justify-between">
            <div className="flex flex-row gap-3">
              <Image
                src={"/twitter-comment/bold_icon.svg"}
                alt="Bold Icon"
                width={20}
                height={20}
              />
              <Image
                src={"/twitter-comment/italic_icon.svg"}
                alt="Bold Icon"
                width={20}
                height={20}
              />
              <Image
                src={"/twitter-comment/link_icon.svg"}
                alt="Bold Icon"
                width={20}
                height={20}
              />
            </div>
            <button className="text-base text-white font-semibold px-5 py-2 rounded-lg bg-[#0089FF]">
              Comment
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex gap-2 items-center mb-[15px]">
            <Image
              src={"/twitter-comment/avatar_2.png"}
              width={40}
              height={40}
              alt="Avatar User"
            />
            <p className="font-semibold text-lg">Jane Doe</p>
          </div>
          <article className="text-base leading-[28px] text-black/60">
            I really appreciate the insights and perspective shared in this
            article. It's definitely given me something to think about and has
            helped me see things from a different angle. Thank you for writing
            and sharing!
          </article>
          <div className="flex flex-row gap-3 mt-[15px] mb-[40px]">
            <button className="bg-[#F1F2F3] border-[#E0E0E1] border p-[5px] rounded-[3px]">
              <Image
                src={"/twitter-comment/arrow_up.svg"}
                alt="Bold Icon"
                width={20}
                height={20}
              />
            </button>
            <button className="bg-[#F1F2F3] border-[#E0E0E1] border p-[5px] rounded-[3px]">
              <Image
                src={"/twitter-comment/arrow_down.svg"}
                alt="Bold Icon"
                width={20}
                height={20}
              />
            </button>
          </div>
          <button className="p-[10px] w-full bg-[#F1F2F3] border-[#E0E0E1] border rounded-md text-sm font-semibold">
            Load More
          </button>
        </div>
      </div>
    </main>
  );
}
