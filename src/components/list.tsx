import Link from "next/link";
import { ListQuestItem } from "@/types";
import { UsersIcon, CubeTransparentIcon } from "@heroicons/react/16/solid";

interface Props {
  filteredData: ListQuestItem[];
}

export default function QuestList({ filteredData }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <ul
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        {filteredData.map((item) => (
          <li key={item.id} className="relative overflow-hidden rounded-2xl">
            <Link href={`/quest/${item.id}`} >
            
            <img
              className="aspect-[3/2] w-full object-cover"
              src={`/assets/${item.coverImg}`}
              alt={item.title}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-right px-4 py-4">
              <h3 className="mt-6 mb-2 text-[28px] font-semibold leading-8 tracking-tight text-slate-50">
                {item.title}
              </h3>
              <p className="text-base leading-7 text-gray-400 flex gap-3 justify-end">
                <CubeTransparentIcon className="h-6 w-6" />
                <span>{item.level}</span>
                <span>|</span>
                <UsersIcon className="h-6 w-6" />
                <span>{item.peopleCount.join('-')}</span>
                <span>person</span>
              </p>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
