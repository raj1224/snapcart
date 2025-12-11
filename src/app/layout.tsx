import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "SnapCart | 10 minutes grocery Delivery app",
  description: "10 minutes grocery Delivery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
