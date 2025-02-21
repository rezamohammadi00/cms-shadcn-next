"use client";

import Session from "@/types/session";
import { createContext, useContext, useState } from "react";

type SessionContextType = Session;

const SessionContext = createContext<SessionContextType | null>(null);

export const SessionProvider = ({
  children,
  session,
}: {
  session: SessionContextType;
  children: React.ReactNode;
}) => {
  const [inSession] = useState<SessionContextType | null>(session);

  return (
    <SessionContext.Provider value={inSession}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
