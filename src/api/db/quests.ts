"use server";
import db from "@/modules/db";
import { TFilterType } from "@/constants/filters";
import { ListQuestItem } from "@/types";

export const getQuests = async (): Promise<ListQuestItem[]> => {
  const data: ListQuestItem[] = await db.quests.findMany();
  return data;
};

export const getQuestsById = async (id: number): Promise<ListQuestItem> => {
  const data = await db.quests.findUnique({
    where: {
      id,
    },
  });

  return data as ListQuestItem;
};

export const getQuestsByType = async (
  type: TFilterType
): Promise<ListQuestItem[]> => {
  const data: ListQuestItem[] = await db.quests.findMany({
    where: {
      type,
    },
  });

  return data;
};