import LoginScreen from "@/components/auth/login/LoginScreen";
import { authOptions } from "@/server/auth";
import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
} from "next";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";

export default function LoginPage({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <LoginScreen providers={providers} />;
}

export const getServerSideProps: GetServerSideProps<{
  providers: Awaited<ReturnType<typeof getProviders>>;
}> = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: `/dashboard/${session.user.role.toLowerCase()}`,
        permanent: false,
      },
    };
  }

  const providers = await getProviders();

  return {
    props: { providers },
  };
};
