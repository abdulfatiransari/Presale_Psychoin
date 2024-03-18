import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Details() {
    const handleType = (count: number) => {
        // access word count number
    };

    const handleDone = () => {
        console.log(`Done after 5 loops!`);
    };

    return (
        <div>
            <div>
                <p className="text-5xl font-bold">
                    This is{" "}
                    <span className="text-5xl font-bold bg-[linear-gradient(90deg,rgba(150,146,233,1)1%,rgba(93,93,136,1)35%,rgba(54,90,97,1)100%)] text-transparent bg-clip-text">
                        <Typewriter
                            words={["Psychoin Token", "PT"]}
                            loop={false}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                    <br />
                    Presale
                </p>
            </div>
        </div>
    );
}
