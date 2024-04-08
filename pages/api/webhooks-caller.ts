// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
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
    const previousJson = fs.readFileSync(process.cwd()+'/payments.json', 'utf8');
    const sessions = JSON.parse(previousJson);
    let pendingSessions: any[] = [];
    sessions.forEach(async (session: any) => {
const currentSession = await stripe.checkout.sessions.retrieve(
  session.stripe.id
);
if(currentSession.status === "complete" ||currentSession.status === "failed") {
if(currentSession.status === "complete") {
  console.log("Paid")
  
}else{
  console.log("Failed")
}
}else{
  pendingSessions.push(session)
}
    });
    await fs.writeFileSync(process.cwd()+'/payments.json', JSON.stringify(pendingSessions));

    res.status(200).json(body);
  }
}
