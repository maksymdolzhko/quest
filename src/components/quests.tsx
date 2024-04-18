import List from "./list";
import Filters from "./filters";
import { ListQuestItem } from "@/types";

interface Props {
    type?: string;
    data: ListQuestItem[];
}
export default function QuestList({type, data}: Props) {
    return (
        <>
            <Filters
                type={type}
            />
            <List
                filteredData={data}
            />
        </>
    )
}