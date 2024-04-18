import QuestList from "@/components/quests";
import type { Metadata } from "next";
import { getQuests } from "@/api/actions";

interface Props {
  params: { type: string };
}

export const metadata: Metadata = {
  title: "Games in Lviv",
  description: "What game shall we play?",
};

export default async function Type({ params: { type } }: Props) {
  const data = await getQuests({type: type as "adventures" | "mystic" | "horror" | "detective" | "sci-fi"});
  return (
    <div className="text-left flex flex-col gap-4">
      <p className="mt-6 text-lg leading-8 text-orange-400">Games in Lviv</p>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        What game shall we play?
      </h1>
      <QuestList
        type={type}
        data={data}
      />
    </div>
  );
}
