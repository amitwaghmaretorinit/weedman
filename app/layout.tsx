import type { Metadata } from "next";
import { VisualEditing } from "next-sanity";
// import { SanityLive } from "@/sanity/lib/live";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/ui/DisableDraftMode";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* <SanityLive /> */}
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  );
}
