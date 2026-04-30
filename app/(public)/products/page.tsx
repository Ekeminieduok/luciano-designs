import { Metadata } from "next";
import Product from "./product";

export const metadata: Metadata = {
  title: "Product",
  description: "Production",
};

export default function Products() {
  return <Product />;
}
