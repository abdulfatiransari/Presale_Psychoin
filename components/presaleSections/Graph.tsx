import { Button } from "@nextui-org/react";
import Chart from "./Chart";
import Image from "next/image";
import React from "react";

const Graph = () => {
  return (
    <div className="flex justify-center items-center w-full px-28 max-sm:px-10 max-md:px-10 mt-10">
       <div className="flex flex-col w-full">
        <div
          className="rounded-t-[30px] border-t-1 border-t-gray-300 px-28 py-10 max-sm:py-2 max-md:py-6 max-sm:px-6 max-md:px-6 flex justify-center items-center gap-6"
          style={{
            background:
              "linear-gradient(0deg, rgba(109, 0, 204, 0.5), rgba(109, 0, 204, 0.5)), radial-gradient(100% 100% at 50% 0%, rgba(131, 172, 240, 0.2) 0.27%, rgba(131, 172, 240, 0) 100%)"
          }}
        >
          <div className="flex flex-col justify-center items-center pt-6 pb-20 max-sm:py-10 gap-2 w-full">
        <div className="flex gap-2 justify-center items-center mb-4">
          <Image src={"/img/PSYCHOIN.png"} alt="logo" width={25} height={25} />
          <p className="font-semibold text-[18px] text-white ">
            PSYCHOIN
          </p>
        </div>
        <h3 className="text-[48px] font-semibold text-[#D9D9D9] leading-[67.2px] max-sm:text-[32px] max-sm:leading-[40px]">
        Genesis Psychoin Allocation
        </h3>
        <p className="text-[18px] text-[#CDCDCD] mt-2 leading-[38.4px] max-sm:leading-[28px]">
        Psychoin token holders will receive up to 50% of the platform revenue share.
        </p>
      </div>
        </div>
        <div
          className="rounded-[30px] bg-[#1A1D22] px-28 py-10 max-sm:px-4 pt-10 pb-6 flex justify-center items-center gap-6 relative top-[-28px] z-0"
        //   style={{
        //     background:
        //       "linear-gradient(0deg, rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.67)), radial-gradient(54.52% 54.52% at 50% 0%, rgba(131, 172, 240, 0.2) 0.27%, rgba(131, 172, 240, 0) 100%)",
        //   }}
        >
          <Image
            src={"/img/Image.svg"}
            className="w-full h-full"
            width={100}
            height={100}
            alt="chart"
          />
          {/* <Chart/> */}
        </div>
      </div>
    </div>
  );
};

export default Graph;
