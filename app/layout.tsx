import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { constructMetadata } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <SessionProvider>
          <Image
            src="/herobg.png"
            alt="hero"
            fill
            quality={100}
            className="absolute object-cover -z-10 w-full max-w-[100vw] h-screen"
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Navbar />
            {children}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
