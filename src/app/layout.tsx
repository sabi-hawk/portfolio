import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sabahat Atique - Senior Software Engineer",
  description: "Portfolio of Sabahat Atique, a Senior Software Engineer specializing in Full-Stack Development and Cloud Solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sourceSans.className} suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
