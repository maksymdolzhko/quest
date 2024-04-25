import Image from "next/image";
import MainImg from "/public/assets/img/main.png";
import { Header } from "@/components/header";
import { ClipPathTop } from "@/components/clip";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <ClipPathTop />
      <Image
        fill
        priority
        src={MainImg}
        quality={15}
        alt="Main pic"
        className="inset-0 -top-10 -z-10 h-full w-full object-cover blur-[10px] brightness-50"
      />
      <div className="mx-auto max-w-6xl">
        <div className="relative isolate min-h-screen overflow-hidden">
          {children}
        </div>
      </div>
    </>
  );
}
