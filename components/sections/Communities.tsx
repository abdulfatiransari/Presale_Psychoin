import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <div className="flex px-28 max-md:px-8 gap-10 mt-20 max-md:flex-col">
      <div className="relative w-full">
        {/* <Image
          src={"/img/Background.svg"}
          className="w-full h-full min-w-[280px]"
          width={100}
          height={100}
          alt="background"
        /> */}
        <div className="p-4 inset-0 flex mt-20 bg-[url('/img/Background.svg')] bg-contain bg-no-repeat max-w-[390px]">
          <Image
            src={"/img/coin.gif"}
            className="w-full h-auto min-w-[370px] min-h-[517px] max-md:max-w-[280px]"
            width={283}
            height={517}
            alt="coin"
          />
        </div>
      </div>

      <div className="flex items-center ml-10">
        <div className="flex flex-col w-full">
        <div className="flex justify-end pr-[70px] mb-16">
          <Button className="font-semibold flex justify-end text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
            Play For Free
          </Button>
        </div>
          <div className="flex gap-2">
            <Image
              src={"/img/PSYCHOIN.png"}
              alt="logo"
              width={25}
              height={25}
            />
            <p className="font-bold text-[18px] text-white">PSYCHOIN</p>
          </div>
          <h3 className="text-[48px] font-semibold text-[#6D00CC] leading-[55px]">
            Where Communities Come To Life
          </h3>
          <p className="text-[18px] text-[#CDCDCD] leading-[28.8px]">
            Pychoin is building a platform where users can build games that
            natively integrate digital collectibles.
          </p>
          <p className="text-[18px] text-[#CDCDCD] leading-[28.8px]">
            Create fun, memorable experiences where your users truly own their
            progress.
          </p>
          <p className="text-[18px] text-[#CDCDCD] leading-[28.8px]">
            Build around existing IP.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
