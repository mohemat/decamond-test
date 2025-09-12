'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import * as React from 'react';
import { queryConfig } from '@/lib/react-query';
import {ThemeProvider} from "@/components/providers/ThemeProvider";

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({children}: AppProviderProps) => {
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: queryConfig,
            }),
    );

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                    {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
};
