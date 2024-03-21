import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Token = () => {
  return (
    <div className="flex flex-col w-full px-28 py-10 gap-2">
      <div className="flex justify-between items-center">
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
      <div className="flex justify-center items-center gap-20 mt-10">
        <div className="flex flex-col">
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
            className="w-[500px] my-8"
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
            className="w-[500px] my-8"
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
            className="w-[500px] my-8"
          />
        </div>
        <div className="relative w-full h-[620px] ">
        <Image
          src={"/img/Background.svg"}
          className="w-full h-full"
          width={100}
          height={100}
          alt="background"
        />
        <div className="absolute inset-0 flex justify-center items-center mt-20">
          <Image
            src={"/img/coin2.gif"}
            className="w-[383px] h-[410px]"
            width={100}
            height={100}
            alt="coin"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Token;
