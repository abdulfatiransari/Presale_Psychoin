import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import LazyImage from "../LazyImage";

const cardData = [
  {
    id: 1,
    buttonName: "Unlock New Possibilities via Psychology",
    srcUrl: "/img/neuroscience.svg",
  },
  {
    id: 2,
    buttonName: "Invest in your Personal Development",
    srcUrl: "/img/growth.svg",
  },
  {
    id: 3,
    buttonName: "Join a Supportive and Rewarding Community",
    srcUrl: "/img/psyWallet.svg",
  },
];

const PlayCards = () => {
  return (
    <div className="flex flex-col px-28 w-full justify-center items-center max-md:px-10 max-sm:px-8 mt-20 ">
      <div className="flex gap-6 flex-wrap max-lg:flex-wrap max-md:flex-wrap max-sm:flex-wrap justify-center  items-center">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="rounded-t-[30px] w-fit px-8 py-6 max-sm:px-2 max-sm:py-4 gap-10 flex-col flex-wrap justify-center items-center border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 h-full max-md:h-full max-sm:h-full"
            style={{
              background: "radial-gradient(at center top, #222833, #0C0C0C)",
            }}
          >
            <div className="flex justify-center items-center">
            <LazyImage
                src={card.srcUrl}
                className="w-[353px] h-[246px] mb-6 max-sm:w-[300px] max-sm:h-[200px]"
                width={100}
                height={100}
                alt="coin"
              />
            </div>
            <div className="flex justify-center items-center">
              <Button
                className="font-semibold flex text-white rounded-[100px] py-4 text-base max-sm:text-[12px]"
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
      {/* <div className="flex justify-center items-center mt-10">
        <Button className="font-semibold flex text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base">
          Join Us
        </Button>
      </div> */}
    </div>
  );
};

export default PlayCards;
