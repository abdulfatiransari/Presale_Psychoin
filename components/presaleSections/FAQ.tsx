import { useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const faqArray = [
  {
    ques: "What is crypto?",
    ans: "Crypto is digital currency secured by cryptography and operates on decentralized networks, such as Bitcoin or Ethereum.",
  },
  {
    ques: "Where to buy crypto?",
    ans: "You can buy crypto on exchanges like Coinbase, Binance, or Kraken.",
  },
  {
    ques: "How to earn crypto?",
    ans: "You can earn crypto through mining, staking, participating in airdrops, completing tasks, or providing goods and services in exchange for crypto payments.",
  },
  {
    ques: "How to earn rewards?",
    ans: "You can earn rewards in crypto by participating in staking programs, completing tasks or challenges in decentralized finance (DeFi) platforms, or contributing to blockchain networks.",
  },
];
const FAQ = () => {
  const [isOpenArray, setIsOpenArray] = useState(Array(faqArray.length).fill(false));

  const toggleQuestion = (index: any) => {
    setIsOpenArray((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="flex justify-center items-center w-full mt-10 px-28 gap-20 max-sm:mt-0 max-lg:mt-28 max-sm:px-6 max-sm:flex-wrap">
      <div className="w-[200px] max-sm:w-full  max-md:w-[150px]  mb-16 max-sm:mb-0 max-sm:mt-10">
        <h1 className="text-[48px] text-center max-sm:text-[28px] max-md:text-[32px] text-[#6D00CC] font-semibold">
          Frequently Asked Questions
        </h1>
      </div>

        <div className="flex flex-col w-[380px] mb-10">
          {faqArray.map((data, idx) => {
            return (
              <div key={idx}>
                <div className="flex justify-between" onClick={() => toggleQuestion(idx)}>
                  <span>{data.ques}</span>
                  <div className="mt-1.5">
                    {isOpenArray[idx] ? (
                      <FaAngleUp className="cursor-pointer text-xl" />
                    ) : (
                      <FaAngleDown className="cursor-pointer text-xl" />
                    )}
                  </div>
                </div>
                <div className="border-1 border-white mt-2 mb-4"></div>
                {isOpenArray[idx] && (
                  <>
                    <div className="text-[#CDCDCD] mb-4">
                      {data.ans}
                    </div>
                  </>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FAQ;
