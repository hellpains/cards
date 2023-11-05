import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { Button, Card, Typography } from '@/components'
import { ControlledTextField } from '@/components/controlled/controlled-textField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-password.module.scss'

const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

type FormValues = z.infer<typeof forgotPasswordSchema>

export const ForgotPassword = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  })

  return (
    <Card className={s.forgotPassword}>
      <Typography className={s.title} variant={'large'}>
        Forgot your password?
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
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
