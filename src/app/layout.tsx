import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";

import Providers from "@/hooks/providers";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS",
  description: "Ecommerce MKS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <StyledComponentsRegistry>
            <HeaderComponent />
            {children}
            <FooterComponent />
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
