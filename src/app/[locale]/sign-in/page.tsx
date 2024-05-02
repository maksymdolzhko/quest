import { Metadata } from "next/types";
import { PageTitle } from "@/constants/content";
import { i18nNamespaces } from "@/constants/namespaces";
import SignInForm from "@/components/formSignIn";
import TranslationsProvider from "@/providers/TranslationsProvider";
import initTranslations from "@/app/i18n";

export const metadata: Metadata = {
  title: PageTitle.SignIn_H1,
  description: PageTitle.SignIn_H2,
};

export default async function SignIn({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <SignInForm />
    </TranslationsProvider>
  );
}
