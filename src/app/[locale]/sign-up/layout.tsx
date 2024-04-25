import { ClipPathTop } from "@/components/clip";

import { PageTitle } from "@/constants/content";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-sm">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {PageTitle.SignUp_H1}
        </h1>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          {PageTitle.SignUp_H2}
        </h2>
      </div>
      {children}
      <p className="mt-10 text-center text-sm text-gray-400">
        <span className="mr-1">Or continue with</span>
        <Link
          href="/ua/sign-in"
          className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
