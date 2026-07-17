import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import RecaptchaProvider from "@/components/providers/recaptcha-provider";
import { siteConfig } from "@/config/site";

import { Toaster } from "sonner";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  data-scroll-behavior="smooth"
      lang="en"
      className={`${plusJakarta.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <RecaptchaProvider>
          <ThemeProvider>
            <Navbar />

            <main className="flex flex-1 flex-col pt-16">
              {children}
            </main>

            <Footer />

            <Toaster
              position="top-right"
              richColors
              closeButton
              duration={3000}
            />
          </ThemeProvider>
        </RecaptchaProvider>
      </body>
    </html>
  );
}