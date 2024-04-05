import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StarsCanvas from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akarsh Bajpai",
  description: "Hi! I am Akarsh, a fullstack developer this is my portfolio where you can learn about me and see my latest work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
