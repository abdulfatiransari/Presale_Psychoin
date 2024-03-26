import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import SlidingText from "./textSlider";
import Community from "./sections/Communities";
import PlayCards from "./sections/PlayCards";
import Play from "./sections/Play";
import Earn from "./sections/Earn";
import Build from "./sections/Build";
import OwnWorld from "./sections/OwnWorld";
import Investors from "./sections/Investors";
import Players from "./sections/Players";
import Contact from "./sections/Contact";

export default function Banner() {
  return (
    <div>
    <div className="flex pl-28 max-md:px-8 max-md:justify-center justify-between item-center">
      <div className="flex flex-col py-12 gap-2 w-[530px] ">
        <div className="flex gap-4 items-center">
          <Image src={"/img/PSYCHOIN.png"} alt="logo" width={45} height={45} />
          <p className="font-bold text-[32px] text-[#6D00CC] max-md:text-[28px] max-sm:text-[24px]">
            PSYCHOIN
          </p>
        </div>
        <h3 className="text-[48px] font-semibold text-white leading-[67.2px] max-md:text-[32px] max-sm:text-[28px] max-md:leading-10 max-sm:leading-10">
        A Revolutionary Approach to Well-being
        </h3>
        <p className="text-[24px] text-[#CDCDCD] mt-4 leading-[38.4px] max-md:text-[20px] max-sm:text-[18px] max-md:leading-8 max-sm:leading-8">
        Dive into Self-Harbor, where the latest neuroscience and psychology empower a community dedicated to democratizing well-being. With Psychoin token at its core, unlock a new dimension of mental health and personal development.
        </p>
        <div className="flex gap-4 mt-4">
          <Button
            className="font-semibold flex text-white rounded-[100px] px-8 py-6 text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(145, 173, 186, 0.8) -11.36%, rgba(32, 81, 102, 0.096) 104.55%)",
              border: "1px solid #FFFFFF",
            }}
          >
            Join The Community
          </Button>
        </div>
      </div>
      <div className="flex flex-col relative max-md:hidden items-end">
        <div className="flex absolute mt-6 pr-16">
        <Button className="font-semibold text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
          Join Us
        </Button>
        </div>
        <div className="w-full h-full flex">
        <Image
          src={"/img/landingBanner.gif"}
          width={745}
          height={100}
          alt="banner"
        />
        </div>
      </div>
    </div>
    <Image src={"/img/Line 2.png"} alt="line" width={0} height={0}  className="w-full h-[1px] mt-10"/>
    <SlidingText/>
    <Image src={"/img/Line 2.png"} alt="line" width={0} height={0}  className="w-full h-[1px] mb-10"/>
    <Community/>
    <PlayCards/>
    <Play/>
    <Earn/>
    <Build/>
    <OwnWorld/>
    <Image src={"/img/Line 2.png"} alt="line" width={0} height={0}  className="w-full h-[1px] mt-10"/>
    <SlidingText/>
    <Image src={"/img/Line 2.png"} alt="line" width={0} height={0}  className="w-full h-[1px] mb-10"/>
    <Investors/>
    {/* <Players/> */}
    <Contact/>
    </div>
  );
}

