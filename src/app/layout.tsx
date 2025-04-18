import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import Nav from "./nav/page";
import { ThemeProvider } from "next-themes";

const geistSan = Geist({
  subsets: ["latin"],
  variable: "--font-geist-font",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Carlton Stith",
    template: "%s | Carlton Stith",
  },
  description: "Welcome to my personal portfolio website.",
  twitter: {
    card: "summary_large_image",
    title: "Carlton Stith",
    description: "Welcome to my personal portfolio website.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="CarltonStith" />
      </head>
      <body
        className={`${geistSan.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-800 text-black dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <Wrapper> */}
          <header>
            <div className="header-container">
              <Nav />
            </div>
          </header>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
