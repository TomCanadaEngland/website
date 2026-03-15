import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IRCC Tracker | Track Your Canadian Immigration Application",
  description:
    "Monitor IRCC processing times, track your application progress, and see how your timeline compares with others. Trusted by immigrants across Canada.",
  openGraph: {
    title: "IRCC Tracker | Track Your Canadian Immigration Application",
    description:
      "Monitor IRCC processing times, track your application progress, and see how your timeline compares with others.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRCC Tracker | Track Your Canadian Immigration Application",
    description:
      "Monitor IRCC processing times, track your application progress, and see how your timeline compares with others.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
