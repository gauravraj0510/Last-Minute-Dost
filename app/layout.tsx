import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LastMinuteDost",
  description: "Real-time and AI-powered Teaching Buddy available 24/7!",
  icons: {
    icon: [
      { url: '/images/logo_transparent.png', type: 'image/png' },
      { url: '/images/logo_transparent.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo_transparent.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/logo_transparent.png',
    apple: '/images/logo_transparent.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        <ClerkProvider appearance={{ variables: { colorPrimary: '#fe5933' }} }>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
