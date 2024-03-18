import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <Script src="https://js.stripe.com/v3/"></Script>
                <Script src="https://crypto-js.stripe.com/crypto-onramp-outer.js"></Script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
