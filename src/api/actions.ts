"use server";

import type { TFilterType } from "@/constants/filters";
import type { RType } from "@/schema/schema-registration";
import { ListQuestItem } from "@/types";

export async function getQuests(param?: { id?: number; type?: TFilterType }) {
  const byAll = !param && "/quests";
  const byId = param && param.id && `/quests/${param.id}`;
  const byType = param && param.type && `/quests?type=${param.type}`;
  const url = !byType ? (!byId ? byAll : byId) : byType;

  try {
    const response = await fetch(`${process.env.API_BASE_PATH}${url}`, {
      method: "GET",
      cache: 'no-store',
    });

    const data: ListQuestItem[] = await response.json();

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "An unknown error occurred" };
    }
  }
}

export async function registration(data: FormData) {
  const bodyData = {
    name: data.get("name"),
    phone: data.get("phone"),
    peopleCount: Number(data.get("peopleCount")),
    isLegal: data.has("isLegal"),
  } as RType;

  try {
    const response = await fetch(`${process.env.API_BASE_PATH}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    const res = await response.json();
    return res;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "An unknown error occurred" };
    }
  }
}
