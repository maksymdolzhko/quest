"use server";

import { RType } from "@/schema/schema-registration";

type TType = "adventures" | "mystic" | "horror" | "detective" | "sci-fi";
interface Props {
  id?: number;
  type?: TType;
}

export async function getQuests(param?: Props) {
  const byAll = !param && "/quests";
  const byId = param && param.id && `/quests/${param.id}`;
  const byType = param && param.type && `/quests?type=${param.type}`;
  const url = !byType ? (!byId ? byAll : byId) : byType;

  try {
    const response = await fetch(`http://localhost:3001${url}`, {
      method: "GET",
    });

    return response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "An unknown error occurred" };
    }
  }
}


export async function registration(data: FormData) {
  "use server";

  const bodyData = {
    name: data.get('name'),
    phone: data.get('phone'),
    peopleCount: Number(data.get('peopleCount')),
    isLegal: data.has('isLegal'),
  } as RType;

  try {
    const response = await fetch(`http://localhost:3001/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    const res = await response.json()
    return  res;

  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "An unknown error occurred" };
    }
  }
}
