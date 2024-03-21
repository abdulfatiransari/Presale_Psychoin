import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const SlidingCompanies = () => {
  return (
    <div className="relative py-4 overflow-hidden">
      <Marquee className="flex text-[20px] gap-10 font-semibold w-fit">
        <div className="px-6">
        <Image
        src={"/img/logo1.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
        </div>
        <div className="px-6">
        <Image
        src={"/img/logo2.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
        </div>
        <div className="px-6">
        <Image
        src={"/img/logo3.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
        </div>
        <div className="px-6">
        <Image
        src={"/img/logo4.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
        </div>
        <div className="px-6">
        <Image
        src={"/img/logo5.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
        </div>
        <div className="px-6">
        <Image
        src={"/img/logo6.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
        </div>
        <div className="px-6">
        <Image
        src={"/img/logo7.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
        </div>
        <div className="px-6">
        <Image
        src={"/img/logo8.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
        </div>
      </Marquee>
    </div>
  );
};

export default SlidingCompanies;
