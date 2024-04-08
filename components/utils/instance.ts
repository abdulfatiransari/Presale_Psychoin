import { useWeb3ModalProvider } from "@web3modal/ethers5/react";
import { ethers } from "ethers";
import PresaleABI from "@/contract/PresaleABI.json";
const contractAddress = "0x3974f11ff40dEF3Ae5b17aE3Db3C9Fb6cD8A385A";

export const useWeb3Instance = () => {
    // Call useWeb3ModalProvider directly within the Hook
    const { walletProvider } = useWeb3ModalProvider();
    try {
        const ethersProvider = new ethers.providers.Web3Provider(walletProvider as any);
        const signer = ethersProvider.getSigner();
        const myContract = new ethers.Contract(contractAddress, PresaleABI, signer);
        return myContract;
    } catch (error) {
        return null;
    }
};