import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const OwnWorld = () => {
  return (
    <div className="flex flex-col px-28 justify-center items-center mt-14">
      <h2 className="text-[48px] font-semibold mb-2">Own Your World!</h2>
      <span className="text-[18px] text-[#CDCDCD] mb-6">
        What you build is yours to own. What you own can earn you rewards backed
        on the blockchain.
      </span>
      <div className="w-full mt-2">
        <Image
          src={"/img/ownWorld.gif"}
          className="w-full h-full"
          width={100}
          height={100}
          alt="background"
        />
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button className="font-semibold flex text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
          Explore Land on OpenSea
        </Button>
      </div>
    </div>
  );
};

export default OwnWorld;
