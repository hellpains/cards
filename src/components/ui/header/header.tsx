import { NavLink } from 'react-router-dom'

import { Button, Typography } from '@/components'

import s from './header.module.scss'

type HeaderProps = {
  email?: string
  isAuth?: boolean
  name?: string
}
export const Header = ({
  // email = 'rustam2004sadulaev@mail.ru',
  isAuth = true,
  name = 'hellpains',
}: HeaderProps) => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <Typography className={s.logo} variant={'h2'}>
          Cards
        </Typography>
        {isAuth ? (
          <div>
            <Typography className={s.name}>{name}</Typography>
          </div>
        ) : (
          <Button
            as={NavLink}
            className={s.button}
            onClick={() => {}}
            to={'/sign-in'}
            // variant={'primary'}
          >
            Sign In
          </Button>
        )}
      </div>
    </div>
  )
}
