// pages/api/stripe.js

import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
const stripe = new Stripe('sk_test_51NjhAGE8z6GTOxFEZBf7zyeKqsYU0Hh3SJbPnBQC5DJnHkIDkhitLFD5Ff1EhFxIRXZdBqQHIejauu3lNrChbFSl00LMvI8Pcu');
const OnrampSessionResource = Stripe.StripeResource.extend({
    create: Stripe.StripeResource.method({
        method: 'POST',
        path: 'crypto/onramp_sessions',
    }),
});

type Data = {
    client_secret: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' } as any);
    }
    try {
        const { transaction_details } = req.body;

        // Create an OnrampSession with the order amount and currency
        const onrampSession: any = await new OnrampSessionResource(stripe).create({
            transaction_details: {
                destination_currency: transaction_details["destination_currency"],
                destination_exchange_amount: transaction_details["destination_exchange_amount"],
                destination_network: transaction_details["destination_network"],
            },
            customer_ip_address: req.socket.remoteAddress,
        });
        res.status(200).json({ client_secret: onrampSession.client_secret });
    } catch (error: any) {
        console.error('Error creating onramp session:', error.message);
        res.status(500).json({ message: 'Internal Server Error' } as any);
    }
}
