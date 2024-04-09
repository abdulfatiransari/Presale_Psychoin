import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method === 'POST') {
        const [paymentID] = req.body;

        try {
            const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
            const paymentIntent = await stripe.paymentIntents.retrieve(
                paymentID
            );

            // Respond to the webhook with a 200 status code
            res.status(200).json({ received: true });
        } catch (error) {
            console.error('Error handling webhook:', error);
            res.status(400).send(`Webhook Error: ${error}`);
        }
    } else {
        // Return a 405 Method Not Allowed if the request method is not POST
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
    }
}
