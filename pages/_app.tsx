//@ts-nocheck
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Web3ModalProvider } from "@/components/Web3Instance";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Web3ModalProvider>
            <NextUIProvider>
                <Component {...pageProps} />
                <ToastContainer />
            </NextUIProvider>
        </Web3ModalProvider>
    );
}
