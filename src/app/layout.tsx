"use client";

import "./globals.css";

import MainNavigation from "./components/MainNavigation";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <link
                rel="shortcut icon"
                href="/assets/favicon-32x32.png"
                type="image/x-icon"
            />
            <body>
                <MainNavigation />
                {children}
            </body>
        </html>
    );
}
