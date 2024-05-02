import initTranslations from "@/app/i18n";
import { PageTitle } from "@/constants/content";
import { i18nNamespaces } from "@/constants/namespaces";
import Link from "next/link";

export default async function Layout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <div className="mx-auto max-w-sm">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-6xl">
          {t("signin_title")}
        </h1>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          {t("lorem")}
        </h2>
      </div>
      {children}
      <p className="mt-10 text-center text-sm text-gray-400">
        <span className="mr-1">{t("continue_with")}</span>
        <Link
          href="/sign-up"
          className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
        >
          {t("registration")}
        </Link>
      </p>
    </div>
  );
}
