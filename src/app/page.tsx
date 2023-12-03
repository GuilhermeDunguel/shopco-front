import { Metadata } from "next";
import { HomePage } from "./pages";

export const metadata: Metadata = {
  title: "SHOP.CO | Find Clothes That Match Your Style",
  icons: {
    icon: "/favicon.png",
  },
};

export default function Home() {
  return <HomePage />;
}
