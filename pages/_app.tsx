//@ts-nocheck
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Web3ModalProvider } from "@/components/Web3Instance";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
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
