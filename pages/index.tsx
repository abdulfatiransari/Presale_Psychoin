import { Inter } from "next/font/google";
import Presale from "@/components/Presale";
import Header from "@/components/Navbar";
import Details from "@/components/Details";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="bg-[url('/img/Psychoin5.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen">
            <Header />
            <div className="container mx-auto py-2 h-[85%]">
                <div className="flex justify-between h-full items-center max-md:flex-col overflow-scroll gap-4 scrollStyle">
                    <Details />
                    <Presale />
                </div>
            </div>
        </div>
    );
}
