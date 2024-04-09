// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fireDB } from "@/firebaseConfig/firebase";
import { ethers } from "ethers";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
import PresaleABI from "@/contract/PresaleABI.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // if (req.method === "GET") {
  //   const webhookEndpoint = await stripe.webhookEndpoints.create({
  //     enabled_events: ["charge.succeeded", "charge.failed"],
  //     // url: "https://psychoin.vercel.app/api/webhooks-caller",
  //     url: "https://530c-175-107-217-4.ngrok-free.app/api/webhooks-caller"
  //   });
  //   console.log(webhookEndpoint);
  //   res.status(200).json({ name: "John Doe" });
  // } else {
    const body = req.body;
    const querySnapshot = await getDocs(collection(fireDB, "users"));
    const previousJson = Array.from(querySnapshot.docs).map((snapshot) => ({
      ...snapshot.data(),
      id: snapshot.id,
    }));
    console.log(previousJson.length)
    const sessions = previousJson;
    sessions.forEach(async (session: any) => {
      const currentSession = await stripe.checkout.sessions.retrieve(
        session.stripe.id
      );
      console.log(currentSession)
      if (
        currentSession.payment_status === "paid" ||
        currentSession.payment_status === "unpaid"
      ) {
        if (currentSession.payment_status === "paid") {
          console.log("Paid");
          sendTokenByFiat(session.values.walletAddress, session.values.quantity)
          deleteDoc(doc(fireDB, "users", session.id));
        } else {
          console.log("Failed");
          deleteDoc(doc(fireDB, "users", session.id));
        }
      }
    });

    res.status(200).json(body);
  // }
}



const presaleAddress = "0x3974f11ff40dEF3Ae5b17aE3Db3C9Fb6cD8A385A";

  const sendTokenByFiat = async (address: string, quantity: string) => {
    try {
      if (!process.env.NEXT_PUBLIC_PRIVATE_KEY) {
        throw new Error("Private key is not defined");
      }
      const provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-mainnet.public.blastapi.io"
      );
      const signer = new ethers.Wallet(
        process.env.NEXT_PUBLIC_PRIVATE_KEY,
        provider
      );
      const gasPrice = signer.getGasPrice();
      const contract = new ethers.Contract(presaleAddress, PresaleABI, signer);
      const buyTokens = await contract.purchaseTokensByFiat(
        address, ethers.utils.parseUnits(quantity, '18').toString(),
        {
          gasPrice: gasPrice,
          gasLimit: "210000",
        }
      );
      await buyTokens.wait();
    } catch (error) {
      console.log(error);
    }
  };