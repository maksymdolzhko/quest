import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
      <Link href="/ua" className="-m-1.5 p-1.5">
        <Image
          className="h-[42px] w-auto"
          src="/assets/svg/logo.svg"
          alt="Next.js Logo"
          width={42}
          height={42}
          priority
        />
      </Link>
  );
}
