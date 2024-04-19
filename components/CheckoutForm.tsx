import { useStripeContext } from "@/context";
import { sendTokenByFiat } from "@/contract/sendTokens";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
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
    } else {
      // Your customer will be redirected to your return_url. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the return_url.
      await sendTokenByFiat(walletAddress, quantity);
      toast.success('Your payment has been sent successfully')
      push('/')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Create Payment</button>
    </form>
  );
};

export default CheckoutForm;
