import { Button, Progress, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import PresaleABI from "@/contract/PresaleABI.json";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers5/react";
import { useRouter } from "next/router";
import { useStripeContext } from "@/context";
import { FaCopy, FaTelegramPlane } from "react-icons/fa";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "@/firebase/firebaseConfig";

export default function Presale() {
    const router = useRouter();
    const { walletProvider } = useWeb3ModalProvider();
    const { address } = useWeb3ModalAccount();
    const [contractOwner, setContractOwner] = useState<string>();
    const [presaleTotalToken, setPresaleTotalToken] = useState<string>();
    const [tokensRemains, settokensRemains] = useState<string>("");
    const [price, setPrice] = useState<any>();
    const [quantity, setQuantity] = useState<any>("1");
    const [recieverAddress, setRecieverAddress] = useState<string>();
    const [youPurchased, setYouPurchased] = useState<number>();
    const [loading, setLoading] = useState(false);
    const [bal, setBal] = useState<string>();
    const [keys, setKeys] = useState<string>("crypto");
    const {
        setClientSecret,
        setQuantity: setQ,
        setWalletAddress,
        clientSecret,
        walletAddress: walletAddressState,
        quantity: quantityState,
    } = useStripeContext();

    // const presaleAddress = "0x3974f11ff40dEF3Ae5b17aE3Db3C9Fb6cD8A385A";
    const presaleAddress = "0x80c6AeD0DD408F644be63ea37bc80650b7530a15";
    const tokenAddress = "0xd06ab1cC4daaf8091C74BaF6222b91BC4770A366";

    const owner = async () => {
        try {
            if (walletProvider) {
                const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
                const signer = ethersProvider.getSigner();
                const contract = new ethers.Contract(presaleAddress, PresaleABI, signer);
                const owner = await contract.owner();
                setContractOwner(owner);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const presaleTotalTokens = async () => {
        try {
            const ethersProvider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com");
            const contract = new ethers.Contract(presaleAddress, PresaleABI, ethersProvider);
            const presaleTotalTokens = await contract.presaleTotalTokens();
            const convert = ethers.utils.formatEther(presaleTotalTokens);
            setPresaleTotalToken(convert.toString());
        } catch (error) {
            console.log(error);
        }
    };

    const tokensSold = async () => {
        try {
            const ethersProvider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com");
            // const signer = ethersProvider.getSigner();
            const contract = new ethers.Contract(presaleAddress, PresaleABI, ethersProvider);
            const tokensSold = await contract.tokensSold();
            const convert = ethers.utils.formatEther(tokensSold);
            settokensRemains(convert.toString());
        } catch (error) {
            console.log(error);
        }
    };

    const tokenPrice = async () => {
        try {
            const ethersProvider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com");
            // const signer = ethersProvider.getSigner();
            const contract = new ethers.Contract(presaleAddress, PresaleABI, ethersProvider);
            const tokenPrice = await contract.tokenPrice();
            const convert = ethers.utils.formatEther(tokenPrice);
            setPrice(convert.toString());
        } catch (error) {
            console.log(error);
        }
    };

    const purchasedTokens = async () => {
        try {
            if (walletProvider) {
                const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
                const signer = ethersProvider.getSigner();
                const contract = new ethers.Contract(presaleAddress, PresaleABI, signer);
                const purchasedTokens = await contract.purchasedTokens(address);
                const convert = ethers.utils.formatEther(purchasedTokens);
                setYouPurchased(Number(convert));
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
            const presaleContract = new ethers.Contract(presaleAddress, PresaleABI, signer);

            if (quantity < 10) {
                setLoading(false);
                return toast.error("Quantity must be greater or equal than 10");
            }

            const convertQuantity = ethers.utils.parseUnits(quantity, "18");

            const calculatePrice = ethers.utils.parseUnits(price, "18");

            const calculateValue = Number(quantity) * Number(calculatePrice);

            if (Number(bal) <= Number(quantity) * Number(price)) {
                return toast.error("Insufficient Funds");
            }
            setLoading(true);
            const buyTokens = await presaleContract.purchaseTokens(convertQuantity.toString(), {
                value: calculateValue.toString(),
                gasPrice: gasPrice,
                gasLimit: "210000",
            });
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
                const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
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
                return toast.error("Please provide receiver's wallet address");
            }
            // Check if the address is valid
            if (!ethers.utils.isAddress(recieverAddress)) {
                return toast.error("Invalid receiver's address");
            }

            setLoading(true);

            // if(quantity < 10){
            //   setLoading(false);
            //   return toast.error("Quantity must be greater or equal than 10");
            // }

            const response = await axios.post("/api/createNormalSession", {
                amount: Math.round(0.04 * 100 * parseFloat(quantity)),
                quantity: quantity,
                walletAddress: recieverAddress,
            });

            console.log(response);

            const { client_secret, walletAddress, quantity: q } = response.data;
            setWalletAddress(walletAddress);
            setQ(q);
            setClientSecret(client_secret);
            addData();
            localStorage.removeItem("toastRead");
            setTimeout(() => {
                router.push("/checkout");
            }, 2000);
        } catch (error) {
            console.log(error);
            setLoading(false);
            return toast.error("Failed transaction");
        }
    };

    const shortenAddress = (tokenAddress: string) => {
        if (!tokenAddress) return "";
        return `${tokenAddress.slice(0, 14)}...${tokenAddress.slice(-4)}`;
    };

    // Function to copy the address to clipboard and show toast
    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(tokenAddress)
            .then(() => {
                toast.success("ERC20 (Polygon) Wallet Address copied.");
            })
            .catch(() => {
                toast.error("Failed to copy address.");
            });
    };

    const addData = async () => {
        try {
            const docRef = await addDoc(collection(fireDB, "users-transactions"), {
                clientSecret: clientSecret,
                walletAddress: walletAddressState,
                quantity: quantityState,
                createdAt: new Date().toISOString(),
            });
            console.log("Document written with ID: ", docRef);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        owner();
        purchasedTokens();
        getBalance();
        // getquery();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [address]);

    useEffect(() => {
        presaleTotalTokens();
        tokenPrice();
        tokensSold();
    }, []);

    return (
        <div id="buynow">
            <div
                className="flex flex-col max-w-full pl-28 pr-16 pt-10 pb-24 max-md:px-8 max-sm:px-4"
                style={{
                    backgroundImage: 'url("/img/presale.gif")',
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* <div className="flex justify-center items-center">
                    <div
                        className="rounded-t-[30px]  border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 bg-gradient-to-t "
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
                        <div className="flex justify-center items-center md:gap-6 px-16 max-sm:px-6 max-md:px-8 pb-6 max-sm:mx-0">
                            <p className="text-[20px] max-sm:text-[16px]">Invite your Friends and receive 5% Bonus!</p>
                            <Button
                                className="font-semibold flex text-white rounded-[100px] px-8 py-6  max-sm:py-4 text-base"
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
                </div> */}
                <div className="flex justify-end items-center gap-4 max-sm:items-center max-sm:justify-center w-full mx-auto flex-wrap">
                    <div className="flex flex-col w-full max-w-[440px] ">
                        <h1 className="max-w-[400px] text-[48px] mb-5 max-sm:text-center max-sm:text-[26px] text-white font-semibold">
                            Get Your Psychoin
                        </h1>
                        <div
                            className="rounded-t-[30px] px-6 py-4 mt-5 flex flex-col border-t-1.5 border-t-gray-400 border-x-gray-500 border-x-1 w-full"
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
                                            "w-full relative rounded-none p-0 border-b border-divider gap-[100px] max-sm:gap-[20px]",
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
                                                <span
                                                    className={`text-[16px] max-sm:text-[14px] font-bold ${
                                                        keys === "crypto" ? "text-[#6D00CC]" : "text-[#CDCDCD]"
                                                    } cursor-pointer`}
                                                >
                                                    Buy with Crypto (Matic)
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
                                                <span
                                                    className={`text-[16px] max-sm:text-[14px] font-bold ${
                                                        keys === "fiat" ? "text-[#6D00CC]" : "text-[#CDCDCD]"
                                                    } cursor-pointer`}
                                                >
                                                    Buy with Fiat
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
                            {/* <div className="flex justify-center items-center">
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
              </div> */}
                            {/* {keys === "crypto" && ( */}
                            <>
                                <div className="w-full gap-[200px] flex">
                                    <div>
                                        <p className="text-[18px] text-white">0.04</p>
                                        <p className="text-[14px] text-[#CDCDCD] whitespace-nowrap">Current Price</p>
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
                            {/* )} */}
                            <div className="flex justify-start gap-[4px] mb-2">
                                <span className="text-[16px] text-[#CDCDCD] mt-2 ">You Purchased:</span>
                                <span className="text-[24px] font-semibold ">{youPurchased?.toFixed(2)}</span>
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
                                <span className="text-[16px] text-[#CDCDCD] mt-2">Account Balance:</span>
                                <span className="text-[24px] font-semibold ">{bal ? Number(bal).toFixed(2) : "0"}</span>
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
                                    <div className="flex gap-[4px] mb-2 max-sm:flex-wrap">
                                        <span className="text-[16px] text-[#CDCDCD] mt-2">Receiver Address:</span>
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
                            <div className="flex flex-col">
                                <div className="flex gap-16 mb-2">
                                    <span className="text-[16px] text-[#CDCDCD] mt-2">Quantity:</span>
                                    <input
                                        placeholder="Quantity"
                                        className="font-semibold flex text-white border-1 border-gray-500 bg-transparent rounded-[100px] px-4 py-2 text-base max-sm:max-w-[100px]"
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        // min={10}
                                    />
                                </div>
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
                                        isLoading={loading}
                                    >
                                        Buy Token via Fiat
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col w-full max-w-[440px]">
                        <div
                            className={`rounded-[30px] px-14 max-md:px-8 ${
                                keys === "crypto" ? "mt-[66px]" : "mb-0"
                            } max-sm:px-6 py-6 flex flex-col border-y-1.5 border-t-gray-400 border-x-gray-500 border-x-1 w-full`}
                            style={{
                                background: "radial-gradient(at center top, #222833, #0C0C0C)",
                            }}
                        >
                            <div className="flex gap-1 justify-center ">
                                <Image src={"/img/PSYCHOIN.png"} alt="logo" width={30} height={30} />
                                <span className="font-semibold text-[18px] text-white">Welcome to</span>
                                <p className="font-bold text-[18px] text-[#6D00CC]">PSYCHOIN</p>
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
                            <p className="text-white font-semibold text-[16px] mt-3">
                                To view your purchased Psychoin tokens, simply paste this token address into your
                            </p>
                            <p className="text-white font-bold text-[16px] mt-3 mb-2">ERC20 (Polygon) Wallet:</p>
                            <div className="flex justify-between items-center text-white border border-gray-500 bg-transparent rounded-full px-4 py-2 text-base font-semibold cursor-pointer">
                                <a href="https://polygonscan.com/address/0xd06ab1cC4daaf8091C74BaF6222b91BC4770A366">
                                    <span>{shortenAddress(tokenAddress)}</span>
                                </a>
                                <button className="ml-2 text-white" onClick={copyToClipboard} title="Copy to clipboard">
                                    <FaCopy />
                                </button>
                            </div>
                            <div className="mt-4 mb-3 flex justify-center items-center w-full">
                                <Image
                                    src={"/img/Line 8.png"}
                                    alt="line"
                                    width={0}
                                    height={0}
                                    className="w-[350px] h-[1px]"
                                />
                            </div>
                            <p className="text-white font-semibold text-[16px] ">
                                For round-the-clock support, join our Telegram group here.
                            </p>
                            <div className="mt-4 mb-6 flex justify-center items-center w-full">
                                <Image
                                    src={"/img/Line 8.png"}
                                    alt="line"
                                    width={0}
                                    height={0}
                                    className="w-[350px] h-[1px]"
                                />
                            </div>
                            <div className="flex justify-center">
                                <a href="https://t.me/psychoinofficialproject">
                                    <Button className="font-semibold flex text-white bg-[#0099D9] rounded-[100px] px-8 py-6 text-[17px]">
                                        <FaTelegramPlane className="text-[26px] mt-1" />
                                        Join Telegram
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
