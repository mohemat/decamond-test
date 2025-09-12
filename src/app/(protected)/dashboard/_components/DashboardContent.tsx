'use client'

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {logout} from "@/lib/auth";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useUser} from "@/components/providers/UserProvider";

export default function DashboardContent() {
    const {user, setUser} = useUser()
    const router = useRouter();

    const handleLogout = () => {
        setUser(null)
        logout()
        router.replace("/login");
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Welcome {user?.name}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>
                    Hello, Here's an example of a Dashboard page for Decamond Company. Sorry, I'm not sure if it's
                    Dekamond or
                    Decamond :)
                </p>
                <div className={'text-center mt-4'}>
                    <Button onClick={handleLogout}>Log out</Button>
                </div>
            </CardContent>
        </Card>
    )
}