import LoginScreen from "@/components/auth/login/LoginScreen";
import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
} from "next";
import { getProviders } from "next-auth/react";

export default function LoginPage({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <LoginScreen providers={providers} />;
}

export const getServerSideProps: GetServerSideProps<{
  providers: Awaited<ReturnType<typeof getProviders>>;
}> = async () => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};
