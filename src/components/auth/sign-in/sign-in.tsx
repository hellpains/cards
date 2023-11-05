import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { Button, Typography } from '@/components'
import { ControlledCheckbox } from '@/components/controlled'
import { ControlledTextField } from '@/components/controlled/controlled-textField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean(),
})

type FormValues = z.infer<typeof loginSchema>
// type SignInPropsType = {}
export const SignIn = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  return (
    <div className={s.signIn}>
      <Typography className={s.title} variant={'large'}>
        Sign In
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          className={s.emailInput}
          control={control}
          label={'Email'}
          name={'email'}
        />
        <ControlledTextField control={control} label={'Password'} name={'password'} password />
        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Remember me'}
          name={'rememberMe'}
        />
        <Typography
          as={NavLink}
          className={s.forgotPasswordLink}
          to={'/forgot-password'}
          variant={'body2'}
        >
          Forgot Password?
        </Typography>
        <Button fullWidth type={'submit'}>
          Sign In
        </Button>
        <Typography className={s.text} variant={'body2'}>
          Don't have an account?
        </Typography>
        <Button as={NavLink} className={s.buttonLink} to={'/registration'} variant={'link'}>
          Sign Up
        </Button>
      </form>
    </div>
  )
}
