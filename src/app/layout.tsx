import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const oswaldFont = Oswald({
  variable: "--font-oswald",
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
      <body className={`${oswaldFont.variable} antialiased`}>
        <div className="grid grid-cols-[1fr_4fr] font-main">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
