import QuestList from "@/components/quests";
import { getQuestsByType } from "@/api/db/quests";
import { PageTitle } from "@/constants/content";
import type { Metadata } from "next/types";
import type { TFilterType } from "@/constants/filters";
import initTranslations from "@/app/i18n";
import { i18nNamespaces } from "@/constants/namespaces";

interface Props {
  params: {
    locale: string,
    type: TFilterType 
  };
}

export const metadata: Metadata = {
  title: PageTitle.Common,
  description: PageTitle.Home,
};

export default async function Type({ params: { locale, type } }: Props) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const data = await getQuestsByType( type );
  return (
    <div className="text-left flex flex-col gap-6">
      <p className="text-lg leading-8 text-orange-400">{PageTitle.Common}</p>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        {PageTitle.Home}
      </h1>
      <QuestList type={type} data={data} />
    </div>
  );
}
