import { CheckEmail, ForgotPassword, SignIn, SignUp } from '@/components'
import { Header } from '@/components/ui/header'

export const SignInPage = () => {
  return (
    <div>
      <Header isAuth={false} name={'hellpains'} />
      <SignIn onSubmit={() => {}} />
    </div>
  )
}
