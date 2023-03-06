import { type ReactNode, type FC } from "react";

interface IPageTitle {
  title?: string;
  children?: ReactNode;
}

const PageTitle: FC<IPageTitle> = ({ title = "Page Title", children }) => {
  return (
    <div>
      {children ? (
        <>{children}</>
      ) : (
        <h1 className="text-4xl font-bold">{title}</h1>
      )}
    </div>
  );
};

export default PageTitle;
