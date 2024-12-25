import React from "react";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollUp from "../components/ScrollUp/ScrollUp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "AsHim Shrestha",
  description: "Personal portfolio of Ashim Shrestha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
