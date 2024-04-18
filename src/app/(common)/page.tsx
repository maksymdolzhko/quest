import QuestList from "@/components/quests";
import { getQuests } from "@/api/actions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games in Lviv",
  description: "What game shall we play?",
};

export default async function Home() {
  const data = await getQuests();
  return (
    <div className="text-left flex flex-col gap-4">
      <p className="mt-6 text-lg leading-8 text-orange-400">Games in Lviv</p>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        What game shall we play?
      </h1>
      <QuestList
        data={data}
      />
    </div>
  );
}
