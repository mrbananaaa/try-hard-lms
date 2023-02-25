import { type FC, type ReactNode } from "react";
import Navbar from "../../navbar/Navbar";

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
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
