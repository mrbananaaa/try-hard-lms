/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type NextPage } from "next";
import { signIn, type getProviders } from "next-auth/react";

interface ILoginScreen {
  providers: Awaited<ReturnType<typeof getProviders>>;
}

const LoginScreen: NextPage<ILoginScreen> = ({ providers }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#DFECF1] font-epilogue">
      <div className="select-none rounded-xl bg-black p-6 text-white">
        <div className="space-y-2 py-4 text-white">
          <h1 className="text-4xl font-semibold">Login</h1>
          <p className="text-sm font-light text-stone-300">
            Please login before accessing dashboard!
          </p>
        </div>

        <div className="mt-4">
          <div className="flex flex-col space-y-2">
            {Object.values(providers!).map(({ id, name }) => (
              <div key={name}>
                <button
                  className="w-full rounded border-2 border-transparent bg-white py-2.5 text-lg font-semibold text-black duration-300 hover:border-white hover:bg-black hover:text-white"
                  onClick={() =>
                    signIn(id, { redirect: true, callbackUrl: "/" })
                  }
                >
                  Login with {name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
