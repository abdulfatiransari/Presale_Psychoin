import React from "react";
import Image from "next/image";

export default function Logo() {
    return (
        <div>
            <Image src={"/img/PSYCHOIN.png"} alt="logo" width={65} height={65} />
        </div>
    );
}
