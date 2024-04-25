import Link from "next/link";

const hover = "hover:ring-white/20";
const rounded = "first:rounded-l-full last:rounded-r-full";

interface IFilters {
  href: string;
  title: string;
  isActive: boolean;
}

export default function FilterItem({ href, title, isActive }: IFilters) {
  const activeItem = isActive ? "bg-[#FEC432]" : "";
  const activeText = isActive ? "text-gray-800" : "text-white";
  return (
    <li
      className={`ring-1 ring-white/10 overflow-hidden py-2 ${rounded} ${hover} ${activeItem}`}
    >
      <Link
        href={href}
        className={`text-sm leading-6 ${activeText} px-6 py-6`}
      >
        {title}
      </Link>
    </li>
  );
}
