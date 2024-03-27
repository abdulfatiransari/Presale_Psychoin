import { Button, Progress, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Timer from "./presaleSections/Timer";
import SlidingCompanies from "./presaleSections/Companies";
import BotSections from "./presaleSections/BotSection";
import Token from "./presaleSections/Token";
import Graph from "./presaleSections/Graph";
import Team from "./presaleSections/OurTeam";
import RoadMap from "./presaleSections/RoadMap";
import FAQ from "./presaleSections/FAQ";
import axios from "axios";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import PresaleABI from "@/contract/PresaleABI.json";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react";
import PresaleFunc from "./PresaleFunc";

export default function Presale() {
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();
  const [contractOwner, setContractOwner] = useState<string>();
  const [presaleTotalToken, setPresaleTotalToken] = useState<string>();
  const [tokensRemains, settokensRemains] = useState<string>("");
  const [price, setPrice] = useState<any>();
  const [quantity, setQuantity] = useState<any>("100");
  const [recieverAddress, setRecieverAddress] = useState<string>();
  const [youPurchased, setYouPurchased] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [bal, setBal] = useState<string>();
  const [keys, setKeys] = useState<string>("crypto");
  const [wallet, setWallet] = useState<string>("");

  const presaleAddress = "0x455f9DD747F1e1DA8Bc9c0842a8C11A2cB7045C9";
  
  const owner = async () => {
    try {
      if (walletProvider) {
        const ethersProvider = new ethers.providers.Web3Provider(
          walletProvider
        );
        const signer = ethersProvider.getSigner();
        const contract = new ethers.Contract(
          presaleAddress,
          PresaleABI,
          signer
        );
        const owner = await contract.owner();
        setContractOwner(owner);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const presaleTotalTokens = async () => {
    try {
      if (walletProvider) {
        const ethersProvider = new ethers.providers.Web3Provider(
          walletProvider
        );
        const signer = ethersProvider.getSigner();
        const contract = new ethers.Contract(
          presaleAddress,
          PresaleABI,
          signer
        );
        const presaleTotalTokens = await contract.presaleTotalTokens();
        const convert = ethers.utils.formatEther(presaleTotalTokens);
        setPresaleTotalToken(convert.toString());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const tokensSold = async () => {
    try {
      if (walletProvider) {
        const ethersProvider = new ethers.providers.Web3Provider(
          walletProvider
        );
        const signer = ethersProvider.getSigner();
        const contract = new ethers.Contract(
          presaleAddress,
          PresaleABI,
          signer
        );
        const tokensSold = await contract.tokensSold();
        const convert = ethers.utils.formatEther(tokensSold);
        settokensRemains(convert.toString());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const tokenPrice = async () => {
    try {
      if (walletProvider) {
        const ethersProvider = new ethers.providers.Web3Provider(
          walletProvider
        );
        const signer = ethersProvider.getSigner();
        const contract = new ethers.Contract(
          presaleAddress,
          PresaleABI,
          signer
        );
        const tokenPrice = await contract.tokenPrice();
        const convert = ethers.utils.formatEther(tokenPrice);
        setPrice(convert.toString());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const purchasedTokens = async () => {
    try {
      if (walletProvider) {
        const ethersProvider = new ethers.providers.Web3Provider(
          walletProvider
        );
        const signer = ethersProvider.getSigner();
        const contract = new ethers.Contract(
          presaleAddress,
          PresaleABI,
          signer
        );
        const purchasedTokens = await contract.purchasedTokens(address);
        const convert = ethers.utils.formatEther(purchasedTokens);
        setYouPurchased(convert.toString());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getquery = async () => {
    const query = window.location.href.split("?")[1];
    console.log(query, "query");
  };

  const buyToken = async () => {
    try {
      if (!walletProvider) {
        return toast.error("Wallet provider not available");
      }
      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
      const signer = ethersProvider.getSigner();
      const gasPrice = signer.getGasPrice();
      const presaleContract = new ethers.Contract(
        presaleAddress,
        PresaleABI,
        signer
      );

      const convertQuantity = ethers.utils.parseUnits(quantity, "18");

      const calculatePrice = ethers.utils.parseUnits(price, "18");

      const calculateValue = Number(quantity) * Number(calculatePrice);

      if (Number(bal) <= Number(quantity) * Number(price)) {
        return toast.error("Insufficient Funds");
      }
      setLoading(true);
      const buyTokens = await presaleContract.purchaseTokens(
        convertQuantity.toString(),
        {
          value: calculateValue.toString(),
          gasPrice: gasPrice,
          gasLimit: "210000",
        }
      );
      const result = await buyTokens.wait();
      console.log(result);
      setLoading(false);
      return toast.success("Successfuly Transfered");
    } catch (error) {
      console.log(error);
      setLoading(false);
      return toast.error("Transfered Failed");
    }
  };

  const getBalance = async () => {
    try {
      if (walletProvider && address) {
        const ethersProvider = new ethers.providers.Web3Provider(
          walletProvider
        );
        const bal = await ethersProvider.getBalance(address?.toString());
        const convert = ethers.utils.formatEther(bal);
        setBal(convert);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const buyFiat = async () => {
    try {
      if (!recieverAddress) {
        return toast.error("Please provide a wallet address");
      }
      if (recieverAddress) {
        const verifyAddress = ethers.utils.getAddress(recieverAddress);
      } else {
        return toast.error("Invalid Address");
      }
      
      const response = await axios.post("/api/createNormalSession", {
        amount: Math.round(price.toString() * 100),
        quantity: quantity,
        tokenAddress: presaleAddress,
        walletAddress: recieverAddress,
      });

      console.log(response)
      const { url } = response.data;
      window.open(url, "_blank");
    } catch (error) {
      console.log(error);
      return toast.error("Failed transaction");
    }
  };

  const checkPaymentStatus = async () => {
    try {
      const response = await axios.post("/api/paymentStatus", {
        paymentID: "pi_3OuYrVE8z6GTOxFE1m7bM6f5",
      });
      console.log(response);
    } catch (error) {
      console.error("Error fetching payment status:", error);
    }
  };

  useEffect(() => {
    owner();
    presaleTotalTokens();
    tokensSold();
    tokenPrice();
    purchasedTokens();
    getBalance();
    // getquery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return (
    <div>
      <div
        className="flex flex-col max-w-full px-28 py-10 max-md:px-8 max-sm:px-8"
        style={{
          backgroundImage: 'url("/img/presaleBanner.svg")',
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center">
          <div
            className="rounded-t-[30px] border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 bg-gradient-to-t "
            style={{
              background: "radial-gradient(at center top, #222833, #0C0C0C)",
            }}
          >
            <div className="flex justify-end pt-3 px-4">
              <Image
                src="/img/Vector.svg"
                alt="Close Button"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
            <div className="flex justify-center items-center gap-6 px-16 max-md:px-8 pb-6">
              <p className="text-[20px] ">
                Invite your Friends and receive 5% Bonus!
              </p>
              <Button
                className="font-semibold flex text-white rounded-[100px] px-8 py-6 text-base"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(145, 173, 186, 0.8) -11.36%, rgba(32, 81, 102, 0.096) 104.55%)",
                  border: "1px solid #FFFFFF",
                }}
              >
                REFER NOW
                <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center max-sm:items-center max-sm:justify-center">
          <div className="flex flex-col">
            <h1 className="w-[400px] max-sm:max-w-[250px] text-[48px] max-sm:text-[36px] text-white font-semibold">
              Self-Custodial Trading Bot
            </h1>
            <div
              className="rounded-t-[30px] px-6 py-4 flex flex-col border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 w-full"
              style={{
                background: "radial-gradient(at center top, #222833, #0C0C0C)",
              }}
            >
              <div className="flex justify-center items-center">
                <Tabs
                  aria-label="Options"
                  color="primary"
                  variant="underlined"
                  classNames={{
                    tabList:
                      "w-full relative rounded-none p-0 border-b border-divider gap-[160px]",
                    cursor: "w-full bg-white",
                    tab: "max-w-fit px-0 h-10",
                    tabContent: "group-data-[selected=true]:text-[#06b6d4]",
                  }}
                >
                  <Tab
                    key="crypto"
                    title={
                      <div
                        className="flex items-center space-x-2"
                        onClick={() => setKeys("crypto")}
                      >
                        <span className="text-[16px] font-bold text-[#6D00CC] cursor-pointer">
                          Buy Crypto
                        </span>
                      </div>
                    }
                  />
                  <Tab
                    key="fiat"
                    title={
                      <div
                        className="flex items-center space-x-2"
                        onClick={() => setKeys("fiat")}
                      >
                        <span className="text-[16px] font-bold text-[#CDCDCD] cursor-pointer">
                          Buy Fiat
                        </span>
                      </div>
                    }
                  />
                </Tabs>
              </div>
              <div className="mt-2 mb-2 flex justify-center items-center w-full">
                <Image
                  src={"/img/Line 8.png"}
                  alt="line"
                  width={0}
                  height={0}
                  className="w-[350px] h-[1px]"
                />
              </div>
              {keys === "crypto" ? (
                <>
                  <p className="text-[20px] font-semibold mb-3">
                    {tokensRemains && presaleTotalToken
                      ? `${
                          Number(presaleTotalToken) - Number(tokensRemains)
                        } / ${presaleTotalToken} TOKEN`
                      : `0 / TOKEN`}
                  </p>
                  {/* <p className="text-[16px] text-[#CDCDCD] mb-4">
                  Buy in before stage price increases!
                </p> */}
                </>
              ) : (
                <>
                  <p className="text-[20px] font-semibold mb-3">
                    {tokensRemains && presaleTotalToken
                      ? `${
                          Number(presaleTotalToken) - Number(tokensRemains)
                        } / ${presaleTotalToken} TOKEN`
                      : `0 / TOKEN`}
                  </p>
                  {/* <div className="flex justify-between">
                  <span className="text-[16px] text-[#CDCDCD] mb-4">
                    Token Sold
                  </span>
                  <span className="text-[16px] text-[#CDCDCD] mb-4">0%</span>
                </div> */}
                </>
              )}
              {/* <p className="text-[16px] text-[#CDCDCD] mr-[90px] mb-4">
              Buy in before stage price increases!
            </p> */}
              {/* <div className="w-[340px] border border-white rounded-2xl h-2 bg-gradient-to-r from-[#6D00CC] to-transparent mb-4"></div> */}
              <div className="flex justify-center items-center">
                <Progress
                  size="md"
                  radius="sm"
                  className="max-w-[380px] mb-4"
                  classNames={{
                    base: "max-w-md ",
                    track:
                      "drop-shadow-md border border-default bg-transparent",
                    indicator: "bg-gradient-to-r from-[#6D00CC] to-[#6D00CC]",
                    label: "tracking-wider font-medium text-white",
                    value: "text-white",
                  }}
                  label="Token Sold"
                  value={
                    tokensRemains && presaleTotalToken
                      ? (Number(tokensRemains) / Number(presaleTotalToken)) *
                        100
                      : 0
                  }
                  showValueLabel={true}
                />
              </div>
              {keys === "crypto" && (
                <>
                  <div className="w-full gap-[200px] flex">
                    <div>
                      <p className="text-[18px] text-white">
                        {price ? price : "0.01"}
                      </p>
                      <p className="text-[14px] text-[#CDCDCD] whitespace-nowrap">
                        Current Price
                      </p>
                    </div>
                    {/* <div>
                <p className="text-[18px] text-white">$0.0128</p>
                <p className="text-[14px] text-[#CDCDCD] whitespace-nowrap">
                  Next Stage Price
                </p>
              </div> */}
                  </div>
                  <div className="mt-2 mb-2 flex justify-center items-center">
                    <Image
                      src={"/img/Line 8.png"}
                      alt="line"
                      width={0}
                      height={0}
                      className="w-[350px] h-[1px]"
                    />
                  </div>
                </>
              )}
              <div className="flex justify-start gap-[4px] mb-2">
                <span className="text-[16px] text-[#CDCDCD] mt-2 ">
                  You Purchased:
                </span>
                <span className="text-[24px] font-semibold ">
                  {youPurchased}
                </span>
              </div>
              <div className="flex gap-[4px] mr-[60px] mb-2">
                <span className="text-[16px] text-[#CDCDCD] mt-2">Wallet:</span>
                <span className="text-[24px] font-semibold ">
                  {address
                    ? `${address?.slice(0, 6)}...${address?.slice(
                        address?.length - 6,
                        address?.length
                      )}`
                    : "0x"}
                </span>
              </div>
              <div className="flex gap-[4px] mr-[100px] mb-2">
                <span className="text-[16px] text-[#CDCDCD] mt-2">
                  Account Balance:
                </span>
                <span className="text-[24px] font-semibold ">
                  {bal ? Number(bal).toFixed(2) : "0"}
                </span>
              </div>
              {keys === "fiat" && (
                <>
                  <div className="mt-2 mb-2 flex justify-center items-center">
                    <Image
                      src={"/img/Line 8.png"}
                      alt="line"
                      width={0}
                      height={0}
                      className="w-[350px] h-[1px]"
                    />
                  </div>
                  <div className="flex gap-[4px] mb-2">
                    <span className="text-[16px] text-[#CDCDCD] mt-2">
                      Reciever Address:
                    </span>
                    <input
                      placeholder="Reciever Address"
                      className="font-semibold flex text-white border-1 border-gray-500 bg-transparent rounded-[100px] px-4 py-2 text-base"
                      type="text"
                      value={recieverAddress}
                      onChange={(e) => setRecieverAddress(e.target.value)}
                    />
                  </div>
                </>
              )}
              <div className="mt-2 mb-2 flex justify-center items-center">
                <Image
                  src={"/img/Line 8.png"}
                  alt="line"
                  width={0}
                  height={0}
                  className="w-[350px] h-[1px]"
                />
              </div>
              <div className="flex gap-16 mb-2">
                <span className="text-[16px] text-[#CDCDCD] mt-2">
                  Quantity:
                </span>
                <input
                  placeholder="Quantity"
                  className="font-semibold flex text-white border-1 border-gray-500 bg-transparent rounded-[100px] px-4 py-2 text-base max-sm:max-w-[100px]"
                  type="number"
                  value={quantity || 10}
                  onChange={(e) => setQuantity(e.target.value)}
                  min={10}
                />
              </div>
              <div className="mt-2 mb-2 flex justify-center items-center">
                <Image
                  src={"/img/Line 8.png"}
                  alt="line"
                  width={0}
                  height={0}
                  className="w-[350px] h-[1px]"
                />
              </div>
              {keys === "crypto" ? (
                <div className="flex justify-center">
                  <Button
                    onClick={buyToken}
                    className="font-semibold flex text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base"
                    isLoading={loading}
                  >
                    Buy Token
                  </Button>
                </div>
              ) : (
                <div className="flex justify-center">
                  <Button
                    onClick={() => buyFiat()}
                    className="font-semibold flex text-white bg-[#6D00CC] rounded-[100px] px-8 py-6 text-base"
                  >
                    Buy Token via Fiat
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Timer />
      <h1 className="text-center text-white text-[20px] my-10 font-semibold max-sm:px-8">
        Supported by many companies around the world
      </h1>
      <Image
        src={"/img/Line 2.png"}
        alt="line"
        width={0}
        height={0}
        className="w-full h-[1px] mt-10 mb-12"
      />
      <SlidingCompanies />
      <Image
        src={"/img/Line 2.png"}
        alt="line"
        width={0}
        height={0}
        className="w-full h-[1px] mb-10  mt-12"
      />
      <BotSections />
      <Token />
      <Graph />
      <Team />
      <RoadMap />
      <FAQ />
    </div>
  );
}
