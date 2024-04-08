//@ts-nocheck
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Web3ModalProvider } from "@/components/Web3Instance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const searchParams = useSearchParams()
  useEffect(() => {
    // fetch('/api/webhooks-caller')
    const toastRead = `${localStorage.getItem('toastRead')}`;
    if(toastRead !== 'null') return;

    if(searchParams.get('success')){

    toast.success("Payment Successfull")
    localStorage.setItem('toastRead', 'true')

    }else if(searchParams.get('canceled')){

    toast.error("Payment Cancelled")
    localStorage.setItem('toastRead', 'true')
    }

  }, [])

  return (
    <Web3ModalProvider>
      <NextUIProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
      </NextUIProvider>
    </Web3ModalProvider>
  );
}
