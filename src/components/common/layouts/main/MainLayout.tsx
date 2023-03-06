import { type FC, type ReactNode } from "react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import LoadingScreen from "../../loading/LoadingScreen";
import Navbar from "../../navbar/Navbar";

interface IMainLayout {
  title?: string;
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children, title = "Dashboard" }) => {
  const { status } = useSession();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-default-primary">
        <div className="container relative mx-auto min-h-screen bg-default-primary font-epilogue">
          <Navbar />
          <main className="p-4 overflow-x-hidden lg:py-6 lg:pl-24 lg:pr-6">
            {status === "loading" ? <LoadingScreen /> : <>{children}</>}
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
