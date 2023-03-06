import { type ReactNode, type FC } from "react";

interface INavbarBase {
  children: ReactNode;
}

const NavbarBase: FC<INavbarBase> = ({ children }) => {
  return (
    <div className="fixed z-50 hidden min-h-screen p-[1.5vh] lg:block">
      <div className="flex min-h-[97vh] flex-col justify-between rounded-xl bg-black py-10 2xl:min-h-[70vh]">
        <h1 className="px-4 font-semibold text-white">LMS</h1>

        <div className="flex flex-col items-center space-y-20">{children}</div>
      </div>
    </div>
  );
};

export default NavbarBase;
