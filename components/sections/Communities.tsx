import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import LazyImage from "../LazyImage";

const Community = () => {
  return (
    <div id="about" className="flex px-28 max-md:px-8  gap-6  md:gap-[8rem] mt-20 max-md:flex-col max-lg:flex-wrap max-md:flex-wrap max-sm:flex-wrap justify-center" >
      <div
        className="rounded-t-[30px] px-6 pt-14  max-sm:px-6 max-sm:pt-6 flex justify-center items-center border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 w-[538px] h-[460px] max-md:w-full max-md:h-full max-sm:w-full max-sm:h-full max-xl1:w-full max-lg1:w-full max-md1:w-full"
        style={{
          background: "radial-gradient(at center top, #222833, #0C0C0C)",
        }}
      >
        <LazyImage
          src={"/img/communityGif.gif"}
          // className="w-[300px] h-[395px] max-sm:h-[360px]  max-md:h-[400px] max-lg:h-[450px]"
          className="w-[383px] !h-[370px] md:!h-[400px]"
          style={{ objectPosition: 'center', objectFit: 'cover' }}
          width={100}
          height={100}
          alt="coin"
        />
      </div>
      <div className="flex items-center justify-center max-w-[550px]">
        <div className="flex flex-col ">
          <div className="flex gap-2 ">
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
            Join a vibrant community on a collective quest to make well-being
            accessible to all.
          </p>
          <p className="text-[18px] text-[#CDCDCD] leading-[28.8px] mb-4">
            With Psychoin token fueling our journey, every step you
            take in personal growth is met with celebration
            and rewards.
          </p>
          <p className="text-[18px] text-[#CDCDCD] leading-[28.8px]">
            Join us in shaping our collective journey, one supportive gesture at a time.
          </p>
          {/* <div className="flex justify-start items-center mt-6">
            <Button className="font-semibold text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
              Join Us
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Community;