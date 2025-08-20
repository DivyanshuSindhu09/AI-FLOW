import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Absans from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
  variable : "--font-absans"
});

export const metadata: Metadata = {
  title: "Ai Flow",
  description: "Made by Divyanshu Sindhu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${absans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
