"use server";

import { saveSession } from "@/lib/auth/storage";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const signIn = async ({
  username,
  password,
  redirectTo = "/",
}: {
  username: string;
  password: string;
  redirectTo?: string;
}) => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const { error } = await res.json(); // for test edit url backend
      throw new Error(error || "وارد شدن شما با خطایی مواجه شده است.");
    }

    // throw new Error("ورود شما با خطایی مواجه شده است.");  // for test catch block

    const data = await res.json();
    await saveSession(data.accessToken);
  } catch (error) {
    console.error("Sign-in error:", error);
    throw new Error((error as Error).message || "مشکلی پیش آمد");
  }

  revalidatePath(redirectTo || "/");
  redirect(redirectTo || "/");
};

export default signIn;
