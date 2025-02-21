"use server";

import { cookies } from "next/headers";

const cookieName = process.env.USER_SESSION as string;

export const saveSession = async (accessToken: string) => {
  //console.log(process.env.NODE_ENV);//development
  const cookieStore = await cookies();
  cookieStore.set({
    name: cookieName,
    value: accessToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
};

export const removeSession = async () => {
  (await cookies()).delete(cookieName);
};
