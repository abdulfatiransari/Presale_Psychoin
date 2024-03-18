import { useWeb3ModalProvider } from "@web3modal/ethers5/react";
import { ethers } from "ethers";
import React, { useEffect } from "react";

export default function GetPrice() {
    const { walletProvider } = useWeb3ModalProvider();
    const pairAddress = "0xe4b8583ccb95b25737c016ac88e539d0605949e8";

    // ABI (Application Binary Interface) of the Uniswap V2 Pair contract
    const pairABI = [
        "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
    ];

    const pairABIV3 = ["function slot0() external view returns (int24 tick, uint128 liquidity, uint16 feeProtocol)"];

    const fetchPriceV3 = async () => {
        try {
            if (!walletProvider) {
                throw new Error("Wallet provider not available");
            }
            const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
            const pairContract = new ethers.Contract(pairAddress, pairABIV3, ethersProvider);
            const slot0 = await pairContract.slot0();
            console.log("🚀 ~ fetchPriceV3 ~ slot0:", slot0);
            const tick = parseInt(slot0.tick);
            console.log("🚀 ~ fetchPriceV3 ~ tick:", tick);
            const liquidity = parseInt(slot0.liquidity);
            console.log("🚀 ~ fetchPriceV3 ~ liquidity:", liquidity);

            // Calculate the current price based on the tick
            const price = Math.pow(1.0001, tick) * Math.sqrt(liquidity);

            const ethToUsdExchangeRate = 3785.88;
            const priceInUSD = price * ethToUsdExchangeRate;

            console.log("🚀 ~ fetchPriceV3 ~ priceInUSD:", priceInUSD);
            console.log("🚀 ~ fetchPriceV3 ~ price:", price);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchPrice = async () => {
        try {
            if (!walletProvider) {
                throw new Error("Wallet provider not available");
            }
            const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
            const pairContract = new ethers.Contract(pairAddress, pairABI, ethersProvider);
            const reserves = await pairContract.getReserves();
            const reserve0 = parseFloat(reserves.reserve0);
            const reserve1 = parseFloat(reserves.reserve1);

            // Calculate the price of token1 in terms of token0
            const price = reserve0 / reserve1;
            console.log("🚀 ~ fetchPrice ~ price:", price);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPrice();
        fetchPriceV3();
    }, []);
    return <div></div>;
}
