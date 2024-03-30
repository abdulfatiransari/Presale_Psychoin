import { Button } from "@nextui-org/react";
import React from "react";

const OwnWorld = () => {
  return (
    <div id="whitepaper" className="flex flex-col px-28 justify-center items-center mt-14 max-sm:px-8 max-md:px-10 mb-20">
      <h2 className="text-[48px] font-semibold text-[#6D00CC] text-center mb-2 max-sm:text-[28px] max-md:text-[32px]">Shape Your Community</h2>
      <span className="text-[18px] text-center text-[#CDCDCD] mb-6">
      Your stake in Psychoin grants you a voice in our governance. Participate in decisions, engage in community challenges, and contribute to a brighter future for all members.
      </span>
      <div className="flex justify-center items-center mt-4">
        <Button className="font-semibold flex text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
        Find us on UniSwap
        </Button>
      </div>
    </div>
  );
};

export default OwnWorld;
