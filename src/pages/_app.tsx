/* eslint-disable @typescript-eslint/ban-types */
import type { NextComponentType, NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import type {
  AppContextType,
  AppInitialProps,
} from "next/dist/shared/lib/utils";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "@/utils/api";

import "@/styles/globals.css";

// SICK TS STUFF
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<P> = AppInitialProps<P> & {
  Component: NextPageWithLayout;
};

type AppTypeWithLayout<P = {}> = NextComponentType<
  AppContextType,
  P,
  AppPropsWithLayout<P>
>;

const MyApp: AppTypeWithLayout<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
