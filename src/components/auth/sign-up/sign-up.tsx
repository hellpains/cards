import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { Button, Card, Typography } from '@/components'
import { ControlledTextField } from '@/components/controlled/controlled-textField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up.module.scss'

const signUpSchema = z
  .object({
    confirmPassword: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof signUpSchema>

export const SignUp = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  return (
    <Card className={s.signUp}>
      <Typography className={s.title} variant={'large'}>
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField control={control} label={'Email'} name={'email'} />
        <ControlledTextField
          className={s.password}
          control={control}
          label={'Password'}
          name={'password'}
          password
        />
        <ControlledTextField
          control={control}
          label={'Confirm Password'}
          name={'confirmPassword'}
          password
        />
        <Button className={s.signUpButton} fullWidth type={'submit'}>
          Sign Up
        </Button>
        <Typography className={s.text} variant={'body2'}>
          Already have an account?
        </Typography>
        <Button as={NavLink} className={s.buttonLink} to={'/sign-in'} variant={'link'}>
          Sign In
        </Button>
      </form>
    </Card>
  )
}
