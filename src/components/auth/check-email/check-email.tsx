import { NavLink } from 'react-router-dom'

import { CheckEmailIcon } from '@/assets'
import { Button, Card, Typography } from '@/components'

import s from './check-email.module.scss'

export const CheckEmail = () => {
  return (
    <Card className={s.checkEmail}>
      <div className={s.container}>
        <Typography className={s.title} variant={'large'}>
          Check Email
        </Typography>
        <div className={s.emailIcon}>
          <CheckEmailIcon />
        </div>
        <Typography as={'div'} className={s.text} variant={'body2'}>
          We’ve sent an Email with instructions to example@mail.com
        </Typography>
        <Button as={NavLink} className={s.button} fullWidth to={'/sign-in'}>
          Back to Sign In
        </Button>
      </div>
    </Card>
  )
}
