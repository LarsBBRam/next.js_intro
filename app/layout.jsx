import { Figtree, Macondo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/UI/Header";

const figTree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const macondo = Macondo({
  weight: ["400"],
  // variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata = {
  title: "next.js_intro",
  description: "Nettside for å vise studenter hvordan kode i Next.js.",
  authors: [{name: "Lars Bendik Bjella Ramstad"}],
  openGraph: {
  title:"next.js_intro",
  description: "Nettside for å vise studenter hvordan kode i Next.js.",
  },
  url: "https://localhost:3000",
  type: "website",
  images: [
    {
    url: "/crystals.jpg",
    width: 1200,
    height: 630,
    alt: "crystals for some reason",
    type: "image/jpg",
  },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${macondo.className} antialiased bg-black`}>
        <Header />

        <main className="grid gap-24 mb-24">{children}</main>
      </body>
    </html>
  );
}
