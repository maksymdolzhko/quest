import { Metadata } from "next/types";
import { PageContent, PageTitle } from "@/constants/content";

export const metadata: Metadata = {
  title: PageTitle.Sales_H1,
  description: PageTitle.Sales_H2,
};

export default async function Sales() {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        {PageTitle.Sales_H1}
      </h1>
      <h2 className="mt-6 text-lg leading-8 text-gray-300">
        {PageTitle.Sales_H2}
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        {PageContent.Sales}
      </p>
    </>
  );
}