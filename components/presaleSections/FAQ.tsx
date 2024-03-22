import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const FAQ = () => {
  return (
    <div className="flex justify-center items-center w-full mt-10 px-28 gap-20 max-sm:mt-0 max-sm:px-6 max-sm:flex-wrap">
      <div className="w-[200px] max-sm:w-full  max-md:w-[150px]  mb-16 max-sm:mb-0 max-sm:mt-10">
        <h1 className="text-[48px] text-center max-sm:text-[28px] max-md:text-[32px] text-[#6D00CC] font-semibold">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="flex flex-col w-[280px]">
        <div className="flex justify-between w-full">
          <span>What is Crypto?</span>
          <Image
            src={"/img/VectorArrow.svg"}
            className="cursor-pointer"
            width={8}
            height={8}
            alt="icon"
          />
        </div>
        <div className="border-1 border-white mt-2 mb-6"></div>
        <div className="flex justify-between w-full">
          <span>Where to buy crypto?</span>
          <Image
            src={"/img/VectorArrow.svg"}
            className="cursor-pointer"
            width={8}
            height={8}
            alt="icon"
          />
        </div>
        <div className="border-1 border-white mt-2 mb-6"></div>
        <div className="flex justify-between w-full">
          <span>How to earn crypto?</span>
          <Image
            src={"/img/VectorArrow.svg"}
            className="cursor-pointer"
            width={8}
            height={8}
            alt="icon"
          />
        </div>
        <div className="border-1 border-white mt-2 mb-6"></div>
        <div className="flex justify-between w-full">
          <span>How to earn rewards?</span>
          <Image
            src={"/img/VectorArrow.svg"}
            className="cursor-pointer"
            width={8}
            height={8}
            alt="icon"
          />
        </div>
        <div className="border-1 border-white mt-2 mb-6"></div>
      </div>
    </div>
  );
};

export default FAQ;
