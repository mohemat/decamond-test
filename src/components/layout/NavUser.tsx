import {ChevronsUpDown, LogOut,} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,} from "@/components/ui/sidebar"
import {useRouter} from "next/navigation";
import {useUser} from "@/components/providers/UserProvider";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {logout} from "@/lib/auth";


export function NavUser() {
    const {user, setUser} = useUser()
    const router = useRouter();
    const {isMobile} = useSidebar()

    const handleLogout = () => {
        setUser(null)
        logout()
        router.replace("/login");
    }

    if (user)
        return (
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton
                                size="lg"
                                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
                            >
                                {user.picture && user.name &&
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage src={user.picture} alt={user.name}/>
                                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                    </Avatar>
                                }

                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">{user.name}</span>
                                    <span className="truncate text-xs">{user.email}</span>
                                </div>
                                <ChevronsUpDown className="ml-auto size-4"/>
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                            side={isMobile ? "bottom" : "right"}
                            align="end"
                            sideOffset={4}
                        >
                            <div>
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        {user.picture && user.name &&
                                            <Avatar className="h-8 w-8 rounded-lg">
                                                <AvatarImage src={user.picture} alt={user.name}/>
                                                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                            </Avatar>
                                        }
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-medium">{user.name}</span>
                                            <span className="truncate text-xs">{user.email}</span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuItem
                                    onSelect={handleLogout}
                                >
                                    <LogOut/>
                                    Log out
                                </DropdownMenuItem>


                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        )
}
