import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../styles/main.scss";
import NavBar from "./NavBar";
import { Providers } from './Providers';

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "Viva Allergy",
  description: "Fight your allergies with our top-notch extracts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <NavBar />
          <Providers>{children}</Providers>
      </body>
    </html>
  );
}
