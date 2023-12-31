import { NavLink } from 'react-router-dom'

import { Button, Card, Typography } from '@/components'
import { FormValues, useForgotPasswordForm } from '@/components/auth/forgot-password'
import { ControlledTextField } from '@/components/controlled/controlled-textField'
// import { DevTool } from '@hookform/devtools'

import s from './forgot-password.module.scss'

export const ForgotPassword = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const { control, handleSubmit } = useForgotPasswordForm()

  return (
    <Card className={s.forgotPassword}>
      <Typography className={s.title} variant={'large'}>
        Forgot your password?
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        {/*<DevTool control={control} />*/}

        <ControlledTextField
          className={s.emailInput}
          control={control}
          label={'Email'}
          name={'email'}
        />
        <Typography className={s.text1} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button className={s.sendButton} fullWidth type={'submit'}>
          Send Instructions
        </Button>
        <Typography className={s.text2} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Button as={NavLink} className={s.buttonLink} to={'/sign-in'} variant={'link'}>
          Try logging in
        </Button>
      </form>
    </Card>
  )
}
