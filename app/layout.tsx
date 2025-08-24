import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Absans from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import Navbar from "@/components/navigation/navbar";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

//! suppressHydrationWarning

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const absans = Absans({
  src: [
    {
      path: "./fonts/absans-regular.otf",
      style: "normal",
    },
  ],
  variable: "--font-absans",
});

export const metadata: Metadata = {
  title: "Ai Flow",
  description:
    "DevOverflow is an AI-powered Q&A platform built with Next.js that reimagines Stack Overflow. It helps developers ask and answer questions smarter with AI-generated tags, summaries, and insights, while offering a scalable full-stack architecture with modern authentication and database integration.",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <SessionProvider session={session}>
        <body
          className={`${geistSans.variable} ${absans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
