import { useNavigate } from 'react-router-dom'

import { Header, SignIn } from '@/components'
import { LoginArgs, useLoginMutation, useMeQuery } from '@/services/auth'

export const SignInPage = () => {
  const navigate = useNavigate()
  const { isError } = useMeQuery()
  const [login] = useLoginMutation()

  const handleLogin = async (args: LoginArgs) => {
    try {
      await login(args)
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  if (!isError) {
    navigate('/')
  }

  return (
    <div>
      <Header />
      <SignIn onSubmit={handleLogin} />
    </div>
  )
}
