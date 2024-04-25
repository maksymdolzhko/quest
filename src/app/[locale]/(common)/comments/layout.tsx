import PageNav from "@/components/pageNav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-5xl">
      {children}
      <PageNav />
    </div>
  );
}
