import { List } from "./list";
import { Filters } from "./filters";
import { ListQuestItem } from "@/types";
import { TFilterType } from "@/constants/filters";

interface Props {
  type?: TFilterType;
  data: ListQuestItem[] | {
    error: string;
};
}
export default function QuestList({ type, data }: Props) {
  return (
    <>
      <Filters type={type} />
      <List data={data} />
    </>
  );
}
