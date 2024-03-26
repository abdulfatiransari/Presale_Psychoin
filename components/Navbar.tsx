import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import Logo from "./Logo";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  console.log(isMenuOpen)

  const menuItems = [
    { home: "Home" },
    { about: "About" },
    { services: "Services" },
    { presale: "Presale" },
    { support: "Support" },
  ];

  const router = useRouter();
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();

  return (
    <div>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        // shouldHideOnScroll
        isMenuOpen={isMenuOpen}
        className="bg-transparent py-1 px-8 max-sm:px-2 max-sm:pl-0 flex justify-between [&>header]:!max-w-full z-10"
      >
        <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden "
        />
        <NavbarBrand className="flex items-center gap-2">
          <Logo />
          <p className="font-semibold text-4xl max-sm:text-2xl max-md:text-3xl text-inherit">
            Psychoin
          </p>
        </NavbarBrand>
        <div className="flex gap-4">
          <NavbarContent className="hidden md:flex gap-4" justify="center">
            <NavbarItem>
              <div
                onClick={() =>{
                  setIsMenuOpen(false),
                   router.push("/")
                  }}
                className="text-base font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
              >
                Home
              </div>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="hidden md:flex gap-4" justify="center">
            <NavbarItem>
              <div
                onClick={() => router.push("/about")}
                className="text-base font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
              >
                About
              </div>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="hidden md:flex gap-4" justify="center">
            <NavbarItem>
              <div
                onClick={() => router.push("/services")}
                className="text-base font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
              >
                Services
              </div>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="hidden md:flex gap-4" justify="center">
            <NavbarItem>
              <div
                onClick={() => router.push("/presale")}
                className="text-base font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
              >
                Presale
              </div>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="hidden md:flex gap-4" justify="center">
            <NavbarItem>
              <div
                onClick={() => router.push("/support")}
                className="text-base font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
              >
                Support
              </div>
            </NavbarItem>
          </NavbarContent>
        </div>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              onClick={() => open()}
              className="font-semibold flex text-white rounded-[100px] px-8 max-sm:px-2 max-sm:py-2 py-6 text-base"
              style={{
                background:
                  "linear-gradient(90deg, rgba(145, 173, 186, 0.8) -11.36%, rgba(32, 81, 102, 0.096) 104.55%)",
                border: "1px solid #FFFFFF",
              }}
            >
              {isConnected ? "Connected" : "Connect"}
              {/* <FaArrowRight /> */}
            </Button>
          </NavbarItem>
        </NavbarContent>
        {isMenuOpen && 
        <NavbarMenu className="bg-[#000000] py-10 px-8">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <div className="flex flex-col gap-1">
                <div
                  onClick={() => {router.push("/");  setIsMenuOpen(false)}}
                  className="text-xl font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
                >
                  {item.home}
                </div>
                <div
                  onClick={() => {router.push("/about"), setIsMenuOpen(false)}}
                  className="text-xl font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
                >
                  {item.about}
                </div>
                <div
                  onClick={() => {router.push("/services"), setIsMenuOpen(false)}}
                  className="text-xl font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
                >
                  {item.services}
                </div>
                <div
                  onClick={() => {router.push("/presale"), setIsMenuOpen(false)}}
                  className="text-xl font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
                >
                  {item.presale}
                </div>
                <div
                  onClick={() => {router.push("/support"), setIsMenuOpen(false)}}
                  className="text-xl font-semibold text-[#CDCDCD] hover:text-white cursor-pointer"
                >
                  {item.support}
                </div>
              </div>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        }
      </Navbar>
      <Image
        src={"/img/Line 2.png"}
        alt="line"
        width={0}
        height={0}
        className="w-full h-[1px]"
      />
    </div>
  );
}
