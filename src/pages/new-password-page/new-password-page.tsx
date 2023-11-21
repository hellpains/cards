import { useNavigate, useParams } from 'react-router-dom'

import { Header, NewPassword } from '@/components'
import { useResetPasswordMutation } from '@/services/auth'

import s from './new-password-page.module.scss'

export const NewPasswordPage = () => {
  const params = useParams()

  const [reset] = useResetPasswordMutation()
  const navigate = useNavigate()

  const handleNewPassword = async (data: { password: string }) => {
    try {
      await reset({ password: data.password, token: params.token })
      navigate('/sign-in')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={s.newPassword}>
      <Header />
      <NewPassword onSubmit={handleNewPassword} />
    </div>
  )
}
