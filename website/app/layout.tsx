import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serwis Rowerowy Częstochowa | Profesjonalne Naprawy Rowerów",
  description: "Profesjonalny serwis rowerowy w Częstochowie. Naprawy, przeglądy, regulacje. Szybkie terminy, uczciwe ceny, indywidualne podejście.",
  keywords: "serwis rowerowy Częstochowa, naprawa rowerów, regulacja hamulców, wymiana dętek, Parkitka",
  openGraph: {
    title: "Serwis Rowerowy Częstochowa",
    description: "Profesjonalny serwis rowerowy - szybkie naprawy, uczciwe ceny",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
