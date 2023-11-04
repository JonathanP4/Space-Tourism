"use client";

import MainNavigation from "./components/MainNavigation";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
            <title>Space Tourism | Home</title>
            <body>
                <MainNavigation />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
