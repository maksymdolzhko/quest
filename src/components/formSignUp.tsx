"use client";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { signUp } from "@/api/db/auth";
import { SignUpSchema } from "@/schema/schema-signup";
import { useRouter } from "next/navigation";
import InvalidInput from "./invalidInput";

const invalidStyle =
  "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500";

export default function SignUpForm() {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const initialState = {
    message: null,
    errors: {},
    data: {
      id: null,
    },
  };

  const clientAction = async (_prevState: unknown, formData: FormData) => {
    const schemaResult = SignUpSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!schemaResult.success) {
      return {
        data: {},
        message: "Missing Fields:",
        errors: schemaResult.error.flatten().fieldErrors,
      };
    }

    const result = await signUp(formData);
    ref.current?.reset();

    if (result.data?.id) {
      router.push("/ua");
    }
    return result;
  };

  const [state, dispatch] = useFormState<any, any>(clientAction, initialState);
  const { message, errors, data } = state;

  return (
    <>
      <form className="space-y-6" action={dispatch}>
        {message && <InvalidInput field={message} />}
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
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Enter email"
            className={`block w-full rounded-md border-0 bg-white/5 px-2.5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 ${
              message && errors["email"] ? invalidStyle : ""
            }`}
          />
          {message && errors["email"] && (
            <InvalidInput field={errors["email"][0]} />
          )}
        </div>

        <div className="relative mb-4">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            autoComplete="password"
            placeholder="Enter password"
            className={`block w-full rounded-md border-0 bg-white/5 px-2.5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 ${
              message && errors["password"] ? invalidStyle : ""
            }`}
          />
          {message && errors["password"] && (
            <InvalidInput field={errors["password"][0]} />
          )}
        </div>

        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Sign Up
        </button>
      </form>
    </>
  );
}
