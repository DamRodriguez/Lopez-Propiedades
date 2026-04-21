import ProgressBarProvider from "@/components/layout/ProgressBarProvider";
import clsx from "clsx";
import { Inter } from 'next/font/google';
import "@/styles/globals.css";
import ScrollToTop from "@/components/other/ScrollToTop";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter'
});

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
            {children}
          </div>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
