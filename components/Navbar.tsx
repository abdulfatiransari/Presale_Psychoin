import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import Logo from "./Logo";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {

  const router = useRouter();
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();
  return (
    <div>
        <Navbar
          shouldHideOnScroll
          className="bg-transparent py-1 px-8 flex justify-between [&>header]:!max-w-full"
        >
          <NavbarBrand className="flex items-center gap-2">
            <Logo />
            <p className="font-semibold text-4xl text-inherit">Psychoin</p>
          </NavbarBrand>
          <div className="flex gap-4">
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <div
                  onClick={() => router.push('/') }
                  className="text-base font-semibold text-[#CDCDCD] hover:text-white cursor-pointer" 
                >
                  Home
                </div>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <div
                  onClick={() => router.push('/about') }
                  className="text-base font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
                >
                  About
                </div>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <div
                  onClick={() => router.push('/services') }
                  className="text-base font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
                >
                  Services
                </div>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <div
                  onClick={() => router.push('/presale') }
                  className="text-base font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
                >
                  Presale
                </div>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <div
                  onClick={() => router.push('/support') }
                  className="text-base font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
                >
                  Support
                </div>
              </NavbarItem>
            </NavbarContent>
            {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <div
                  onClick={() => router.push('/buy') }
                  className="text-base font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
                >
                  How to Buy
                </div>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <div
                  onClick={() => router.push('/media') }
                  className="text-base font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
                >
                  Media
                </div>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <div
                  onClick={() => router.push('/socials') }
                  className="text-base font-semibold text-[#CDCDCD] hover:text-white cursor-pointer" 
                >
                  Socials
                </div>
              </NavbarItem>
            </NavbarContent> */}
          </div>
          <NavbarContent justify="end">
            <NavbarItem>
              {/* <Button onClick={() => open()} color="primary" className="font-bold" variant="flat">
                            {isConnected ? "Connected" : "Connect"}
                        </Button> */}
              <Button 
              onClick={() => open()}
              className="font-semibold flex text-white rounded-[100px] px-8 py-6 text-base" 
              style={{
                background: "linear-gradient(90deg, rgba(145, 173, 186, 0.8) -11.36%, rgba(32, 81, 102, 0.096) 104.55%)",
                border: "1px solid #FFFFFF"
              }}>{isConnected ? "Connected" : "Connect"}
              {/* <FaArrowRight /> */}
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <Image src={"/img/Line 2.png"} alt="line" width={0} height={0}  className="w-full h-[1px]"/>
    </div>
  );
}