import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookFill, RiLinkedinFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div
      className="w-full rounded-t-[30px] py-10 px-28  max-sm:px-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(109, 0, 204, 0.2) 50%, #6D00CC 103.39%",
      }}
    >
      <div className="flex justify-between items-center max-md:flex-wrap ">
        <div className="flex flex-col w-[560px]">
          <h4 className="font-semibold text-xl">Subscribe to Newsletter</h4>
          <p className="text-[#CDCDCD] text-base mt-4">
            Aliquet dignissim erat habitasse aliquet tincidunt phasellus
            ultrices. Aenean sed elit mattis sagittis id velit sed scelerisque.
          </p>
        </div>
        <div className="flex gap-4 items-center w-[#495px] max-sm: mt-6">
          <input
            type="search"
            placeholder="Enter your Email..."
            className="bg-white text-black outline-none rounded-[100px] w-full h-10 px-6"
          />
          <Button
            className="font-semibold flex text-white bg-transparent rounded-[100px] px-8 py-4 text-base"
            style={{
              border: "1px solid #FFFFFF",
            }}
          >
            Subscribe
          </Button>
        </div>
      </div>

      <Image src={"/img/Line 2.png"} alt="line" width={0} height={0}  className="w-full h-[1px] mt-16 mb-18"/>
      
      <div className="mt-14 w-full flex justify-between items-center flex-wrap">
        <div className="flex flex-col w-[331px] ">
          <h4 className="font-semibold text-2xl">Psychoin</h4>
          <p className="text-[#CDCDCD] text-base mt-4">
            Euismod libero faucibus egestas elementum scelerisque porta commodo
            purus nam. Ante ac egestas duis.
          </p>
            <div className="flex gap-4 mt-4">
            <Link href={'#'}>
                <div className="flex justify-center items-center w-[32px] h-[32px] rounded-full bg-[#1A1D22]">
                <RiFacebookFill className="text-white"/>
                </div>
              </Link>
              <Link href={'#'}>
                <div className="flex justify-center items-center w-[32px] h-[32px] rounded-full bg-[#1A1D22]">
                <FaTwitter className="text-white"/>
                </div>
              </Link>
              <Link href={'#'}>
                <div className="flex justify-center items-center w-[32px] h-[32px] rounded-full bg-[#1A1D22]">
                <RiLinkedinFill className="text-white"/>
                </div>
              </Link>
              <Link href={'#'}>
                <div className="flex justify-center items-center w-[32px] h-[32px] rounded-full bg-[#1A1D22]">
                <AiFillInstagram className="text-white"/>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex gap-16 flex-wrap max-sm:mt-6">
            <div className="flex flex-col gap-2">
                <h5 className="font-semibold text-[24px]">Company</h5>
                <p className="text-base text-[#CDCDCD]">Home</p>
                <p className="text-base text-[#CDCDCD]">About us</p>
                <p className="text-base text-[#CDCDCD]">Services</p>
                <p className="text-base text-[#CDCDCD]">Careers</p>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="font-semibold text-[24px]">Resources</h5>
                <p className="text-base text-[#CDCDCD]">Community</p>
                <p className="text-base text-[#CDCDCD]">Video Tutorials</p>
                <p className="text-base text-[#CDCDCD]">API Documentation</p>
                <p className="text-base text-[#CDCDCD]">Security Reports</p>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="font-semibold text-[24px]">Help</h5>
                <p className="text-base text-[#CDCDCD]">Customer Support</p>
                <p className="text-base text-[#CDCDCD]">Terms & Conditions</p>
                <p className="text-base text-[#CDCDCD]">Privacy Policy</p>
            </div>

        </div>
      </div>
      <Image src={"/img/Line 8.png"} alt="line" width={0} height={0}  className="w-full h-[1px] mt-10 mb-6"/>
      <p className="text-white text-center mt-6">Copyright © 2024 Psychoin</p>
    </div>
  );
}
