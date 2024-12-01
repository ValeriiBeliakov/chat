import type { Metadata, Viewport } from "next";
import "./globals.scss";
import {Inter} from "next/font/google";
import LayoutClient from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chats App",
  description: "chats app with nextjs",
};
export const viewport:Viewport = {
  themeColor:"#000",
  colorScheme:"dark",
  
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className}
      >
        <LayoutClient>{children}</LayoutClient>
      
      </body>
    </html>
  );
}
