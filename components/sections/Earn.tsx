import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Earn = () => {
  return (
    <div className="flex px-28 gap-10 mt-2">
      <div className="relative w-full h-[490px]">
        <Image
          src={"/img/Background.svg"}
          className="w-full h-full"
          width={100}
          height={100}
          alt="background"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src={"/img/secCard4.gif"}
            className="w-[383px] h-[410px]"
            width={100}
            height={100}
            alt="coin"
          />
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex flex-col w-[530px]">
          <div className="flex gap-2 mb-4">
            <Image
              src={"/img/PSYCHOIN.png"}
              alt="logo"
              width={25}
              height={25}
            />
            <p className="font-bold text-[18px] text-white">PSYCHOIN</p>
          </div>
          <h3 className="text-[48px] font-semibold text-[#6D00CC] leading-[55px] mb-6">
          Earn Rewards!
          </h3>
          <p className="text-[18px] text-[#CDCDCD] leading-[28.8px] mb-6">
          Co-operation makes the world go round. You can collaborate with your friends or conspire against them. The choice is yours.
          </p>
          <div className="flex pr-[70px] mt-2">
            <Button className="font-semibold flex justify-end text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
              Play For Free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earn;
