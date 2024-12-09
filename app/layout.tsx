import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Royal Wood Packers",
  description: "Wooden pallet manufacturer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rwp.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-black text-white `}
      >
        <Navbar />
        <div className="h-24"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
