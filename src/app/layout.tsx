import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {AppProvider} from "@/components/providers/AppProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Decamond Auth Demo",
    description: "A simple client-side authentication system with Next.js, TypeScript, and Tailwind.",
    keywords: ["Next.js", "Authentication", "Tailwind", "TypeScript", "shadcn/ui"],
    authors: [{ name: "Mohammad Hemmat Nia" }],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <AppProvider>
            {children}
        </AppProvider>
        </body>
        </html>
    );
}
