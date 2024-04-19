import { ethers } from "ethers";
import PresaleABI from './PresaleABI.json'

const presaleAddress = "0x3974f11ff40dEF3Ae5b17aE3Db3C9Fb6cD8A385A";

  export const sendTokenByFiat = async (address: string, quantity: string, callback: () => void) => {
    try {
      console.log("start sending token")
      if (!process.env.NEXT_PUBLIC_PRIVATE_KEY) {
        throw new Error("Private key is not defined");
    }
      const provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-mainnet.public.blastapi.io"
      );
      console.log(provider)
      const signer = new ethers.Wallet(
        process.env.NEXT_PUBLIC_PRIVATE_KEY,
        provider
      );
      const gasPrice = signer.getGasPrice();
      console.log("middle")
      const contract = new ethers.Contract(presaleAddress, PresaleABI, signer);
      console.log(contract,address, quantity, "asdsad");
      const buyTokens = await contract.purchaseTokensByFiat(
        address, ethers.utils.parseUnits(quantity, '18').toString(),
        {
          gasPrice: gasPrice,
          gasLimit: "210000",
        }
      );
      console.log(buyTokens)
      await buyTokens.wait();

      console.log("before callback")

      callback()
      console.log("after callbacks")
    } catch (error) {
      console.log(error);
    }
  };