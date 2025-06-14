import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/header/Header";
import Footer from "@/Components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Postfolio",
  description: "Created by Aryan Garg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-[#080e21]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
