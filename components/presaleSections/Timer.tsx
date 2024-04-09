import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import React, { useEffect, useState } from "react";
import { useWeb3Instance } from "../utils/instance";

const Timer = () => {
    const { address } = useWeb3ModalAccount();
    const [currentDate, setCurrentDate] = useState<any>({
        day: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const myContract = useWeb3Instance() as any;

    const convertTimestamp = async () => {
        const now = Math.floor(Date.now() / 1000);
        const timestamp = await myContract.presaleEndTime();
        const timeLeftInSeconds = timestamp - now;
        if (timeLeftInSeconds > 0) {
            const days = Math.floor(timeLeftInSeconds / (60 * 60 * 24));
            const hours = Math.floor((timeLeftInSeconds % (60 * 60 * 24)) / (60 * 60));
            const minutes = Math.floor((timeLeftInSeconds % (60 * 60)) / 60);
            const seconds = Math.floor(timeLeftInSeconds % 60);
            setCurrentDate({
                day: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            });
        }
    };
    useEffect(() => {
        if (address) {
            convertTimestamp();
            const intervalId = setInterval(convertTimestamp, 1000);
            return () => clearInterval(intervalId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [address]);

    return (
        <div className="flex flex-col justify-center items-center w-full mt-6 bg-[#6d00ccac] py-10 px-28 max-md:px-8 max-sm:px-6">
            <h4 className="text-[20px] font-semibold text-white mb-2">PRESALE TOKEN END TIME</h4>
            <div className="flex justify-around w-full  items-center">
                <div className="flex flex-col">
                    <h1 className="text-[56px] text-white font-semibold max-sm:text-[24px]">
                        {currentDate ? currentDate.day : 0} d
                    </h1>
                    <p className="text-[#CDCDCD] text-[18px] text-center">Days</p>
                </div>
                <p className="text-[56px] text-white mb-8 max-sm:text-[24px]">:</p>
                <div className="flex flex-col ">
                    <h1 className="text-[56px] text-white font-semibold max-sm:text-[24px]">
                        {currentDate ? currentDate.hours : 0} h
                    </h1>
                    <p className="text-[#CDCDCD] text-[18px] text-center">Hours</p>
                </div>
                <p className="text-[56px] text-white mb-8 max-sm:text-[24px]">:</p>
                <div className="flex flex-col ">
                    <h1 className="text-[56px] text-white font-semibold max-sm:text-[24px]">
                        {currentDate ? currentDate.minutes : 0} m
                    </h1>
                    <p className="text-[#CDCDCD] text-[18px] text-center">Minutes</p>
                </div>
                <p className="text-[56px] text-white mb-8 max-sm:text-[24px]">:</p>
                <div className="flex flex-col ">
                    <h1 className="text-[56px] text-white font-semibold max-sm:text-[24px]">
                        {currentDate ? currentDate.seconds : 0} s
                    </h1>
                    <p className="text-[#CDCDCD] text-[18px] text-center">Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Timer;
