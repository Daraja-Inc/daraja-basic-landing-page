import type { Metadata } from "next";
import { Hind_Vadodara } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedNeonBackground from "./components/AnimatedNeonBackground";

const hindVadodara = Hind_Vadodara({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DARAJA — L'aventure commence",
  description: "Ambition. Excellence. Impact.",
  openGraph: {
    title: "DARAJA — L'aventure commence",
    description: "Ambition. Excellence. Impact.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "DARAJA — L'aventure commence",
    description: "Ambition. Excellence. Impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body 
        className={`${hindVadodara.className} relative min-h-screen overflow-x-hidden`}
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.3), transparent),
            radial-gradient(circle at 80% 80%, rgba(37, 99, 235, 0.2), transparent),
            linear-gradient(180deg, #0a0a0f 0%, #050510 100%)
          `,
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Background néon animé */}
        <AnimatedNeonBackground />
        
        {/* Motif de bruit subtil */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
        
        {/* Overlay pour assurer la lisibilité */}
        <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
