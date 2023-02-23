/* eslint-disable @typescript-eslint/ban-types */
import type { NextComponentType, NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import type {
  AppContextType,
  AppInitialProps,
} from "next/dist/shared/lib/utils";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout<P> = AppInitialProps<P> & {
  Component: NextPageWithLayout;
};

export type AppTypeWithLayout<P = {}> = NextComponentType<
  AppContextType,
  P,
  AppPropsWithLayout<P>
>;
