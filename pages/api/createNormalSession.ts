import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import fs from 'fs'
import { addDoc, collection, doc } from "firebase/firestore";
import { fireDB } from "@/firebaseConfig/firebase";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

// const YOUR_DOMAIN = 'http://localhost:3000/';
const YOUR_DOMAIN = 'https://psychoin.vercel.app/';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' } as any);
    }

    try {
        const { amount, quantity, tokenAddress, walletAddress } = req.body;

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        unit_amount: amount, // Use the amount received from the request
                        product_data: {
                            name: 'Psychoin Token',
                            description: `Token Address: ${tokenAddress}, receiver Address: ${walletAddress}`,
                            // images: ['/img/PSYCHOIN.png'],
                        },
                    },
                    quantity: quantity,
                },
            ],
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}?success=true&reciverAddress=${walletAddress}&quantity=${quantity}`,
            cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        });

        const newSession = {
            stripe: session,
            values: { amount, quantity, tokenAddress, walletAddress }
        }

        
        try {
            const docRef = await addDoc(collection(fireDB, "users"), newSession);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        res.status(200).json({ url: session.url });
    } catch (error: any) {
        console.error('Error creating onramp session:', error.message);
        res.status(500).json({ message: 'Internal Server Error' } as any);
    }
}
