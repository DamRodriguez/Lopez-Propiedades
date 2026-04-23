import type { Metadata } from "next";
import ProgressBarProvider from "@/components/layout/ProgressBarProvider";
import clsx from "clsx";
import { Inter } from 'next/font/google';
import "@/styles/globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/other/ScrollToTop";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter'
});

const siteUrl = "https://lopez-propiedades-tau.vercel.app/";

export const metadata: Metadata = {
  title: {
    default: "Lopez Propiedades | Inmobiliaria",
    template: "%s | Lopez Propiedades",
  },
  description: "Encontrá tu próximo hogar con Lopez Propiedades. Expertos en ventas, alquileres y tasaciones en Buenos Aires. Asesoramiento jurídico y marketing digital.",
  keywords: ["inmobiliaria", "alquileres", "ventas", "tasaciones", "Buenos Aires", "Zona Oeste", "departamentos", "casas"],
  authors: [{ name: "Damian Rodriguez", url: "https://damrod.dev" }],
  creator: "Damian Rodriguez",
  publisher: "Lopez Propiedades",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Lopez Propiedades | Tu propiedad, en manos seguras",
    description: "Venta y alquiler de propiedades. Tasaciones profesionales, asesoramiento jurídico y marketing digital",
    url: siteUrl,
    siteName: "Lopez Propiedades",
    locale: "es_AR",
    type: "website",
    images: [{ url: '/images/logo/logo.png', width: 1200, height: 630, alt: "Lopez Propiedades Logo", }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lopez Propiedades",
    description: "Venta y alquiler de propiedades en Buenos Aires.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={clsx("antialiased min-h-svh flex flex-col bg-soft-white/60", inter.variable)}>
        <ToastContainer />
        <ProgressBarProvider>
          <ScrollToTop />
          <div className="min-w-[20rem] max-w-[120rem] mx-auto w-full font-inter overflow-clip">
            <Header />
            {children}
            <Footer />
          </div>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
