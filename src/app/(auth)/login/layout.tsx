'use client'

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {isUserLoggedIn} from "@/lib/auth";

export default function AuthLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const router = useRouter();

    useEffect(() => {
        if(isUserLoggedIn()) router.replace("/dashboard");
    }, [router]);

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                {children}
            </div>
        </div>
    );
}
