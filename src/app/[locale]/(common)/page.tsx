import QuestList from "@/components/quests";
import { getQuests } from "@/api/db/quests";
import { PageTitle } from "@/constants/content";
import type { Metadata } from "next";
import TranslationsProvider from "@/providers/TranslationsProvider";
import initTranslations from "@/app/i18n";
import { i18nNamespaces } from "@/constants/namespaces";

export const metadata: Metadata = {
  title: PageTitle.Common,
  description: PageTitle.Home,
};

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const data = await getQuests();
  const {t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="text-left flex flex-col gap-6">
        <p className="text-lg leading-8 text-orange-400">{PageTitle.Common}</p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {t('signin')}
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {PageTitle.Home}
        </h1>
        <QuestList data={data} />
      </div>
    </TranslationsProvider>
  );
}
