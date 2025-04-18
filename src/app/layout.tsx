import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
// import Link from "next/link";
import Nav from "./nav/page";
// import Footer from "./footer/page";
import { ThemeProvider } from "next-themes";
//import Wrapper from "./wrapper/page";

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
    //creator: "@carltonstith",
    //images: []
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
          {/* </Wrapper> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
