import { getQuests } from "@/api/actions";
import type { Metadata } from "next";
import Image from "next/image";
import Modal from "@/components/modal";
import RegistrationForm from "@/components/form";
interface Props {
  params: { id: string };
  searchParams: {[key: string]: string | string[]|undefined}
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const data = await getQuests({ id: Number(id) });
  const { type, title, level } = data;
  const description = `${level}, ${type}, ${title}`;

  return {
    title,
    description,
  };
}

export default async function Quest({ params: { id }, searchParams }: Props) {
  const data = await getQuests({ id: Number(id) });
  const { title, description, coverImg, type, level, peopleCount, duration } =
    data;

  return (
    <>
      <Image
        fill
        priority
        src={`/assets/${coverImg}`}
        quality={50}
        alt="Main pic"
        sizes="100vw"
        className="inset-0 -top-10 -z-10 h-full w-full object-cover brightness-50"
      />

      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          {type} {level} {peopleCount} {duration}
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          {description}
        </p>
      </div>
      <Modal>
        <RegistrationForm/>
      </Modal>
    </>
  );
}
