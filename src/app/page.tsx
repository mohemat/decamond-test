'use client'

import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {useUser} from "@/components/providers/UserProvider";

export default function HomePage() {

    const router = useRouter()
    const {user} = useUser()

    useEffect(() => {
        if(!user) router.replace("/login");
        else if (user) router.replace("/dashboard");
    }, [user]);

    return (
        <div/>
    )
}
