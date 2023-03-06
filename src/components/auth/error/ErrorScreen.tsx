import { type NextPage } from "next";

const ErrorScreen: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-default-primary font-epilogue">
      <div className="rounded-lg bg-black p-4 text-white">Error Auth</div>
    </div>
  );
};

export default ErrorScreen;
