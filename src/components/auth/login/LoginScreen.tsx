import { type NextPage } from "next"
import { type getProviders } from "next-auth/react"

interface ILoginScreen {
  providers: Awaited<ReturnType<typeof getProviders>>
}

const LoginScreen: NextPage<ILoginScreen> = ({ providers }) => {
  return (
    <div>
      LoginScreen
    </div>
  )
}

export default LoginScreen