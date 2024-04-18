import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

export default function InvalidInput({ field }: { field: string | null }) {
  if (!field) {
    return null;
  }
  return (
    <>
      <div className="pointer-events-none absolute top-2 right-0 flex items-center pr-3">
        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
      </div>
      <p className="mt-2 text-sm text-red-600" id="name-error">
        Not a valid {field ? field : ""} field.
      </p>
    </>
  );
}
