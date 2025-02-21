import Layout from "@/components/Layout";
import { getSession } from "@/lib/auth/session";
import { SessionProvider } from "@/providers/SessionProvider";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  return (
    <>
      <SessionProvider session={session}>
        <Layout>{children}</Layout>
      </SessionProvider>
    </>
  );
}
