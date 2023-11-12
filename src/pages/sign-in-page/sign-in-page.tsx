import { useNavigate } from 'react-router-dom'

import { Header, SignIn } from '@/components'
import { LoginArgs, useLoginMutation } from '@/services/auth'

export const SignInPage = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()

  const handleLogin = async (args: LoginArgs) => {
    try {
      await login(args)
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <Header />
      <SignIn onSubmit={handleLogin} />
    </div>
  )
}
