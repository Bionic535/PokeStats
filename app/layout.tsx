import type { Metadata } from "next";
import { Geist, Geist_Mono, Public_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Input } from "@/components/ui/input";
const publicSans = Public_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PokeStats",
  description: "A Pokemon TCG statistics tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gray-800 text-white p-4 flex">
          <h1 className="text-2xl font-bold">
            <Link href="/">PokeStats</Link>
          </h1>
          <div className="ml-auto">
            <Input type="text" placeholder="Search For a Card" className="w-64" />
          </div>
        </header>
        <nav className="bg-black text-white p-4 flex justify-between items-center">
          <ul className="flex gap-6 text-lg font-semibold">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/user_lists">Your Lists</Link>
              </li>
              <li>
                <Link href="/sets">Sets</Link>
              </li>
              <li>
                <Link href="/card_types">Card Types</Link>
              </li>
              <li>
                <Link href="/cards">Cards</Link>
              </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
