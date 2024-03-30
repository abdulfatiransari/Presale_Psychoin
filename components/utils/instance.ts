import { useWeb3ModalProvider } from "@web3modal/ethers5/react";
import { ethers } from "ethers";
import PresaleABI from "@/contract/PresaleABI.json";
const contractAddress = "0xC1E05ccDb22b44a1DC66Ff781D83C6D001385245";

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