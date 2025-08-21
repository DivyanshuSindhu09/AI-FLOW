import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Absans from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import Navbar from "@/components/navigation/navbar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
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
      </body>
    </html>
  );
}
