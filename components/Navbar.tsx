import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import Logo from "./Logo";

export default function Header() {
    const { open } = useWeb3Modal();
    const { isConnected } = useWeb3ModalAccount();
    return (
        <Navbar shouldHideOnScroll className="bg-transparent">
            <NavbarBrand>
                <Logo />
                <p className="font-bold text-inherit">Psychoin</p>
            </NavbarBrand>
            {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
            </NavbarContent> */}
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button onClick={() => open()} color="primary" className="font-bold" variant="flat">
                        {isConnected ? "Connected" : "Connect"}
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
