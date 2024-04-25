import Link from "next/link";

export default function PageNav() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Link
        href="/"
        className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
      >
        Get started
      </Link>
      <Link href="/" className="text-sm font-semibold leading-6 text-white">
        Learn more <span>→</span>
      </Link>
    </div>
  );
}
