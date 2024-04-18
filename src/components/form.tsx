"use client";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { registration } from "@/api/actions";
import { RegistrationSchema } from "@/schema/schema-registration";
import Success from "@/components/success";
import InvalidInput from "./invalidInput";

const invalidStyle =
  "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500";

export default function RegistrationForm() {
  const ref = useRef<HTMLFormElement>(null);
  const initialState = { message: null, errors: {} };

  const clientAction = async (_prevState: unknown, formData: FormData) => {
    const schemaResult = RegistrationSchema.safeParse({
      name: formData.get("name"),
      phone: formData.get("phone"),
      peopleCount: Number(formData.get("peopleCount")),
      isLegal: formData.has("isLegal"),
    });

    if (!schemaResult.success) {
      return {
        message: "Missing Fields:",
        errors: schemaResult.error.flatten().fieldErrors,
      };
    }

    const result = await registration(formData);
    ref.current?.reset();
    return result;
  };

  const [state, dispatch] = useFormState(clientAction, initialState);
  const { message, errors } = state;

  if (state === 201) {
    return <Success />;
  }

  const clearError = () =>{
    if(message) {
      ref.current?.reset();
      RegistrationSchema.strip();
    }
  }
  return (
    <>
      <form className="space-y-6" action={dispatch}>
        <div className="relative mb-4">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Enter name"
            className={`block w-full rounded-md border-0 bg-white/5 px-2.5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 ${
              message && errors["name"] ? invalidStyle : ""
            }`}
          />
          {message && errors["name"] && (
            <InvalidInput field={errors["name"][0]} />
          )}
        </div>

        <div className="relative mb-4">
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="phone"
            placeholder="Phone number"
            className={`block w-full rounded-md border-0 bg-white/5 px-2.5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 ${
              message && errors["phone"] ? invalidStyle : ""
            }`}
          />
          {message && errors["phone"] && (
            <InvalidInput field={errors["phone"][0]} />
          )}
        </div>

        <div className="relative mb-4">
          <label htmlFor="peopleCount" className="sr-only">
            People
          </label>
          <input
            
            type="number"
            id="peopleCount"
            name="peopleCount"
            autoComplete="peopleCount"
            placeholder="Amound people"
            onFocus={clearError}
            className={`block w-full rounded-md border-0 bg-white/5 px-2.5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 ${
              message && errors["peopleCount"] ? invalidStyle : ""
            }`}
          />
          {message && errors["peopleCount"] && (
            <InvalidInput field={errors["peopleCount"][0]} />
          )}
        </div>

        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="isLegal"
              name="isLegal"
              type="checkbox"
              className="h-4 w-4 rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="isLegal" className="font-medium text-white">
              Agreement
            </label>
            <p className="text-gray-400">
              I agree with the rules for processing personal data and the user
              agreement
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Registration
        </button>
      </form>
    </>
  );
}
