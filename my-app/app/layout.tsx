import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import AppProvider from "@/components/AppProvider";
import TopNavigation from "@/components/nav/TopNavigation";
import Footer from "@/components/nav/Footer";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Online Store Tech Test",
  description: "This repository contains a design of a fake online store for the purposes of a technical test.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <AppProvider>
          <TopNavigation />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
};
