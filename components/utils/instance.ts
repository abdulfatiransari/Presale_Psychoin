import { useWeb3ModalProvider } from "@web3modal/ethers5/react";
import { ethers } from "ethers";
import PresaleABI from "@/contract/PresaleABI.json";
const contractAddress = "0x455f9DD747F1e1DA8Bc9c0842a8C11A2cB7045C9";

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