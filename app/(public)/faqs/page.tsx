import { Metadata } from "next";
import Faq from "./faq";

export const metadata: Metadata = {
    title: "Faq",
    description: "Faq",
};

export default function FaqPage() {
    return <Faq />;
}
