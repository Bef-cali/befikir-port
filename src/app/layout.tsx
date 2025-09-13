import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Befikir Yitagessu - Flutter Dev",
  description: "Software engineer specializing in building exceptional digital experiences at the intersection of design and development.",
  keywords: ["UI/UX", "Flutter developer", "frontend developer", "Firebase", "Dart", "Supabase"],
  authors: [{ name: "Befikir Yitagessu" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lexend.variable} font-sans antialiased bg-slate-900 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
