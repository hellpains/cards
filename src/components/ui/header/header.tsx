import { NavLink, useNavigate } from 'react-router-dom'

import { Button, Typography } from '@/components'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { Image } from '@/components/ui/image'
import { useLogoutMutation, useMeQuery } from '@/services/auth'

import s from './header.module.scss'

type HeaderProps = {}
export const Header = ({}: HeaderProps) => {
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()
  const { data, isError } = useMeQuery()

  const handlerLogout = async () => {
    try {
      await logout()
      navigate('/sign-in')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={s.header}>
      <div className={s.container}>
        <NavLink className={s.logo} to={'/'}>
          <Typography className={s.logoText} variant={'h2'}>
            Quizlet{' '}
          </Typography>
        </NavLink>
        {!isError ? (
          <div className={s.info}>
            <NavLink style={{ textDecoration: 'none' }} to={'/profile'}>
              <Typography className={s.name}>{data?.name}</Typography>
            </NavLink>
            <DropdownMenu
              email={data?.email}
              handlerLogout={handlerLogout}
              name={data?.name}
              variant={'profile-page'}
            >
              <Image
                className={s.avatar}
                height={36}
                src={
                  data?.avatar ??
                  'https://sunmag.me/wp-content/uploads/2019/11/sunmag-005-small-avatar.png'
                }
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
