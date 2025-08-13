import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import Analytics from "@/components/Analytics";
import { siteMeta } from "@/data/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteMeta.name} – ${siteMeta.role}`,
  description: siteMeta.valueProposition,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased accent-gradient min-h-screen text-slate-900`}>
        <ThemeProvider>
          <Navbar resumeUrl={siteMeta.resumeUrl} />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
