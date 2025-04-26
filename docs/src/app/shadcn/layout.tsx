import { TemplateLayout } from '@/components/layout/template/TemplateLayout';
import { shadcnExtendTheme } from '@/lib/theme';
import '@/styles/shadcn.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <ThemeProvider theme={shadcnExtendTheme} disableTransitionOnChange>
            <CssBaseline />
            <TemplateLayout>{children}</TemplateLayout>
        </ThemeProvider>
    );
};

export default Layout;
