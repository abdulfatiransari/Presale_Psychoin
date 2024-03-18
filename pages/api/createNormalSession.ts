import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

const YOUR_DOMAIN = 'http://localhost:3000';

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
            success_url: `${YOUR_DOMAIN}?success=true?test=`,
            cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        });

        res.status(200).json({ url: session.url });
    } catch (error: any) {
        console.error('Error creating onramp session:', error.message);
        res.status(500).json({ message: 'Internal Server Error' } as any);
    }
}
