import React from "react";
import Marquee from "react-fast-marquee";

const SlidingText = () => {
  return (
    <div className="relative py-4 overflow-hidden">
      <Marquee className="flex text-[20px] gap-10 font-semibold w-fit">
        <p className="px-10">Discord community of over 120k</p>
        <p className="px-10">A new world is waiting</p>
        <p className="px-10">What you build is yours to own</p>
        <p className="px-10 uppercase">Psychoin token coming soon</p>
      </Marquee>
    </div>
  );
};

export default SlidingText;
