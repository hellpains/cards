import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { Delete, Edit, Logout, Person, Play } from '@/assets'
import { Typography } from '@/components'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'

type DropdownMenuProps = {
  children?: ReactNode
  className?: string
  email?: string
  handleDelete?: any
  handleEdit?: any
  handlePlay?: any
  handlerLogout?: () => void
  name?: string
  variant?: 'edit' | 'profile-page'
}
export const DropdownMenu = ({
  children,
  className,
  email,
  handleDelete,
  handleEdit,
  handlePlay,
  handlerLogout,
  name,
  variant,
}: DropdownMenuProps) => {
  const navigate = useNavigate()

  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger className={`s.trigger ${className}`}>
        {children}
      </RadixDropdownMenu.Trigger>
      <RadixDropdownMenu.Portal>
        {variant == 'profile-page' ? (
          <RadixDropdownMenu.Content
            align={'end'}
            alignOffset={-7}
            className={s.content}
            sideOffset={2}
          >
            <div className={s.container}>
              <div className={s.arrow}></div>
              <div className={s.userInfo}>
                <div>{children}</div>
                <div className={s.nameEmail}>
                  <Typography as={'div'} className={s.name} variant={'subTitle2'}>
                    {name}
                  </Typography>
                  <Typography as={'div'} className={s.email} variant={'caption'}>
                    {email}
                  </Typography>
                </div>
              </div>
              <RadixDropdownMenu.Separator className={s.separator} />
              <button
                className={s.profile}
                onClick={() => {
                  navigate('/profile')
                }}
              >
                <Person /> <Typography variant={'caption'}>My Profile</Typography>
              </button>
              <RadixDropdownMenu.Separator className={s.separator} />
              <button className={s.logout} onClick={handlerLogout}>
                <Logout /> <Typography variant={'caption'}>Log Out</Typography>
              </button>
            </div>
          </RadixDropdownMenu.Content>
        ) : (
          <RadixDropdownMenu.Content
            align={'end'}
            alignOffset={-7}
            className={s.content}
            sideOffset={2}
          >
            <div className={s.arrow}></div>
            <div className={s.container}>
              <button className={s.learn} onClick={handlePlay}>
                <Play />
                <Typography variant={'caption'}>Learn</Typography>
              </button>
              <RadixDropdownMenu.Separator className={s.separator} />
              <button className={s.edit} onClick={handleEdit}>
                <Edit />
                <Typography variant={'caption'}>Edit</Typography>
              </button>
              <RadixDropdownMenu.Separator className={s.separator} />
              <button className={s.delete} onClick={handleDelete}>
                <Delete />
                <Typography variant={'caption'}>Delete</Typography>
              </button>
            </div>
          </RadixDropdownMenu.Content>
        )}
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  )
}
