import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const cardData = [
  {
    id: 0,
    memeber: "Member 1",
    designation: "Chief Executive Officer",
    srcUrl: "/img/teamMember1.svg",
  },
  {
    id: 1,
    memeber: "Member 2",
    designation: "Chief Technology Officer",
    srcUrl: "/img/teamMember2.svg",
  },
  {
    id: 2,
    memeber: "Member 3",
    designation: "Chief Executive Officer",
    srcUrl: "/img/teamMember3.svg",
  },
];

const OwnWorld = () => {
  return (
    <div className="flex flex-col px-28 justify-center items-center mt-14 max-sm:px-8 max-md:px-10">
      <h2 className="text-[48px] font-semibold mb-2 text-[#9747FF] max-sm:text-[28px] max-md:text-[32px]">
        Our Investors
      </h2>
      <span className="text-[20px] text-white text-center font-semibold mb-4 max-sm:text-[18px]">
      Supported by many companies around the world.
      </span>
      <span className="text-[18px] text-[#CDCDCD] text-center mb-6">
      We’re working with trusted partners who share our vision. Together they’re supporting us while we build the Pixels Universe with our growing player community.
      </span>
      <div className="mt-10 flex justify-center items-center gap-6 max-md:flex-wrap max-sm:flex-wrap">
        {cardData.map((card, idx) => (
          <div key={idx}
            className="rounded-[30px] "
            style={{
              backgroundColor:
                "background: linear-gradient(0deg, rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.67)),radial-gradient(54.52% 54.52% at 50% 0%, rgba(131, 172, 240, 0.2) 0.27%, rgba(131, 172, 240, 0) 100%)",
            }}
          >
            <div key={card.id} className="w-full flex flex-col">

            <Image
              src={card.srcUrl}
              className="w-full h-full mb-4"
              width={100}
              height={100}
              alt="member"
            />
            
            <h4 className="text-[32px] max-sm:text-[28px]">{card.memeber}</h4>
            <Image
            src={"/img/Line 8.png"}
            alt="line"
            width={0}
            height={0}
            className="w-full h-[1px] my-2"
          />
            <p className="text-[18px] text-[#CDCDCD]">{card.designation}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnWorld;
