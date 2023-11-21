import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components'
import { ControlledTextField } from '@/components/controlled/controlled-textField'
// import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './new-password.module.scss'

const newPasswordSchema = z.object({
  password: z.string().min(3),
})

type FormValues = z.infer<typeof newPasswordSchema>

type Props = {
  onSubmit: (data: FormValues) => void
}
export const NewPassword = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(newPasswordSchema),
  })

  return (
    <Card className={s.newPassword}>
      <Typography className={s.title} variant={'large'}>
        Create new password
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*<DevTool control={control} />*/}
        <div className={s.container}>
          <ControlledTextField
            className={s.emailInput}
            control={control}
            label={'Password'}
            name={'password'}
            password
          />
          <Typography as={'div'} className={s.text} variant={'body2'}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button className={s.button} fullWidth type={'submit'}>
            Create New Password
          </Button>
        </div>
      </form>
    </Card>
  )
}
