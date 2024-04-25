import FilterItem from "./filterItem";
import { filtersList } from "@/constants/filters";
import type { TFilterType } from "@/constants/filters";

interface Props {
  type: TFilterType | undefined;
}

export default function Filters({ type }: Props) {
  return (
    <ul className="isolate inline-flex shadow-sm">
      {filtersList.map((item) => {
        const isAll = item.id === "all";
        const isActive = !type ? isAll : type === item.id;
        const href = `/${!isAll ? item.id : ""}`;
        return (
          <FilterItem
            key={item.id}
            href={href}
            title={item.title}
            isActive={isActive}
          />
        );
      })}
    </ul>
  );
}
