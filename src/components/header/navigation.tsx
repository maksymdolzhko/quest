import Link from "next/link";
import { navigation } from "@/constants/navigation";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <>
      {navigation.map((item) => {
        const isActive = pathname !== item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`text-sm font-semibold leading-6 ${
              isActive ? "text-white" : "text-orange-400"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
}
