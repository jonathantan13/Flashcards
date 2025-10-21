import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const font = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flashcards",
  description: "Flashcards for studying",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} font-main antialiased`}>
        <div className="grid grid-cols-[1fr_4fr]">
          <Sidebar />
          <div className="m-16">{children}</div>
        </div>
      </body>
    </html>
  );
}
