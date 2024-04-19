import CheckoutForm from "@/components/CheckoutForm";
import { useStripeContext } from "@/context";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

function CheckoutPage() {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_KEY as string
  );
  const { clientSecret } = useStripeContext();

  if (!clientSecret) return;
  return (
    <Elements stripe={stripePromise} options={{ clientSecret: clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}

export default CheckoutPage;
