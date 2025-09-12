import type { Metadata } from "next";
import DashboardContent from "@/app/(protected)/dashboard/_components/DashboardContent";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
    title: "Dashboard | Decamond",
    description: "Welcome to your Decamond dashboard. Manage your account and view details here.",
    robots: {
        index: false,
        follow: false,
    },
    openGraph: {
        title: "Dashboard | Decamond",
        description: "Access your Decamond dashboard to manage your profile and settings.",
        type: "website",
        url: `${BASE_URL}/dashboard`,
    },
};

export default function DashboardPage() {
    return (
        <DashboardContent/>
    )
}
