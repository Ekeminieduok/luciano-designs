import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/faqs">Faqs</Link>
      <Link href="/product">Products</Link>
    </div>
  );
}
