import { useNavigate } from 'react-router-dom'

import { ForgotPassword, Header } from '@/components'
import { useRecoverPasswordMutation } from '@/services/auth'

export const ForgotPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const navigate = useNavigate()

  const handleForgotPassword = async (data: { email: string }) => {
    try {
      await recoverPassword(data.email)
      navigate('/check-email')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <Header />
      <ForgotPassword onSubmit={handleForgotPassword} />
    </div>
  )
}
