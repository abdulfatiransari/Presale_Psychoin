import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import LazyImage from "../LazyImage";

const Build = () => {
  return (
    // <div className="flex px-28 max-md:px-8 gap-10 mt-20 max-md:flex-col max-md:flex-wrap max-lg:flex-wrap max-sm:flex-wrap justify-center" >
    <div className="flex flex-col lg:flex-row justify-center items-center gap-15 mt-20 lg:gap-20  w-full max-w-[1100px] mx-auto  " >
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
          <h3 className="text-[48px] font-bold text-[#6D00CC] leading-[55px] mb-6 max-md:text-[32px] max-sm:text-[28px] max-sm:leading-10 max-md:leading-10">
            Access Psychoeducational Resources
          </h3>
          <p className="text-[18px] text-[#CDCDCD] leading-[28.8px] mb-4 max-md:text-[18px] max-sm:text-[16px] max-w-[425px]">
            Utilize Psychoin to break barriers to mental health services. Embark on a holistic well-being journey with a range of therapeutic tools and educational materials crafted by field experts. Within our supportive ecosystem, we honor each individual's unique path and pace toward personal development.
          </p>
          {/* <div className="flex justify-start items-center mt-6">
            <Button className="font-semibold text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
              Join Us
            </Button>
          </div> */}
        </div>
      </div>

      <div className="w-full sm:max-w-[500px] lg:max-w-[581px]  px-6 justify-center flex  ">
        <div
          //   className="rounded-t-[30px] px-6 pt-6  md:pt-8 max-sm:px-6  border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1
          // flex justify-center items-center w-[445px] h-[430px] max-md:w-full max-md:h-full max-sm:w-full max-sm:h-full max-xl1:w-full max-lg1:w-full max-md1:w-full"
          className=" rounded-t-[30px] px-6 pt-6 border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 w-full xs:max-w-[420px] md:max-w-[581px] "

          style={{
            background: "radial-gradient(at center top, #222833, #0C0C0C)",
          }}
        >
          <LazyImage
            src={"/img/mentalHealth.gif"}
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

      {/* <div
        className="rounded-t-[30px] px-6 pt-32 md:pt-8 max-sm:px-6 border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1
        max-sm:pt-6 flex justify-center items-center  w-[445px] h-[430px] max-md:w-full max-md:h-full max-sm:w-full max-sm:h-full max-xl1:w-full max-lg1:w-full max-md1:w-full"
        style={{
          background: "radial-gradient(at center top, #222833, #0C0C0C)",
        }}
      >
        <LazyImage
          src={"/img/mentalHealth.gif"}
          // className="w-[383px] h-[457px] max-sm:h-[360px] max-md:h-[400px] max-lg:h-[450px]"
          // className="w-[383px] !h-[240px] md:!h-[400px]"
          className="w-[383px] !h-[370px] md:!h-[400px]"
          // style={{ objectPosition: 'top', objectFit: 'cover' }}

          width={100}
          height={100}
          alt="coin"
        />
      </div> */}
    </div>
  );
};

export default Build;
