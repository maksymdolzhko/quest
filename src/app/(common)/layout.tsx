import Image from "next/image";
import MainImg from "/public/assets/img/main.png";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Image
        fill
        priority
        src={MainImg}
        quality={15}
        alt="Main pic"
        sizes="100vw"
        className="inset-0 -top-10 -z-10 h-full w-full object-cover blur-[10px] brightness-50"
      />
      <div className="mx-auto max-w-5xl">
        {children}
      </div>
    </>
  );
}
