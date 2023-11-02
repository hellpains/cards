import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Close } from '@/assets'
import { Button, Typography } from '@/components'
import * as RadixDialog from '@radix-ui/react-dialog'

import s from './Modal.module.scss'

export type ModalPropsType = {
  children: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
} & Omit<ComponentPropsWithoutRef<typeof RadixDialog.Dialog>, 'onOpenChange' | 'open'>
export const Modal = ({ children, setOpen, title, ...props }: ModalPropsType) => {
  return (
    <RadixDialog.Root {...props}>
      <RadixDialog.Trigger className={s.trigger}>
        <Button onClick={() => setOpen(true)}>hello</Button>
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={s.overlay} />
        <RadixDialog.Content className={s.content}>
          <div className={s.header}>
            <RadixDialog.Title asChild>
              <Typography as={'h2'} variant={'h2'}>
                {title}
              </Typography>
            </RadixDialog.Title>
            <RadixDialog.Close className={s.closeButton} onClick={() => setOpen(false)}>
              <Close />
            </RadixDialog.Close>
          </div>
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
