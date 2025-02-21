"use server";
//import "server-only" //AMIR
import { redirect } from "next/navigation";

import { removeSession } from "@/lib/auth/storage";
import { revalidatePath } from "next/cache";

const signOut = async (redirectTo?: string) => {
  await removeSession();
  
  revalidatePath(redirectTo || "/auth/login");
  redirect(redirectTo || "/auth/login");
};

export default signOut;
