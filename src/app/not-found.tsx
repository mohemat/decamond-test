"use client";

import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {useUser} from "@/components/providers/UserProvider";

export default function NotFound() {
    const router = useRouter();
    const {user} = useUser()

    const handleClick = () => {
        if (user) {
            router.replace("/dashboard");
        } else {
            router.replace("/login");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-lg mt-2">This page could not be found.</p>

            <Button onClick={handleClick} className="mt-6">
                {user ? "Dashboard" : "Login"}
            </Button>
        </div>
    );
}
