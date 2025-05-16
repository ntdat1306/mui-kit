import RootProvider from '@/contexts/RootProvider';
import '@/styles/globals.css';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
// Import vars for theme type in sx
import type {} from '@mui/material/themeCssVarsAugmentation';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'MUI + Shadcn',
    description: 'Style MUI components like Shadcn with createTheme',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <InitColorSchemeScript attribute='class' />
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    );
}
