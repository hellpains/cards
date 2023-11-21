import { useNavigate } from 'react-router-dom'

import { Header, SignUp } from '@/components'
import { useMeQuery, useSignUpMutation } from '@/services/auth'

export const SignUpPage = () => {
  const navigate = useNavigate()
  const { isError } = useMeQuery()
  const [onSubmit] = useSignUpMutation()

  if (!isError) {
    navigate('/')
  }

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
