import Link from "next/link";
import { navigation } from "@/constants/navigation";

export default function NavigationMobile() {
  return (
    <div className="space-y-2 py-6">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
