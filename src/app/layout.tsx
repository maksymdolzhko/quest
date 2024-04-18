import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import { ClipPathTop, ClipPathBottom } from "@/components/clip";

interface Props {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"]
});

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" className="bg-[#1C1C1C]">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <ClipPathTop />
        <main className="relative overflow-hidden flex-1 pt-14">
          {children}
          <Footer/>
        </main>
        <ClipPathBottom />
      </body>
    </html>
  );
}
