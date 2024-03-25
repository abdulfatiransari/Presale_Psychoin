import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const BotSections = () => {
    return (
        <div className="flex flex-col w-full px-28 max-md:px-10 max-sm:px-8 py-10 gap-2 justify-center items-center">
            <div className="flex gap-2 items-center">
                <Image src={"/img/PSYCHOIN.png"} alt="logo" width={25} height={25} className="w-[25px] h-[25px]" />
                <p className="font-semibold text-[18px] text-white">PSYCHOIN</p>
            </div>
            <h3 className="text-[56px] font-semibold text-[#6D00CC] leading-[67.2px]">Most Powerfull Bot Ever</h3>
            <p className="text-[18px] text-[#CDCDCD] text-center mt-4 leading-[28.4px]">
                Phychoin isn't just another trading bot; it's a game-changer.It's not just powerfull - it's the epitome
                of automated trading. Outmaneuver even the most sophisticated institutional traders with us, today.
            </p>
            <div className="flex gap-4 mt-6 mb-10">
                <Button className="font-semibold flex text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
                    Whitepaper
                </Button>
            </div>
            <div className="overflow-x-scroll scrollStyle w-full">
                <table className="w-full border-collapse border border-slate-500">
                    <tbody>
                        <tr>
                            <td className="py-6 px-10 max-sm:px-2 max-sm:py-2 max-w-[330px] max-sm:w-[200px] max-sm:h-[200px] text-center border border-slate-700">
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <Image src={"/img/Icon1.svg"} width={40} height={40} alt="icon" />
                                    <span className="text-[24px] font-semibold leading-6 max-sm:text-[18px]">
                                        Institutional Grade Performance
                                    </span>
                                    <p className="text-[16px] text-[#CDCDCD] mt-4 max-sm:text-[14px]">
                                        Phychoint delivers an elegant, non-custodial trading solution on Telegram. Take
                                        pride in your property rights!
                                    </p>
                                </div>
                            </td>
                            <td className="py-6 px-10 max-sm:px-2 max-sm:py-2 max-w-[330px] max-sm:w-[200px] max-sm:h-[200px] text-center border border-slate-700">
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <Image src={"/img/Icon2.svg"} width={40} height={40} alt="icon" />
                                    <span className="text-[24px] font-semibold leading-6 max-sm:text-[18px]">
                                        Not Your Keys Not Your Coins
                                    </span>
                                    <p className="text-[16px] text-[#CDCDCD] mt-4 max-sm:text-[14px]">
                                        With our carefully curated TMA at its core, your user experience will be nothing
                                        short of incredible.
                                    </p>
                                </div>
                            </td>
                            <td className="py-6 px-10 max-sm:px-2 max-sm:py-2 max-w-[330px] max-sm:w-[200px] max-sm:h-[200px] text-center border border-slate-700">
                                <div className="flex justify-center items-center mb-2">
                                    <Image src={"/img/Icon3.svg"} width={40} height={40} alt="icon" />
                                </div>
                                <span className="text-[24px] font-semibold leading-6 max-sm:text-[18px]">
                                    Butter Smooth User Experience
                                </span>
                                <p className="text-[16px] text-[#CDCDCD] mt-4 max-sm:text-[14px]">
                                    Phychoint delivers an elegant, non-custodial trading solution on Telegram. Take
                                    pride in your property rights!
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-6 px-10 max-sm:px-2 max-sm:py-2 max-w-[330px] max-sm:w-[200px] max-sm:h-[200px] text-center border border-slate-700">
                                <div className="flex justify-center items-center">
                                    <Image src={"/img/Icon4.svg"} width={40} height={40} alt="icon" />
                                </div>
                                <span className="text-[24px] font-semibold leading-6 max-sm:text-[18px]">Lightning-Fast Execution</span>
                                <p className="text-[16px] text-[#CDCDCD] mt-4 max-sm:text-[14px]">
                                    Our automated systems are designed to outperform. Experience unmatched speed in
                                    every action you take.
                                </p>
                            </td>
                            <td className="py-6 px-10 max-sm:px-2 max-sm:py-2 max-w-[330px] max-sm:w-[200px] max-sm:h-[200px] text-center border border-slate-700">
                                <div className="flex justify-center items-center">
                                    <Image src={"/img/Icon5.svg"} width={40} height={40} alt="icon" />
                                </div>
                                <span className="text-[24px] font-semibold leading-6 max-sm:text-[18px]">Say Good-bye to Scams</span>
                                <p className="text-[16px] text-[#CDCDCD] mt-4 max-sm:text-[14px]">
                                    Our Anti-Rug algorithms preemptively detecting risks, ensuring your assets are
                                    secured before everyone else.
                                </p>
                            </td>
                            <td className="py-6 px-10 max-sm:px-2 max-sm:py-2 max-w-[330px] max-sm:w-[200px] max-sm:h-[200px] text-center border border-slate-700">
                                <div className="flex justify-center items-center">
                                    <Image src={"/img/Icon6.svg"} width={40} height={40} alt="icon" />
                                </div>
                                <span className="text-[24px] font-semibold leading-6 max-sm:text-[18px]">Designed for Tomorrow</span>
                                <p className="text-[16px] text-[#CDCDCD] mt-4 max-sm:text-[14px]">
                                    Phychoin is designed to thrive with DeFi's Progression. Stay ahead of the curve with
                                    our ever-adapting toolset!
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BotSections;
