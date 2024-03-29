import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const cardData = [
  {
    id: 0,
    member: "CEO D. Usmanov",
    designation: "Chief Executive Officer",
    srcUrl: "/img/CEO.svg",
    info: "D. Usmanov stands as a Visionary Investor and influential figure within the Financial realm, fervently envisioning the transformation of Well-being through Digital Currency and Pioneering Advancements in mental wellness innovation."
  },
  {
    id: 1,
    member: "Alex",
    designation: "Chief Technology Officer",
    srcUrl: "/img/doctor.svg",
    info: "As the Leading Scientific Consultant and Head of the Scientific team behind Psychoin, Alex Malioukis, a seasoned Cognitive Neuroscientist and Clinical Neuropsychologist, ensures that the vision behind Psychoin adheres to scientific criteria and safeguards the well-being of the Community."
  }
];  

const Team = () => {
  return (
    <div className="flex flex-col w-full px-28 py-10 gap-2 max-sm:px-8 max-md:px-10">
      <div className="flex justify-between items-center max-sm:flex-wrap">
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
      <div className="flex justify-between items-center gap-16 mt-14 max-md:flex-wrap max-sm:flex-wrap">
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
      <div className="mt-10 flex items-stretch gap-20 max-md:flex-wrap max-sm:flex-wrap">
  {cardData.map((card, idx) => (
    <div key={idx} className="rounded-[30px] w-full flex flex-col">
      <div
        className="w-full flex flex-col"
        style={{
          backgroundColor:
            "background: linear-gradient(0deg, rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.67)),radial-gradient(54.52% 54.52% at 50% 0%, rgba(131, 172, 240, 0.2) 0.27%, rgba(131, 172, 240, 0) 100%)",
        }}
      >
        <Image
          src={card.srcUrl}
          className="w-full h-full mb-4"
          width={100}
          height={100}
          alt="member"
        />

        <h4 className="text-[32px] max-sm:text-[28px]">{card.member}</h4>
        <Image
          src={"/img/Line 8.png"}
          alt="line"
          width={0}
          height={0}
          className="w-full h-[1px] my-2"
        />
        <p className="text-[18px] text-[#CDCDCD] ">{card.designation}</p>
        <p className="text-[16px] text-[#CDCDCD] flex-grow">{card.info}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Team;
