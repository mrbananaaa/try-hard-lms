import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppTypeWithLayout } from "@/types/page";

import { api } from "@/utils/api";

import "@/styles/globals.css";

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
