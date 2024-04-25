import "./globals.css";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import { ClipPathTop, ClipPathBottom } from "@/components/clip";
import { CookiesProvider } from "next-client-cookies/server";
interface Props {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" className="bg-dark-grey">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <main className="relative overflow-hidden flex-1 pt-24 pb-24">
          <CookiesProvider>{children}</CookiesProvider>
          <ClipPathBottom />
          <Footer />
        </main>
      </body>
    </html>
  );
}
