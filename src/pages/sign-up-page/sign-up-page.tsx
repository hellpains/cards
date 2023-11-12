import { Header, SignUp } from '@/components'
import { useSignUpMutation } from '@/services/auth'

export const SignUpPage = () => {
  const [onSubmit] = useSignUpMutation()

  return (
    <div>
      <Header />
      <SignUp
        onSubmit={(values: { email: string; password: string }) =>
          onSubmit({ email: values.email, password: values.password })
        }
      />
    </div>
  )
}
