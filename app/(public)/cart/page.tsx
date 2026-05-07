import { Metadata } from "next";
import Cart from "./cart";

export const metadata: Metadata = {
  title: "Cart",
  description: "Cart",
};

export default function CartPage() {
  return <Cart />;
}
