import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const cardData = [
  { id: 1, buttonName: "NuCyber", srcUrl: "/img/card1.svg" },
  { id: 2, buttonName: "Farmland", srcUrl: "/img/card2.svg" },
  { id: 3, buttonName: "Farmland", srcUrl: "/img/card3.svg" },
  { id: 4, buttonName: "And More...", srcUrl: "/img/card4.svg" },
];

const PlayCards = () => {
  return (
    <div className="flex flex-col px-28">
      <div className="flex gap-3">
        {cardData.map((card) => (
          <div key={card.id} className="relative w-full">
            <Image
              src={"/img/Background.svg"}
              className="w-full h-full"
              width={100}
              height={100}
              alt="background"
            />
            <div className="absolute inset-0 flex justify-center items-center mt-4 mx-4 flex-col">
              <Image
                src={card.srcUrl}
                className="w-[262px] h-[246px]"
                width={100}
                height={100}
                alt="coin"
              />
              <Button
                className="font-semibold flex text-white rounded-[100px] px-6 py-4 text-base mt-4"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(145, 173, 186, 0.8) -11.36%, rgba(32, 81, 102, 0.096) 104.55%)",
                  border: "1px solid #FFFFFF",
                }}
              >
                {card.buttonName}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
      <Button className="font-semibold flex text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
        Play For Free
      </Button>
      </div>
    </div>
  );
};

export default PlayCards;
