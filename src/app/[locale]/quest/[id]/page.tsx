import { getQuestsById } from "@/api/db/quests";
import type { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: { id: string };
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const data = await getQuestsById(Number(id));
  const { type, title, level } = data;
  const description = `${level}, ${type}, ${title}`;

  return {
    title,
    description,
  };
}

export default async function Quest({ params: { id } }: Props) {
  const data = await getQuestsById(Number(id));

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
        <p className="mt-6 text-lg leading-8 text-gray-300">{description}</p>
      </div>
    </>
  );
}
