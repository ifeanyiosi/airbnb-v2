import "./globals.css";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Navbar from "./components/Navbar/navbar";
import ClientOnly from "./components/ClientOnly";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const font = Karla({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
