import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers5/react";
import { Button, Input, Progress, Tab, Tabs } from "@nextui-org/react";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import PresaleABI from "@/contract/PresaleABI.json";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { parseCookies, setCookie } from "nookies";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import stripe from "stripe";

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`);

export default function PresaleFunc() {
    const { walletProvider } = useWeb3ModalProvider();
    const { address } = useWeb3ModalAccount();
    const [contractOwner, setContractOwner] = useState<string>();
    const [presaleTotalToken, setPresaleTotalToken] = useState<string>();
    const [tokensRemains, settokensRemains] = useState<string>();
    const [price, setPrice] = useState<any>();
    const [quantity, setQuantity] = useState<any>("100");
    const [youPurchased, setYouPurchased] = useState<string>();
    const [bal, setBal] = useState<string>();
    const [timeLeft, setTimeLeft] = useState<string>(`0 days, 0 hours, 0 minutes, 0 seconds`);
    const [timers, setTimers] = useState<number>();
    const [keys, setKeys] = useState<string>("crypto");
    const [wallet, setWallet] = useState<string>("");

    const router = useRouter();

    const presaleAddress = "0x3974f11ff40dEF3Ae5b17aE3Db3C9Fb6cD8A385A";

    let clientSecret = "";

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
            if (walletProvider) {
                const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
                const signer = ethersProvider.getSigner();
                const contract = new ethers.Contract(presaleAddress, PresaleABI, signer);
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
                const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
                const signer = ethersProvider.getSigner();
                const contract = new ethers.Contract(presaleAddress, PresaleABI, signer);
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
                const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
                const signer = ethersProvider.getSigner();
                const contract = new ethers.Contract(presaleAddress, PresaleABI, signer);
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
                const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
                const signer = ethersProvider.getSigner();
                const contract = new ethers.Contract(presaleAddress, PresaleABI, signer);
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
                toast.error("Wallet provider not available");
                return;
            }
            const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
            const signer = ethersProvider.getSigner();
            const gasPrice = signer.getGasPrice();
            const presaleContract = new ethers.Contract(presaleAddress, PresaleABI, signer);

            const convertQuantity = ethers.utils.parseUnits(quantity, "18");

            const calculatePrice = ethers.utils.parseUnits(price, "18");

            const calculateValue = Number(quantity) * Number(calculatePrice);

            const buyTokens = await presaleContract.purchaseTokens(convertQuantity.toString(), {
                value: calculateValue.toString(),
                gasPrice: gasPrice,
                gasLimit: "210000",
            });
            const result = await buyTokens.wait();
            console.log(result);
            toast("Successfuly Transfered");
        } catch (error) {
            console.log(error);
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

    const timer = async () => {
        try {
            if (walletProvider && address) {
                const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
                const signer = ethersProvider.getSigner();
                const contract = new ethers.Contract(presaleAddress, PresaleABI, signer);
                const time = await contract.presaleEndTime();
                setTimers(time);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const convertTimestamp = () => {
        try {
            const updateTimer = async () => {
                const now = Math.floor(Date.now() / 1000);
                const timeLeftInSeconds = Number(timers) - now;

                if (timeLeftInSeconds <= 0) {
                    setTimeLeft("Presale has ended");
                } else {
                    const days = Math.floor(timeLeftInSeconds / (60 * 60 * 24));
                    const hours = Math.floor((timeLeftInSeconds % (60 * 60 * 24)) / (60 * 60));
                    const minutes = Math.floor((timeLeftInSeconds % (60 * 60)) / 60);
                    const seconds = Math.floor(timeLeftInSeconds % 60);

                    setTimeLeft(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

                    // Call updateTimer again after 1 second
                    setTimeout(updateTimer, 1000);
                }
            };
            updateTimer();
        } catch (error) {
            console.log(error);
        }
    };

    const buyFiat = async () => {
        try {
            if (!wallet) {
                toast.error("Please provide a wallet address");
                return;
            }
            if (wallet) {
                const verifyAddress = ethers.utils.getAddress(wallet);
            } else {
                toast.error("Invalid Address");
            }
            const response = await axios.post("/api/createNormalSession", {
                amount: Math.round(price.toString() * 100),
                quantity: quantity,
                tokenAddress: presaleAddress,
                walletAddress: wallet,
            });
            const { url } = response.data;
            // router.push(url);
            window.open(url, "_blank");
        } catch (error) {
            console.log(error);
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

    // useEffect(() => {
    // Fetches an onramp session and captures the client secret
    // fetch("/api/createSession", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //         transaction_details: {
    //             destination_currency: "usdc",
    //             destination_exchange_amount: "13.37",
    //             destination_network: "ethereum",
    //         },
    //     }),
    // })
    //     .then((res) => res.json())
    //     .then((data) => (clientSecret = data.client_secret));

    // fetch("/api/createNormalSession")
    //     .then((r) => r.json())
    //     .then(({ url }) => router.push(url));
    // }, []);

    useEffect(() => {
        owner();
        presaleTotalTokens();
        tokensSold();
        tokenPrice();
        purchasedTokens();
        getBalance();
        timer();
        convertTimestamp();
        // getquery();
        // checkPaymentStatus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [address, timers]);

    return (
        <div className="min-w-[300px]">
            <div className="bg-[#1E1C1E80] p-6 rounded-md flex flex-col gap-y-4">
                <div className="flex w-full flex-col items-center">
                    <Tabs
                        aria-label="Options"
                        color="primary"
                        variant="underlined"
                        classNames={{
                            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                            cursor: "w-full bg-[#22d3ee]",
                            tab: "max-w-fit px-0 h-12",
                            tabContent: "group-data-[selected=true]:text-[#06b6d4]",
                        }}
                    >
                        <Tab
                            key="crypto"
                            title={
                                <div className="flex items-center space-x-2" onClick={() => setKeys("crypto")}>
                                    <span>Buy Crypto</span>
                                </div>
                            }
                        />
                        <Tab
                            key="fiat"
                            title={
                                <div className="flex items-center space-x-2" onClick={() => setKeys("fiat")}>
                                    <span>Buy Fiat</span>
                                </div>
                            }
                        />
                    </Tabs>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-center text-2xl">Presale</p>
                    <p className="font-semibold text-lg text-center">Token Sale Would End</p>
                </div>
                <div className="flex gap-2 justify-center">
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-medium">{timeLeft?.split(" ")[0]}</p>
                        <p>Days</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-medium">{timeLeft?.split(" ")[2]}</p>
                        <p>Hours</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-medium">{timeLeft?.split(" ")[4]}</p>
                        <p>Mins</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-medium">{timeLeft?.split(" ")[6]}</p>
                        <p>Sec</p>
                    </div>
                </div>
                <div>
                    <Progress
                        size="md"
                        radius="sm"
                        classNames={{
                            base: "max-w-md",
                            track: "drop-shadow-md border border-default",
                            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                            label: "tracking-wider font-medium text-white",
                            value: "text-white",
                        }}
                        label="Sold Tokens"
                        value={(Number(tokensRemains) / Number(presaleTotalToken)) * 100}
                        showValueLabel={true}
                    />
                </div>
                <div>
                    <p>Total Tokens: {presaleTotalToken}</p>
                    <p>Available Tokens: {Number(presaleTotalToken) - Number(tokensRemains)}</p>
                    <p>Token Price: {price} Matic</p>
                    <p>You Purchased: {youPurchased}</p>
                    <p>Wallet: {`${address?.slice(0, 6)}...${address?.slice(address?.length - 6, address?.length)}`}</p>
                    <p>Account Balance: {Number(bal).toFixed(2)}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="">Total Price: {quantity ? price * quantity : "0"} Matic</p>
                    {keys === "fiat" ? (
                        <Input
                            placeholder="Wallet Address"
                            className="bg-transparent"
                            type="text"
                            value={wallet}
                            onChange={(e) => setWallet(e.target.value)}
                        />
                    ) : (
                        ""
                    )}
                    <p>Quantity</p>
                    <Input
                        placeholder="Quantity"
                        className="bg-transparent"
                        type="number"
                        value={quantity || 10}
                        onChange={(e) => setQuantity(e.target.value)}
                        min={10}
                    />
                </div>
                {keys === "crypto" ? (
                    <Button className="w-full font-bold bg-[#0B478F] text-white" onClick={buyToken}>
                        Buy Token
                    </Button>
                ) : (
                    <Button className="w-full font-bold bg-[#0B478F] text-white" onClick={buyFiat}>
                        Buy Token via Fiat
                    </Button>
                )}
            </div>
        </div>
    );
}
