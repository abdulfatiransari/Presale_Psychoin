import Image from "next/image";
import React from "react";

const Players = () => {
  return (
    <div className="flex px-28 justify-center mt-10">
      <div className="relative w-full h-[490px]">
        <Image
          src={"/img/Background.svg"}
          className="w-full h-full"
          width={100}
          height={100}
          alt="background"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h4 className="text-white font-semibold my-6 text-[32px]">
            Over 9,000 Players
          </h4>
          <Image
            src={"/img/crad.gif"}
            className="w-[360px] h-[300px]"
            width={100}
            height={100}
            alt="coin"
          />
          <div className="flex justify-center items-center w-[400px] mt-6">
            <p className="text-[18px] text-[#CDCDCD] text-center leading-6">
              Join one of the largest web3 communities & a player base who is
              eager to experience and play new games.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div
          className="rounded-t-[30px] border-t-1.5 border-t-gray-300 border-x-gray-500 border-x-1 bg-gradient-to-t from-black to-white px-8 py-10 flex justify-center items-center gap-6"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.67)), radial-gradient(54.52% 54.52% at 50% 0%, rgba(131, 172, 240, 0.2) 0.27%, rgba(131, 172, 240, 0) 100%)",
          }}
        >
          <Image
            src={"/img/cat.gif"}
            className="w-[175px] h-[209px]"
            width={100}
            height={100}
            alt="cat"
          />
          <div className="flex flex-col">
            <h4 className="font-semibold text-[24px] mb-6">Pets are Coming!</h4>
            <p className="text-[#CDCDCD]">
              A utility token is dropping at the same time as the release of
              chapter Two. Earn tokens and rewards just by playing the game. Be
              on the lookout for an airdrop
            </p>
          </div>
        </div>
        <div
          className="rounded-t-[30px] border-t-1.5 border-t-gray-300 border-x-gray-500 border-x-1 bg-gradient-to-t px-8 pt-10 pb-6 flex justify-center items-center gap-6 relative top-[-28px] z-10"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.67)), radial-gradient(54.52% 54.52% at 50% 0%, rgba(131, 172, 240, 0.2) 0.27%, rgba(131, 172, 240, 0) 100%)",
          }}
        >
          <Image
            src={"/img/cat2.gif"}
            className="w-[175px] h-[209px]"
            width={100}
            height={100}
            alt="cat"
          />
          <div className="flex flex-col">
            <h4 className="font-semibold text-[24px] mb-6">Updates every Two Weeks!</h4>
            <p className="text-[#CDCDCD]">
            Prepare for new industries and possibilities to master. A whole new  set of activities await
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
