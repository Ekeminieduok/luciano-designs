import { Metadata } from "next";
import Home from "./home";

export const metadata: Metadata = {
    title: "Home",
    description: "Home",
};

export default function HomePage() {
    return <Home />;
}
