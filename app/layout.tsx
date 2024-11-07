import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const yekanBakh = localFont({
    src: [
        {
            path: '../fonts/yekanBakhRegular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/yekanBakhMedium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/yekanBakhBold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/yekanBakhHeavy.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
});

export const metadata: Metadata = {
    title: 'منو | کافه ایس',
    description: 'منوی کافه ایس',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl" suppressHydrationWarning>
            <body className={yekanBakh.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
