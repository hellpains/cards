import { NavLink, useNavigate } from 'react-router-dom'

import { Logo } from '@/assets'
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
        <Typography className={s.logo} variant={'h2'}>
          <Button as={NavLink} to={'/'} variant={'link'}>
            <Logo />
          </Button>
        </Typography>
        {!isError ? (
          <div className={s.info}>
            <Typography className={s.name}>{data?.name}</Typography>
            <DropdownMenu
              email={data?.email}
              handlerLogout={handlerLogout}
              name={data?.name}
              variant={'profile-page'}
            >
              <Image
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
