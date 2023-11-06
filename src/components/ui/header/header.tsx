import { NavLink } from 'react-router-dom'

import { Button, Typography } from '@/components'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { Image } from '@/components/ui/image'

import s from './header.module.scss'

type HeaderProps = {
  email?: string
  isAuth?: boolean
  name?: string
}
export const Header = ({
  email = 'rustam2004sadulaev@mail.ru',
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
          <div className={s.info}>
            <Typography className={s.name}>{name}</Typography>
            <DropdownMenu email={email} name={name} variant={'profile'}>
              <Image
                height={36}
                src={'https://sunmag.me/wp-content/uploads/2019/11/sunmag-005-small-avatar.png'}
                width={36}
              />
            </DropdownMenu>
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
