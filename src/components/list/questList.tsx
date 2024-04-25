import { ListQuestItem } from "@/types";
import QuestItem from "./questItem";

interface Props {
  data:
    | ListQuestItem[]
    | {
        error: Error | string;
      };
}

export default function QuestList({ data }: Props) {
  const isData = Array.isArray(data);

  return (
    <div className="mx-auto max-w-7xl">
      {isData ? (
        <ul className="mx-auto max-w-2xl mt-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((item: ListQuestItem) => (
            <QuestItem key={item.id} data={item} />
          ))}
        </ul>
      ) : (
        <div className="">
          {JSON.stringify(data.error)}
        </div>
      )}
    </div>
  );
}
