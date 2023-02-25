import { type FC } from "react";
import { Loader } from "react-feather";

const LoadingScreen: FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader size={48} className="animate-spin-slow" />
    </div>
  );
};

export default LoadingScreen;
