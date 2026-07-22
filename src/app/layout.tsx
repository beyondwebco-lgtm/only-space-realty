import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Only Space Realty | Premium Real Estate Consultant Ahmedabad",
  description: "Buy, Sell and Invest in premium residential and commercial properties with Only Space Realty.",
  keywords: ["Only Space Realty", "Real Estate Consultant Ahmedabad", "Luxury Apartments Ahmedabad", "Shilaj Real Estate", "Commercial Property Ahmedabad", "Property Investment Ahmedabad"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased selection:bg-gold/20 selection:text-white" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} bg-luxury-bg text-neutral-100 font-sans min-h-full flex flex-col relative`}>
        <AmbientBackground />
        <div className="relative z-10 flex flex-col min-h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
