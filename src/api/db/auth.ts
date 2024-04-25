"use server";
import db from "@/modules/db";
import { cookies } from "next/headers";

export const signUp = async (user: FormData) => {
  const userData = {
    name: user.get("name") as string,
    email: user.get("email") as string,
    password: user.get("password") as string,
  };

  try {
    const data = await db.user.create({ data: userData });

    if (data) {
      cookies().set("isAuth", "true");
      cookies().set("user", `${data.id}`);
      return { message: null, errors: {}, data: { id: data.id } };
    } else {
      return { message: "oh no, it's error.", errors: {}, data };
    }
  } catch (error) {
    return {
      error: "Something went wrong!",
    };
  }
};

export const signIn = async (user: FormData) => {
  const userData = {
    email: user.get("email") as string,
    password: user.get("password") as string,
  };

  try {
    const data = await db.user.findUnique({
      where: userData,
    });

    if (data) {
      cookies().set("isAuth", "true");
      cookies().set("user", `${data.id}`);
      return { message: null, errors: {}, data: { id: data.id } };
    } else {
      return { message: "Incorrect email or password", errors: {}, data };
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "An unknown error occurred" };
    }
  }
};

export const logout = async () => {
  try {
    const userId = cookies().get("user")?.value;

    if (userId) {
      const data = await db.user.findUnique({
        where: {id: Number(userId) },
      });
  
      if (data?.id === Number(userId) ) {
        cookies().delete("isAuth");
        cookies().delete("user");
        return data.id;
      } else {
        console.warn('LOGOUT WARN:::', data);
        return undefined;
      }
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "An unknown error occurred" };
    }
  }
};
