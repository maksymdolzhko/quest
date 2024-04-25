import { Metadata } from "next/types";
import { PageTitle } from "@/constants/content";
import SignInForm from "@/components/formSignIn";

export const metadata: Metadata = {
  title: PageTitle.SignIn_H1,
  description: PageTitle.SignIn_H2,
};

export default async function SignIn() {
  return (
    <>
      <SignInForm />
    </>
  );
}
