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

const Team = () => {
  return (
    <div className="flex flex-col w-full px-28 py-10 gap-2">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-[18px] text-[#CDCDCD] font-semibold mb-1">
            OUR TEAM
          </p>
          <h1 className="text-white text-[48px] font-semibold w-[530px]">
            Meet the Minds Shaping Psychoin
          </h1>
        </div>
        <Button className="font-semibold flex text-white bg-[#6D00CC] rounded-[100px] px-8 py-4 mt-24 text-base">
          See All Team
        </Button>
      </div>
      <div className="flex justify-between items-center gap-16 mt-14">
        <div className="flex flex-col gap-1 justify-center items-center w-full">
          <Image src={"/img/IconTeam1.svg"} width={40} height={40} alt="icon" />
          <p className="text-[#CDCDCD] text-[18px] text-center mt-2">
            Over a decade of trading experience in Investment Banking and
            trusted by industry titans
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center w-full">
          <Image src={"/img/IconTeam2.svg"} width={40} height={40} alt="icon" />
          <p className="text-[#CDCDCD] text-[18px] text-center mt-2">
            Bulletproof self-custody solution is rigorously tested and trusted
            by industry titans
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center w-full">
          <Image src={"/img/IconTeam3.svg"} width={40} height={40} alt="icon" />
          <p className="text-[#CDCDCD] text-[18px] text-center mt-2">
            With our carefully curated TMA at its core, your user experience
            will be nothing short of incredible.
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center gap-6">
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
            
            <h4 className="text-[32px] ">{card.memeber}</h4>
            <Image
            src={"/img/Line 8.png"}
            alt="line"
            width={0}
            height={0}
            className="w-full my-2"
          />
            <p className="text-[18px] text-[#CDCDCD]">{card.designation}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
