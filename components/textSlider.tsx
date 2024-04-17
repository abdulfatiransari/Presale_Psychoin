import React from "react";
import Marquee from "react-fast-marquee";

const SlidingText = () => {
  return (
    <div className="relative py-4 overflow-hidden">
      <Marquee className="flex text-[20px] gap-10 font-semibold w-fit">
        <p className="px-10">PSYCHOIN TOKEN COMING SOON</p>
        <p className="px-10">PSYCHOIN TOKEN COMING SOON</p>
        <p className="px-10">PSYCHOIN TOKEN COMING SOON</p>
        <p className="px-10">PSYCHOIN TOKEN COMING SOON</p>
      </Marquee>
    </div>
  );
};

export default SlidingText;
