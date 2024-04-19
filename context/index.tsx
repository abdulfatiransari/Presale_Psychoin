import { ReactNode, createContext, useContext, useState } from "react";

const StripeContext = createContext({
  clientSecret: "",
  walletAddress: "",
  quantity: "",
  setClientSecret: (_val: string) => {},
  setWalletAddress: (_val: string) => {},
  setQuantity: (_val: string) => {},
});

export const useStripeContext = () => useContext(StripeContext);

export const StripeProvider = ({ children }: { children: ReactNode }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [quantity, setQuantity] = useState("");
  return (
    <StripeContext.Provider
      value={{
        clientSecret,
        walletAddress,
        quantity,
        setClientSecret,
        setWalletAddress,
        setQuantity,
      }}
    >
      {children}
    </StripeContext.Provider>
  );
};
