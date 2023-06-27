import { Source_Sans_Pro } from "next/font/google";
import Image from "next/image";
import React from "react";

type Props = {
  imageUrl:
    | "ic_feature_1.png"
    | "ic_feature_2.png"
    | "ic_feature_3.png"
    | "ic_feature_4.png"
    | "ic_feature_5.png"
    | "ic_feature_6.png";
  title: string;
  features: { value: string }[];
};

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export default function CardFeature({ imageUrl, title, features }: Props) {
  console.log(features);

  return (
    <div
      className={`bg-white p-[30px] shadow-[0px_30px_60px_0px_rgba(58,58,244,0.10)] rounded-[3px] ${sourceSansPro.className}`}
    >
      {/* title */}
      <div className="flex items-center gap-4">
        <Image
          src={`/hoster-support/${imageUrl}`}
          alt="Feature 1"
          width={50}
          height={50}
        />
        <h2 className="text-lg font-bold text-[#060619]">{title}</h2>
      </div>
      {/* List */}
      <div className="mt-5">
        <ul>
          {features.map((item, index) => {
            return (
              <li
                className="flex items-center gap-2 text-base font-semibold text-[#060619] mb-5"
                key={index}
              >
                <Image
                  src={"/hoster-support/ic_list.svg"}
                  alt="IC LIST"
                  width={20}
                  height={20}
                />
                <span>{item.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
