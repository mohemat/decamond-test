'use client'
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/layout/app-sidebar";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useUser} from "@/components/providers/UserProvider";
import {ModeToggle} from "@/components/layout/ModeToggle";

export default function DashboardLayout({
                                            children,
                                        }: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter()
    const {user} = useUser()

    useEffect(() => {
        if (!user) router.replace("/login");
    }, [user]);

    if (user?.name)
        return (
            <SidebarProvider>
                <AppSidebar/>
                <main className={'w-full p-6'}>
                    <div className={'flex justify-between w-full items-center'}>
                        <SidebarTrigger/>
                        <ModeToggle/>
                    </div>

                    <div className={'mt-2'}>
                        {children}
                    </div>
                </main>
            </SidebarProvider>
        );
}
