import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Token = () => {
  return (
    <div className="flex flex-col w-full px-28 py-10 gap-2 max-sm:px-8 max-md:px-10">
      <div className="flex justify-between items-center max-sm:flex-wrap max-md:flex-wrap">
        <div className="flex flex-col">
          <p className="text-[18px] text-[#CDCDCD] font-semibold mb-1">
            TRADE, EARN, RETIRE
          </p>
          <h1 className="text-white text-[48px] font-semibold">
            $PSYCHOIN Token
          </h1>
        </div>
        <Button
          className="font-semibold flex text-white bg-transparent rounded-[100px] px-8 py-4 text-base"
          style={{
            border: "1px solid #FFFFFF",
          }}
        >
          Learn More
        </Button>
      </div>
      <div className="flex justify-between items-center gap-20 mt-10 max-sm:flex-wrap max-md:flex-wrap">
        <div className="flex flex-col w-full">
          <div className="flex gap-4 items-center">
            <Image
              src={"/img/IconToken1.svg"}
              width={40}
              height={40}
              alt="icon"
            />
            <span className="text-[32px] text-white font-semibold">
              Revenue Share
            </span>
          </div>
          <p className="text-[#CDCDCD] text-[18px] ml-14 mt-2">
            Rewards $PHYCHOIN holders with the platform's progressive growth.
            Best in the market, guaranteed.
          </p>
          <Image
            src={"/img/Line 8.png"}
            alt="line"
            width={0}
            height={0}
            className="w-[500px] h-[1px] my-8"
          />
          <div className="flex gap-4 items-center">
            <Image
              src={"/img/IconToken2.svg"}
              width={40}
              height={40}
              alt="icon"
            />
            <span className="text-[32px] text-white font-semibold">Perks</span>
          </div>
          <p className="text-[#CDCDCD] text-[18px] ml-14 mt-2">
            $PHYCHOIN holders indulge in unique, electrifying perks and
            airdrops.
          </p>
          <Image
            src={"/img/Line 8.png"}
            alt="line"
            width={0}
            height={0}
            className="w-[500px] h-[1px] my-8"
          />
          <div className="flex gap-4 items-center">
            <Image
              src={"/img/IconToken3.svg"}
              width={40}
              height={40}
              alt="icon"
            />
            <span className="text-[32px] text-white font-semibold">
              Deflationary
            </span>
          </div>
          <p className="text-[#CDCDCD] text-[18px] ml-14 mt-2">
            Phychoin will power strategic buybacks of $PHYCHOIN tokens and
            subsequent deliberate burn, constantly sculpturing its scarcity and
            enhancing value.
          </p>
          <Image
            src={"/img/Line 8.png"}
            alt="line"
            width={0}
            height={0}
            className="w-[500px] h-[1px] my-8"
          />
        </div>
        <div
          className="rounded-t-[30px] px-10 py-4 flex justify-center items-center border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 w-full"
          style={{
            background: "radial-gradient(at center top, #222833, #0C0C0C)",
          }}
        >
          <Image
              src={"/img/coin2.gif"}
              className="w-[383px] h-[410px] mt-20"
              width={100}
              height={100}
              alt="coin"
            />
        </div>
      </div>
    </div>
  );
};

export default Token;
