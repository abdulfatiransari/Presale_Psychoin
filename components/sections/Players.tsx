import Image from "next/image";
import React from "react";

const Players = () => {
  return (
    <div className="flex px-28 justify-center mt-10">
       <div
          className="rounded-t-[30px] border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 px-4 py-10 flex justify-center items-center w-full"
          style={{
            background:'radial-gradient(at center top, #222833, #0C0C0C)'}}
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
      {/* <div className="relative w-full h-[490px]">
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
      </div> */}
      <div className="flex flex-col">
        <div
          className="rounded-t-[30px] border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 px-8 py-10 flex justify-center items-center gap-6"
          style={{
            background:'radial-gradient(at center top, #222833, #0C0C0C)'}}
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
          className="rounded-t-[30px] px-8 pt-10 pb-6 flex justify-center border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 gap-6 relative top-[-28px] z-10"
            style={{
              background:'radial-gradient(at center top, #222833, #0C0C0C)'
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
