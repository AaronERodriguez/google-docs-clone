import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {NuqsAdapter} from 'nuqs/adapters/next/app'

import "./globals.css";

const inter =  Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Expak Docs",
  description: "Handle all your documents with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <NuqsAdapter>
          {children}
        </NuqsAdapter>
      </body>
    </html>
  );
}
