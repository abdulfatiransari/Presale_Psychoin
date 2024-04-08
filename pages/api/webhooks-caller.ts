// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fireDB } from "@/firebaseConfig/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const webhookEndpoint = await stripe.webhookEndpoints.create({
      enabled_events: ["charge.succeeded", "charge.failed"],
      url: "https://psychoin.vercel.app/api/webhooks-caller",
    });
    console.log(webhookEndpoint);
    res.status(200).json({ name: "John Doe" });
  } else if (req.method === "POST") {
    const body = req.body;
    const querySnapshot = await getDocs(collection(fireDB, "users"));
    const previousJson = Array.from(querySnapshot.docs).map((snapshot) => ({
      ...snapshot.data(),
      id: snapshot.id,
    }));
    const sessions = previousJson;
    sessions.forEach(async (session: any) => {
      const currentSession = await stripe.checkout.sessions.retrieve(
        session.stripe.id
      );
      if (
        currentSession.status === "complete" ||
        currentSession.status === "failed"
      ) {
        if (currentSession.status === "complete") {
          console.log("Paid");
          deleteDoc(doc(fireDB, "users", session.id));
        } else {
          console.log("Failed");
          deleteDoc(doc(fireDB, "users", session.id));
        }
      }
    });

    res.status(200).json(body);
  }
}
