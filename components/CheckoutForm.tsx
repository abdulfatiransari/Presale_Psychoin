import { useStripeContext } from "@/context";
import { sendTokenByFiat } from "@/contract/sendTokens";
import { Button } from "@nextui-org/react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const { walletAddress, quantity } = useStripeContext();
  const {push} = useRouter()

  const handleSubmit = async (event: FormEvent) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setLoading(true)
    const result = await stripe.confirmPayment({
      //Elements instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://psychoin.vercel.app",
      },
      redirect: "if_required",
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      toast.error(result?.error?.message);
      setLoading(false)
    } else {
      // Your customer will be redirected to your return_url. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the return_url.
      await sendTokenByFiat(walletAddress, quantity, () => {
        toast.success('Your payment has been sent successfully')
      setLoading(false)
      push('/')
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center py-20">
      <div className="bg-[#fff]/65 shadow-lg flex flex-col justify-center px-10 py-10 rounded-xl">
      <PaymentElement />
      <Button type="submit" isLoading={loading} className="bg-[#6D00CC] rounded-lg text-white mt-10 px-4" disabled={!stripe}>Create Payment</Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
