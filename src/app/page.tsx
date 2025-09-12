'use client'
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {isUserLoggedIn} from "@/lib/auth";

export default function HomePage() {

    const router = useRouter()
    useEffect(() => {
        if (isUserLoggedIn()) router.replace("/dashboard");
    }, [router]);

    return (
        <div/>
    )
}
