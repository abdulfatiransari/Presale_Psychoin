import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const cardData = [
  { id: 1, srcUrl: "/img/logo1.svg" },
  { id: 2, srcUrl: "/img/logo2.svg" },
  { id: 3, srcUrl: "/img/logo3.svg" },
  { id: 4, srcUrl: "/img/logo4.svg" },
  { id: 5, srcUrl: "/img/logo5.svg" },
  { id: 6, srcUrl: "/img/logo6.svg" },
  { id: 7, srcUrl: "/img/logo7.svg" },
  { id: 8, srcUrl: "/img/logo8.svg" },
];

const OwnWorld = () => {
  return (
    <div className="flex flex-col px-28 justify-center items-center mt-14">
      <h2 className="text-[48px] font-semibold mb-2 text-[#9747FF]">
        Our Investors
      </h2>
      <span className="text-[20px] text-white font-semibold mb-4">
        What you build is yours to own. What you own can earn you rewards backed
        on the blockchain.
      </span>
      <span className="text-[18px] text-[#CDCDCD] text-center mb-6">
        We’re working with trusted partners who share our vision. Together
        they’re supporting us while we build the Pixels Universe with our
        growing player community.
      </span>
    
<table className="w-full border-collapse border border-slate-500 ...">
  <tbody>
    <tr>
      <td className="p-14 border border-slate-700 ...">
      <Image
        src={"/img/logo1.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
      </td>
      <td className="p-14 border border-slate-700 ...">
      <Image
        src={"/img/logo2.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
      </td>
      <td className="p-14 border border-slate-700 ...">
      <Image
        src={"/img/logo3.svg"}
        className="w-[242px] h-[34px] "
        width={100}
        height={100}
        alt="logo"
      />
      </td>
      <td className="p-14 border border-slate-700 ...">
      <Image
        src={"/img/logo4.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
      </td>
    </tr>
    <tr>
      <td className="p-14 border border-slate-700 ...">
      <Image
        src={"/img/logo5.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
      </td>
      <td className="p-14 border border-slate-700 ...">
      <Image
        src={"/img/logo6.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
      </td>
      <td className="p-14 border border-slate-700 ...">
      <Image
        src={"/img/logo7.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
      </td>
      <td className="p-14 border border-slate-700 ...">
      <Image
        src={"/img/logo8.svg"}
        className="w-[242px] h-[34px]"
        width={100}
        height={100}
        alt="logo"
      />
      </td>
    </tr>
  </tbody>
</table>
    </div>
  );
};

export default OwnWorld;
