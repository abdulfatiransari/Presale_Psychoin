import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import LazyImage from "../LazyImage";

const Earn = () => {
  return (
    // <div className="flex px-28 max-md:px-8 gap-8 md:gap-[150px] mt-10 max-lg:flex-wrap-reverse max-md:flex-wrap-reverse max-sm:flex-wrap-reverse justify-center" >
    <div className="flex flex-col lg:flex-row justify-center items-center gap-15 mt-20 lg:gap-20  w-full max-w-[1100px] mx-auto  " >
      <div className="w-full sm:max-w-[500px] lg:max-w-[581px]  px-6 justify-center flex order-1  lg:order-none ">
        <div
          //   className="rounded-t-[30px] px-6 pt-6  md:pt-8 max-sm:px-6  border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1
          // flex justify-center items-center w-[445px] h-[430px] max-md:w-full max-md:h-full max-sm:w-full max-sm:h-full max-xl1:w-full max-lg1:w-full max-md1:w-full"
          className=" rounded-t-[30px] px-6 pt-6 border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 w-full xs:max-w-[420px] md:max-w-[581px] "

          style={{
            background: "radial-gradient(at center top, #222833, #0C0C0C)",
          }}
        >
          <LazyImage
            src={"/img/success.gif"}
            // className="!w-[383px]  md:!h-[300px] max-sm:h-[300px]  object-contain max-md:h-[400px] max-lg:h-[450px]"
            // className="w-[383px] !h-[250px] md:!h-[400px]"
            className="w-full"
            width={100}
            height={100}
            alt="coin"
            style={{ objectPosition: 'bottom', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className="flex justify-center  items-center lg:mt-0  mt-6 md:max-w-[538px] w-full px-6  ">
        <div className="flex flex-col max-w-[430px] md:max-w-[536px] ">
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
            Invest in Personal Growth
          </h3>
          <p className="text-[18px] text-[#CDCDCD] leading-[28.8px] mb-4 max-md:text-[18px] max-sm:text-[16px]">
            With PSYCHOIN, every action towards your well-being is an investment in your future. Engage in our vibrant community, share your journey, and unlock new dimensions of mental health.          </p>
          {/* <div className="flex justify-start items-center mt-4">
            <Button className="font-semibold text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
              Join Us
            </Button>
          </div> */}
        </div>
      </div>


    </div>
  );
};

export default Earn;
