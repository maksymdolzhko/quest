import Link from "next/link";
import { ListQuestItem } from "@/types";
import { UsersIcon, CubeTransparentIcon } from "@heroicons/react/16/solid";

interface Props {
  data: ListQuestItem;
}

export default function QuestItem({ data }: Props) {
  const { id, title, level, peopleCount, coverImg } = data;
  return (
    <li className="relative overflow-hidden rounded-2xl">
      <Link href={`/quest/${id}`}>
        <img
          className="aspect-[3/2] w-full object-cover"
          src={`/assets/${coverImg}`}
          alt={title}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-right px-4 py-4">
          <h3 className="mt-6 mb-2 text-[28px] font-semibold leading-8 tracking-tight text-slate-50">
            {title}
          </h3>
          <p className="text-base leading-7 text-gray-400 flex gap-3 justify-end">
            <CubeTransparentIcon className="h-6 w-6" />
            <span>{level}</span>
            <span>|</span>
            <UsersIcon className="h-6 w-6" />
            <span>{peopleCount.join("-")}</span>
            <span>person</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
