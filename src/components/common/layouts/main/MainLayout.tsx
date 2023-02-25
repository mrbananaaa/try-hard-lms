import { useSession } from "next-auth/react";
import { type FC, type ReactNode } from "react";
import LoadingScreen from "../../loading/LoadingScreen";
import Navbar from "../../navbar/Navbar";

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  const { status } = useSession();

  return (
    <div className="relative min-h-screen bg-default-primary font-epilogue">
      <Navbar />
      <main className="pl-24 pr-6">
        {status === "loading" ? <LoadingScreen /> : <>{children}</>}
      </main>
    </div>
  );
};

export default MainLayout;
