"server only"; //it is important because it returns the token

import { cookies } from "next/headers";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getSession = async () => {
  const cookieStore = await cookies();
  const aceessToken = cookieStore.get(process.env.USER_SESSION as string);
  if (!aceessToken) return null;

  const res = await fetch(BACKEND_URL + "/api/v1" + "/me");
  if (!res.ok) return null;

  const user = await res.json();
  return { ...user, aceessToken };
};
