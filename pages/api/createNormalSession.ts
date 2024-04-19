import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' } as any);
    }

    try {
        const { amount, quantity, walletAddress } = req.body;

        const session = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
        });

        res.status(200).json({ client_secret: session.client_secret, quantity, walletAddress });
    } catch (error: any) {
        console.error('Error creating onramp session:', error.message);
        res.status(500).json({ message: 'Internal Server Error' } as any);
    }
}
