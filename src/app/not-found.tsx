"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isUserLoggedIn } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    const router = useRouter();
    const [userLoggedIn, setUserLoggedIn] = useState<boolean | null>(null);

    useEffect(() => {
        setUserLoggedIn(isUserLoggedIn());
    }, []);

    const handleClick = () => {
        if (userLoggedIn) {
            router.replace("/dashboard");
        } else {
            router.replace("/login");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-lg mt-2">This page could not be found.</p>

            {userLoggedIn !== null && (
                <Button onClick={handleClick} className="mt-6">
                    {userLoggedIn ? "Dashboard" : "Login"}
                </Button>
            )}
        </div>
    );
}
