import type { Metadata } from "next";
import "./globals.css";
import { Quattrocento_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";
const quattrocento = Quattrocento_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quattrocento",
});
export const metadata: Metadata = {
  title: "South Asian Fest",
  description:
    "Our annual event is the largest South Asian gathering in North America. Held during the Summer in the heart of downtown Ottawa, this Annual Festival is open to the public and attracts crowds from diverse cultural backgrounds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quattrocento.variable}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <NextTopLoader color="#4b218f" height={3} showSpinner={false} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
