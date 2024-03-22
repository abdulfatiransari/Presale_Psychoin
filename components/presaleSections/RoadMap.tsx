import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const cardData = [
  {
    id: 1,
    heading: "“Now!”",
    list1: "Founding team formation",
    list2: "Smart contract development",
    list3: "Community formation",
    list4: "Marketing ramp up",
  },
  {
    id: 2,
    heading: "“Next!”",
    list1: "$BITBOT token launch",
    list2: "Listing on DEXes and CEXes",
    list3: "Top influencer partnership",
    list4: "Telegram bot launch",
  },
  {
    id: 3,
    heading: "“Beyond!”",
    list1: "Bitbot native mobile app",
    list2: "Cross chain support",
    list3: "Enhanced community features",
    list4: "Enhanced liquidity",
  },
];

const RoadMap = () => {
  return (
    <div className="flex flex-col w-full px-28 py-10 gap-4  max-sm:px-8 max-md:px-10 max-md:mb-10">
      <div className="flex flex-col">
        <p className="text-[18px] max-sm:text-[14px] text-[#CDCDCD] font-semibold mb-1">ROADMAP</p>
        <p className="text-[24px] max-md:text-[22px] max-sm:text-[18px] text-white font-semibold mb-1">
          Bitbot's Odyssey:
        </p>
        <h1 className="text-[#6D00CC] text-[48px] max-md:text-[32px] max-sm:text-[28px] font-semibold">
          Revolutionizing Trading in 2024 and Beyond.
        </h1>
      </div>
      <div className="mt-6 flex justify-between max-sm:justify-center  max-md:justify-center items-center gap-6 max-sm:flex-wrap max-md:flex-wrap">
        {cardData.map((card, idx) => (
          <div key={idx}>
            <div className="relative w-full">
              <Image
                src={"/img/BackgroundDiv.svg"}
                className="w-full h-full"
                width={100}
                height={100}
                alt="background"
              />
              <div className="absolute inset-0 flex flex-col justify-start items-center mt-8">
                <div className="px-2 mb-6">
                  <div className="bg-[#1A1D22] w-20 h-20 mb-4 rounded-[100px] overflow-hidden">
                    <h4 className="text-[#6D00CC] text-center text-[48px] font-semibold">
                      {card.id}
                    </h4>
                  </div>
                  <span className="text-white font-semibold text-[20px]">
                    {card.heading}
                  </span>
                  <ul className="list-disc pl-6">
                    <li className="text-[#CDCDCD] text-[16px]">{card.list1}</li>
                    <li className="text-[#CDCDCD] text-[16px]">{card.list2}</li>
                    <li className="text-[#CDCDCD] text-[16px]">{card.list3}</li>
                    <li className="text-[#CDCDCD] text-[16px]">{card.list4}</li>
                  </ul>
                </div>
                <Image
                  src={"/img/Line 8.png"}
                  alt="line"
                  width={0}
                  height={0}
                  className="w-full h-[1px] my-6"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
