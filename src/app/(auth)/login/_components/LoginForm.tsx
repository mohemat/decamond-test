'use client'

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {z} from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {MoonLoader} from "react-spinners";
import {useRouter} from "next/navigation";
import {login} from "@/lib/auth";
import {useRandomUsers} from "@/app/(auth)/login/_apis/useGetRandomUsers";
import {useUser} from "@/components/providers/UserProvider";

export const loginSchema = z.object({
    phone: z
        .string()
        .min(1, "Phone number is required")
        .regex(
            /^(09\d{9}|(\+989\d{9})|(00989\d{9}))$/,
            "Invalid phone number"
        ),
})

export type LoginSchema = z.infer<typeof loginSchema>

export function LoginForm({
                              className,
                              ...props
                          }: React.ComponentProps<"div">) {

    const router = useRouter()
    const { setUser} = useUser()

    const randomUsersQuery = useRandomUsers({
        queryConfig: {
            enabled: false,
        }
    })

    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            phone: "",
        },
    })

    function onSubmit() {
        randomUsersQuery.refetch().then(({data}) => {
            if (data) {
                console.log(data)
                const userData = data.results[0];
                if (userData) {
                    setUser({name: `${userData.name.title} ${userData.name.first} ${userData.name.last}`, email: userData.email, picture: userData.picture.thumbnail})
                    login(userData);
                    router.replace("/dashboard");
                }
            }
        });
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your phone below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-6">
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input type={'tel'} inputMode={'numeric'} maxLength={15}
                                                       placeholder="09xxxxxxxxx" {...field}
                                                       onKeyDown={(e) => {
                                                           const allowedKeys = [
                                                               "Backspace",
                                                               "Delete",
                                                               "ArrowLeft",
                                                               "ArrowRight",
                                                               "Tab",
                                                               "Enter",
                                                               "+",
                                                           ];
                                                           if (
                                                               allowedKeys.includes(e.key) ||
                                                               (e.key >= "0" && e.key <= "9")
                                                           ) {
                                                               return;
                                                           } else {
                                                               e.preventDefault();
                                                           }
                                                       }}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                Phone number must starts with 09, +989 or 00989
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    aria-busy={randomUsersQuery.isLoading || randomUsersQuery.isRefetching}
                                    disabled={randomUsersQuery.isLoading || randomUsersQuery.isRefetching}
                                        type="submit" className="w-full">
                                    {(randomUsersQuery.isLoading || randomUsersQuery.isRefetching) ?
                                        <MoonLoader color={'#ffffff'} size={20}/>
                                        :
                                        "Login"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
