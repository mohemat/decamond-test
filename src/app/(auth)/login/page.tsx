import {LoginForm} from "@/app/(auth)/login/_components/LoginForm";
import type {Metadata} from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
    title: "Login | Decamond",
    description: "Login to your Decamond account using your phone number.",
    robots: {
        index: false,
        follow: false,
    },
    openGraph: {
        title: "Login | Decamond",
        description: "Login securely to your Decamond account.",
        type: "website",
        url: `${BASE_URL}/login`,
    },
};

export default function LoginPage() {
    return (
        <LoginForm/>
    )
}
