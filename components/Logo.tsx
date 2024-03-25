import React from "react";
import Image from "next/image";

export default function Logo() {
    return (
        <div className="w-[65px] h-[65px] max-sm:w-[35px]  max-sm:h-[35px] max-md:w-[50px] max-md:h-[50px]">
            <Image src={"/img/PSYCHOIN.png"} alt="logo" width={65} height={65} />
        </div>
    );
}
