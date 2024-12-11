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
        <meta name="description" content="Manufacturer of wooden pallets and boxes." />
    <meta name="author" content="Royal Wood Packers" />
    <meta name="keywords" content="Wooden pallets,Wooden Boxes,Wooden crates,Plastic Pallets,Pallets,Packing" />
    <meta name="robots" content="index, follow" />
    <link rel="icon" type="image/svg+xml" href="/essarr.svg" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta property="og:title" content="Royal Wood Packers" />
    <meta property="og:description" content="Manufacturer of wooden pallets and boxes." />
    <meta property="og:image" content="/path-to-your-image.jpg" />
    <meta property="og:url" content="https://royalwoodpackers.com" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Royal Wood Packers" />
    <meta name="twitter:description" content="A brief description of your site." />
    <meta name="twitter:image" content="/path-to-your-image.jpg" />
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
