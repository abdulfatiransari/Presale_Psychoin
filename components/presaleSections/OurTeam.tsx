import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const mindsData = [
  {
    srcUrl: "/img/IconTeam1.svg",
    description: "Over a decade of trading experience in Investment Banking",
  },
  {
    srcUrl: "/img/IconTeam2.svg",
    description:
      "Bulletproof self-custody solution is rigorously tested and trusted by industry titans",
  },
  {
    srcUrl: "/img/IconTeam3.svg",
    description:
      "With our carefully curated TMA at its core, your user experience will be nothing short of incredible",
  },
];

const cardData = [
  {
    id: 0,
    member: "D. Usmanov",
    designation: "CEO",
    srcUrl: "/img/CEO.svg",
    info: "D. Usmanov stands as a Visionary Investor and influential figure within the Financial realm, fervently envisioning the transformation of Well-being through Digital Currency and Pioneering Advancements in mental wellness innovation",
  },
  {
    id: 1,
    member: "A. Malioukis",
    designation: "Chief Scientific Advisor",
    srcUrl: "/img/alexNewImage.svg",
    info: "As the Leading Scientific Consultant and Head of the Scientific team behind Psychoin, Alex Malioukis, a seasoned Cognitive Neuroscientist and Clinical Neuropsychologist, ensures that the vision behind Psychoin adheres to scientific criteria and safeguards the well-being of the Community",
  },
];

const Team = () => {
  return (
    <div
      id="team"
      className="flex flex-col w-full px-28 md:py-10 md:gap-2 max-sm:px-8 max-md:px-10 max-lg:px-10"
    >
      <div className="flex justify-between  items-center  max-sm:flex-wrap ">
        <div className="flex flex-col">
          <p className="text-[18px]  max-sm:text-[14px] text-[#CDCDCD] font-semibold mb-1">
            OUR TEAM
          </p>
          <h1 className="text-white text-[48px] max-md:text-[32px] max-sm:text-[28px] font-semibold w-[530px] max-md:w-[430px] max-sm:w-full">
            Meet the Minds Shaping Psychoin
          </h1>
        </div>
        <Button className="font-semibold flex text-white bg-[#6D00CC] rounded-[100px] px-8 py-4 mt-24 max-sm:mt-4 text-base">
          See All Team
        </Button>
      </div>
      <div className="flex items-stretch justify-between  gap-[3rem] md:gap-[7rem]  mt-14 max-md:flex-wrap max-sm:flex-wrap ">
        {mindsData.map((data, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-1 justify-center items-center w-full"
          >
            <Image src={data.srcUrl} width={40} height={40} alt="icon" />
            <p className="text-[#CDCDCD] text-[18px] text-center mt-2 flex-grow">
              {data.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 px-28 max-sm:px-0 max-md:px-10 max-lg:px-16 flex items-stretch  max-md:flex-wrap max-sm:flex-wrap  max-lg:flex-wrap max-xl:px-10 justify-center">
        {cardData.map((card, idx) => (
          <div key={idx} className="rounded-[30px] w-full flex flex-col max-w-[400px] gap-6 mb-10 md:mb-10">
            <div
              className=" w-full  flex flex-col "
              style={{
                backgroundColor:
                  "background: linear-gradient(0deg, rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.67)),radial-gradient(54.52% 54.52% at 50% 0%, rgba(131, 172, 240, 0.2) 0.27%, rgba(131, 172, 240, 0) 100%)",
              }}
            >
              <Image
                src={card.srcUrl}
                className="w-[364px] h-full mb-4"
                width={100}
                height={100}
                alt="member"
              />

              <h4 className="text-[32px] max-sm:text-[28px] font-semibold">
                {card.member}
              </h4>
              <Image
                src={"/img/Line 8.png"}
                alt="line"
                width={0}
                height={0}
                className="w-[350px] h-[1px] my-2"
              />
              <p className="text-[18px] text-white font-semibold mb-2 max-w-[364px]">
                {card.designation}
              </p>
              <p className="text-[16px] text-[#CDCDCD] flex-grow max-w-[315px]">
                {card.info}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
