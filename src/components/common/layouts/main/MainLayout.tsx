import { type FC, type ReactNode } from "react";
import Navbar from "../../navbar/Navbar";

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-default-primary font-epilogue">
      <Navbar />
      <main className="py-8 pl-24">{children}</main>
    </div>
  );
};

export default MainLayout;
