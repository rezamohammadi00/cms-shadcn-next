"use client";
import Link from "next/link";

import signOut from "@/lib/auth/signOut";

const LogOutButton = () => {
  return (
    <Link
      href={""}
      onClick={async () => {
        await signOut();
      }}
    >
      خروج
    </Link>
  );
};

export default LogOutButton;
