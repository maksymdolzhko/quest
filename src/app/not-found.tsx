"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="min-h-screen flex flex-col justify-center mx-auto max-w-5xl px-32 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Page &quot;{pathname}&quot; not found.
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Could not find requested resource
      </p>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button
          onClick={router.back}
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          Go back
        </button>
        <Link href="/" className="text-sm font-semibold leading-6 text-white">
          Return Home <span>→</span>
        </Link>
      </div>
    </div>
  );
}
