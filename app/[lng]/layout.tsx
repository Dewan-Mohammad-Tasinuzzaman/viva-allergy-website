import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../../styles/main.scss";
import NavBar from "./NavBar";
import { Providers } from './Providers';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import SmoothScroll from "@/components/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import LoadingAnimation from "@/components/BackgroundAnimation";
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import BackgroundAnimation from "@/components/BackgroundAnimation";



// LANGUAGE-CHANGE RELATED
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}



// FONTS
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: '--font-lato',
});



// META-TAGS
export const metadata: Metadata = {
  title: "Viva Allergy",
  description: "Innovative change for a healthier tomorrow.",
};




type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lng: string;
  };
};

// RootLayout component
export default function RootLayout({ children, params }: RootLayoutProps) {
  const { lng } = params;

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={lato.className}>
        <BackgroundAnimation />
        <NavBar params={params} />
        <Providers>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}