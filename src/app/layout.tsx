import "./globals.css";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import { ClipPathBottom } from "@/components/clip";
import { CookiesProvider } from "next-client-cookies/server";
import { i18nConfig } from "../../i18nConfig";
import { dir } from "i18next";

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

const inter = Inter({
  subsets: ["latin"],
});

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  return (
    <html lang={locale} className="bg-dark-grey">
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
