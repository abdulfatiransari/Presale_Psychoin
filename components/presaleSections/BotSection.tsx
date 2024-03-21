import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const BotSections = () => {
  return (
    <div className="flex flex-col w-full px-28 py-10 gap-2 justify-center items-center">
      <div className="flex gap-2 items-center">
        <Image src={"/img/PSYCHOIN.png"} alt="logo" width={25} height={25} />
        <p className="font-semibold text-[18px] text-white">PSYCHOIN</p>
      </div>
      <h3 className="text-[56px] font-semibold text-[#6D00CC] leading-[67.2px]">
        Most Powerful Bot Ever
      </h3>
      <p className="text-[18px] text-[#CDCDCD] text-center mt-4 leading-[28.4px]">
        Phychoin isn't just another trading bot; it's a game-changer.It's not
        just powerful - it's the epitome of automated trading. Outmaneuver even
        the most sophisticated institutional traders with us, today.
      </p>
      <div className="flex gap-4 mt-6 mb-10">
        <Button className="font-semibold flex text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
          Whitepaper
        </Button>
      </div>

      <table className="w-full border-collapse border border-slate-500 ...">
        <tbody>
          <tr>
            <td className="py-6 px-10  w-[330px] text-center border border-slate-700 ... ">
              <div className="flex flex-col justify-center items-center gap-2">
                <Image
                  src={"/img/Icon1.svg"}
                  width={40}
                  height={40}
                  alt="icon"
                />
                <span className="text-[24px] font-semibold leading-6">
                  Institutional Grade Performance
                </span>
                <p className="text-[16px] text-[#CDCDCD] mt-4">
                  Phychoint delivers an elegant, non-custodial trading solution
                  on Telegram. Take pride in your property rights!
                </p>
              </div>
            </td>
            <td className="py-6 px-10 w-[330px] text-center border border-slate-700 ... ">
              <div className="flex flex-col justify-center items-center gap-2">
                <Image
                  src={"/img/Icon2.svg"}
                  width={40}
                  height={40}
                  alt="icon"
                />
                <span className="text-[24px] font-semibold leading-7">
                  Not Your Keys Not Your Coins
                </span>
                <p className="text-[16px] text-[#CDCDCD] mt-4">
                  With our carefully curated TMA at its core, your user
                  experience will be nothing short of incredible.
                </p>
              </div>
            </td>
            <td className="py-6 px-10  w-[330px] text-center border border-slate-700 ... ">
              <div className="flex justify-center items-center mb-2">
                <Image
                  src={"/img/Icon3.svg"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </div>
              <span className="text-[24px] font-semibold leading-6">
                Butter Smooth User Experience
              </span>
              <p className="text-[16px] text-[#CDCDCD] mt-4">
                Phychoint delivers an elegant, non-custodial trading solution on
                Telegram. Take pride in your property rights!
              </p>
            </td>
          </tr>
          <tr>
            <td className="py-6 px-10  w-[330px] text-center border border-slate-700 ... ">
              <div className="flex justify-center items-center">
                <Image
                  src={"/img/Icon4.svg"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </div>
              <span className="text-[24px] font-semibold leading-6">
                Lightning-Fast Execution
              </span>
              <p className="text-[16px] text-[#CDCDCD] mt-4">
                Our automated systems are designed to outperform. Experience
                unmatched speed in every action you take.
              </p>
            </td>
            <td className="py-6 px-10  w-[330px] text-center border border-slate-700 ... ">
              <div className="flex justify-center items-center">
                <Image
                  src={"/img/Icon5.svg"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </div>
              <span className="text-[24px] font-semibold leading-6">
                Say Good-bye to Scams
              </span>
              <p className="text-[16px] text-[#CDCDCD] mt-4">
                Our Anti-Rug algorithms preemptively detecting risks, ensuring
                your assets are secured before everyone else.
              </p>
            </td>
            <td className="py-6 px-10  w-[330px] text-center border border-slate-700 ... ">
              <div className="flex justify-center items-center">
                <Image
                  src={"/img/Icon6.svg"}
                  width={40}
                  height={40}
                  alt="icon"
                />
              </div>
              <span className="text-[24px] font-semibold leading-6">
                Designed for Tomorrow
              </span>
              <p className="text-[16px] text-[#CDCDCD] mt-4">
                Phychoin is designed to thrive with DeFi's Progression. Stay
                ahead of the curve with our ever-adapting toolset!
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BotSections;
