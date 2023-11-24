import { useNavigate } from 'react-router-dom'

import { Header, SignIn } from '@/components'
import { LoginArgs, useLoginMutation, useMeQuery } from '@/services/auth'

export const SignInPage = () => {
  const navigate = useNavigate()
  const { data } = useMeQuery()
  const [login] = useLoginMutation()

  const handleLogin = async (args: LoginArgs) => {
    try {
      await login(args)
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  if (data) {
    navigate('/')
  }

  return (
    <div>
      <Header />
      <SignIn onSubmit={handleLogin} />
    </div>
  )
}
