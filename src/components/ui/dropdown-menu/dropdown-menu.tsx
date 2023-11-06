import { ReactNode } from 'react'

import { Delete, Edit, Logout, Person, Play } from '@/assets'
import { Typography } from '@/components'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'

type DropdownMenuProps = {
  children?: ReactNode
  email?: string
  name?: string
  variant?: 'edit' | 'profile'
}
export const DropdownMenu = ({ children, email, name, variant }: DropdownMenuProps) => {
  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger className={s.trigger}>{children}</RadixDropdownMenu.Trigger>
      <RadixDropdownMenu.Portal>
        {variant == 'profile' ? (
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
              <div className={s.profile}>
                <Person /> <Typography variant={'caption'}>My Profile</Typography>
              </div>
              <RadixDropdownMenu.Separator className={s.separator} />
              <div className={s.logout}>
                <Logout /> <Typography variant={'caption'}>Log Out</Typography>
              </div>
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
              <div className={s.learn}>
                <Play />
                <Typography variant={'caption'}>Learn</Typography>
              </div>
              <RadixDropdownMenu.Separator className={s.separator} />
              <div className={s.edit}>
                <Edit />
                <Typography variant={'caption'}>Edit</Typography>
              </div>
              <RadixDropdownMenu.Separator className={s.separator} />
              <div className={s.delete}>
                <Delete />
                <Typography variant={'caption'}>Delete</Typography>
              </div>
            </div>
          </RadixDropdownMenu.Content>
        )}
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  )
}
