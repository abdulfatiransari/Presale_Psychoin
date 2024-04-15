import { useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle subscription logic here (e.g., send email to server)
    console.log("Subscribed with email:", email);
    // Reset email input after subscription
    setEmail("");
  };

  return (
    <div
      id="socials"
      className="w-full rounded-t-[30px] py-10 px-28  max-sm:px-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(109, 0, 204, 0.2) 50%, #6D00CC 103.39%",
      }}
    >
      <div className="4xl1:flex 4xl1:justify-center 4xl1:items-center">
      <div className="4xl1:max-w-[1440px]">
      <div className="flex justify-between items-center max-md:flex-wrap ">
        <div className="flex flex-col w-[515px]">
          <h4 className="font-semibold text-xl">Subscribe to Newsletter</h4>
          <p className="text-[#CDCDCD] text-base mt-4">
            Stay connected with the latest mental health, community achievements, and Psychoin updates. Join us in spreading well-being and empowerment.
          </p>
        </div>
        <div className="flex gap-4 items-center w-[#495px] max-sm: mt-6">
          <input
            type="email"
            placeholder="Enter your Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-black outline-none rounded-[100px] w-full h-10 px-6"
          />
          <Button
            onClick={handleSubscribe}
            className="font-semibold flex text-white bg-transparent rounded-[100px] px-8 py-4 text-base"
            style={{
              border: "1px solid #FFFFFF",
            }}
          >
            Subscribe
          </Button>
        </div>
      </div>

      <Image src={"/img/Line 2.png"} alt="line" width={0} height={0} className="w-full h-[1px] mt-16 mb-18" />

      <div className="mt-14 w-full flex justify-between items-center flex-wrap">
        <div className="flex flex-col md:w-[331px] ">
          <h4 className="font-semibold text-2xl">Psychoin</h4>
          <p className="text-[rgb(205,205,205)] text-base mt-4  pr-6 md:p-0 ">
            We're backed by a network of partners and investors who believe in our vision. Together, we're making mental health accessible and rewarding for our global community.          </p>
        </div>

        <div className="flex gap-x-[120px] gap-y-[50px]  md:gap-16 flex-wrap max-sm:mt-6">
          <div className="flex flex-col gap-2">
            <h5 className="font-semibold text-[24px]">Company</h5>
            <a href="#about" className="text-base text-[#CDCDCD] cursor-pointer">About</a>
            <a href="#services" className="text-base text-[#CDCDCD] cursor-pointer">Services</a>
            <a href="#team" className="text-base text-[#CDCDCD] cursor-pointer">Team</a>
          </div>
          <div className="flex flex-col gap-2 ">
            <h5 className="font-semibold text-[24px]">Resources</h5>
            <Link
              href="https://www.instagram.com/psychoin_official?igsh=eDlqbHRyZ2VuMGRt"
            className="text-base text-[#CDCDCD]">Community</Link>
            <a href="/pdf/whitepaper.pdf" className="text-base text-[#CDCDCD]">Whitepaper</a>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-semibold text-[24px]">Help</h5>
            <Link href={'#support'} className="text-base text-[#CDCDCD] cursor-pointer">Support</Link>
          </div>

        </div>
      </div>
      <Image src={"/img/Line 8.png"} alt="line" width={0} height={0} className="w-full h-[1px] mt-10 mb-6" />
      <p className="text-white text-center mt-6">Copyright © 2024 Psychoin</p>
      </div>
      </div>
    </div>
  );
}
