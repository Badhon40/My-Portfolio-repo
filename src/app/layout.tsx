import type { Metadata } from "next";
import { Outfit , Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";



const outfit =  Outfit({
 weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const ovo = Ovo({
 weight : ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Badhon Rani",
  description: "A portfolio website showcasing my work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        <div className="flex flex-col min-h-screen bg-[#000319]">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
          
      </body>
    </html>
  );
}
