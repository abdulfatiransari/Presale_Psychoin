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
    <div className="flex pl-28 justify-between item-center">
      <div className="flex flex-col py-12 gap-2 w-[530px] ">
        <div className="flex gap-4 items-center">
          <Image src={"/img/PSYCHOIN.png"} alt="logo" width={45} height={45} />
          <p className="font-bold text-[32px] text-[#6D00CC]">
            PSYCHOIN
          </p>
        </div>
        <h3 className="text-[48px] font-semibold text-white leading-[67.2px]">
          Explore a New Type of Gameplay
        </h3>
        <p className="text-[24px] text-[#CDCDCD] mt-4 leading-[38.4px]">
          Make your home in a world of unlimited adventure. Master skills and
          play with friends. Build new communities.
        </p>
        <div className="flex gap-4 mt-16">
          <Button className="font-semibold flex text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
            Play For Free
          </Button>
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
      <div className="flex flex-col relative">
        <div className="flex justify-end pr-[70px] mt-6">
        <Button className="font-semibold absolute flex justify-end text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
          Play Now
        </Button>
        </div>
        <div className="w-full h-full">
        <Image
          src={"/img/banner.gif"}
          width={745}
          height={100}
          alt="banner"
        />
        </div>
      </div>
    </div>
    <Image src={"/img/Line 2.png"} alt="line" width={0} height={0}  className="w-full mt-10"/>
    <SlidingText/>
    <Image src={"/img/Line 2.png"} alt="line" width={0} height={0}  className="w-full mb-10"/>
    <Community/>
    <PlayCards/>
    <Play/>
    <Earn/>
    <Build/>
    <OwnWorld/>
    <Image src={"/img/Line 2.png"} alt="line" width={0} height={0}  className="w-full mt-10"/>
    <SlidingText/>
    <Image src={"/img/Line 2.png"} alt="line" width={0} height={0}  className="w-full mb-10"/>
    <Investors/>
    <Players/>
    <Contact/>
    </div>
  );
}

