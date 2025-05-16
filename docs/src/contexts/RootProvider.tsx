import { TemplateLayout } from '@/components/layout/TemplateLayout';
import { shadcnExtendTheme } from '@/lib/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import React from 'react';
import '@/styles/shadcn.css';

type RootProviderProps = {
    children: React.ReactNode;
};

const RootProvider = ({ children }: RootProviderProps) => {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={shadcnExtendTheme} disableTransitionOnChange>
                <CssBaseline />
                <TemplateLayout>{children}</TemplateLayout>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
};

export default RootProvider;
