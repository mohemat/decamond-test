"use client";

import React, {createContext, useContext, useState, ReactNode, useEffect} from "react";
import {UserStorage} from "@/types/user";
import {useRouter} from "next/navigation";
import {getUser, isUserLoggedIn} from "@/lib/auth";

interface UserContextType {
    user: UserStorage | null;
    setUser: (user: UserStorage | null) => void;
}

const UserStore = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserStorage | null>(() => {
        if (typeof window !== "undefined") {
            return getUser();
        }
        return null;
    });
    const router = useRouter()
    const [userLoggedIn, setUserLoggedIn] = useState<boolean | null>(null);

    useEffect(() => {
        setUserLoggedIn(isUserLoggedIn());
    }, [router]);

    useEffect(() => {
        const user = getUser();
        if(user.name) setUser(user);
    }, [userLoggedIn]);

    return (
        <UserStore.Provider value={{ user, setUser }}>
            {children}
        </UserStore.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserStore);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
