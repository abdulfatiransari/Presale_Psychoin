import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <div className="flex px-28 max-md:px-8 gap-10 mt-20 max-md:flex-col max-lg:flex-wrap max-md:flex-wrap max-sm:flex-wrap justify-center" >
      <div 
        className="rounded-t-[30px] px-6 py-4 max-sm:px-6 max-sm:py-6 flex justify-center items-center border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 w-[538px] h-[620px] max-md:w-full max-md:h-full max-sm:w-full max-sm:h-full max-xl1:w-full max-lg1:w-full max-md1:w-full"
        style={{
          background: "radial-gradient(at center top, #222833, #0C0C0C)",
        }}
      >
        <Image
          src={"/img/growth.gif"}
          className="w-[383px] h-[517px]"
          width={100}
          height={100}
          alt="coin"
        />
      </div>
      <div className="flex items-center">
        <div className="flex flex-col w-full">
          <div className="flex gap-2">
            <Image
              src={"/img/PSYCHOIN.png"}
              alt="logo"
              width={25}
              height={25}
            />
            <p className="font-bold text-[18px] text-white">PSYCHOIN</p>
          </div>
          <h3 className="text-[48px] font-semibold text-[#6D00CC] leading-[55px] mb-6 max-md:text-[32px] max-sm:text-[28px] max-sm:leading-10 max-md:leading-10">
            Where Communities Come To Life
          </h3>
          <p className="text-[18px] text-[#CDCDCD] leading-[28.8px] mb-4 max-md:text-[18px] max-sm:text-[16px]">
            A community over 120k strong is stepping into a new era of mental
            well-being.
          </p>
          <p className="text-[18px] text-[#CDCDCD] leading-[28.8px] mb-4">
            Your achievements in personal growth are recognized and rewarded
            with PSYCHOIN TOKEN, laying the foundation for a healthier, happier
            world.
          </p>
          <p className="text-[18px] text-[#CDCDCD] leading-[28.8px]">
            A dynamic community awaits, where your contributions shape our
            collective future.
          </p>
          <div className="flex justify-start items-center mt-6">
          <Button className="font-semibold text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
          Join Us
        </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
