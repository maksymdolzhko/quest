import { Bars3Icon } from "@heroicons/react/24/outline";

interface Props {
  handlerToggle: (param: boolean) => void;
}

export default function MobileBtn({handlerToggle }: Props) {
  return (
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
      onClick={() => handlerToggle(true)}
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon className="h-6 w-6" />
    </button>
  );
}
