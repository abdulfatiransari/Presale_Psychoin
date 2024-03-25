import Image from "next/image";
import React from "react";

const Players = () => {
  return (
    <div className="flex px-28 justify-center gap-4 mt-10 max-md:px-10 max-sm:px-8 max-sm:flex-wrap max-md:flex-wrap">
       <div
          className="rounded-t-[30px] max-sm:flex-wrap border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 px-4 py-10 flex justify-center items-center w-full gap-6 mb-6"
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
      <div className="flex flex-col">
        <div
          className="rounded-t-[30px] border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 px-4 py-10 flex justify-center items-center gap-6 max-sm:flex-wrap"
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
          className="rounded-t-[30px] px-4 pt-10 pb-6 flex justify-center  items-center border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 gap-6 relative top-[-28px] z-10 max-sm:flex-wrap"
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
