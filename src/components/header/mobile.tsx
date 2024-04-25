import Logo from "./logo";
import Link from "next/link";
import NavigationMobile from "./navigationMobile";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  isOpen: boolean;
  handlerToggle: (param: boolean) => void;
}

export default function Mobile({ isOpen, handlerToggle }: Props) {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={isOpen}
      onClose={handlerToggle}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-400"
            onClick={() => handlerToggle(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/25">
            <NavigationMobile />
            <div className="py-6">
              <Link
                href="/contacts"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
              >
                <span>8 (800) 333-55-99</span>
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
