import { Dialog } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Success(){
  return (
    <div>
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
        <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
      </div>

      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title
          as="h3"
          className="text-base font-semibold leading-6 text-gray-900"
        >
          Registration successful
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            amet labore.
          </p>
        </div>
      </div>

      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => {}}
        >
          Go back to dashboard
        </button>
      </div>
    </div>
  );
}
