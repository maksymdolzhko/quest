import { Metadata } from "next/types";
import { PageTitle } from "@/constants/content";
import SignUpForm from "@/components/formSignUp";

export const metadata: Metadata = {
  title: PageTitle.SignUp_H1,
  description: PageTitle.SignUp_H2,
};

export default async function Begin() {
  return (
    <>
      <SignUpForm/>
    </>
  );
}
