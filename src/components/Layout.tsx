// "use client"; // for test SessionProvider
// import { useSession } from "@/providers/SessionProvider";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Container from "@/components/Container";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  // const session = useSession();
  // console.log(session);
  return (
    <>
      <Topbar />
      <Container>
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </Container>
    </>
  );
};

export default Layout;
