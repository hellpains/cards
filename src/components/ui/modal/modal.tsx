import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Close } from '@/assets'
import { Typography } from '@/components'
import * as RadixDialog from '@radix-ui/react-dialog'

import s from './Modal.module.scss'

export type ModalPropsType = {
  children?: ReactNode
  onOpenChange?: (open: boolean) => void
  open?: boolean
  title?: string
} & Omit<ComponentPropsWithoutRef<typeof RadixDialog.Dialog>, 'onOpenChange' | 'open'>
export const Modal = ({ children, title, ...props }: ModalPropsType) => {
  return (
    <RadixDialog.Root {...props}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={s.overlay} />
        <RadixDialog.Content className={s.content}>
          <div className={s.header}>
            <RadixDialog.Title asChild>
              <Typography as={'h2'} className={s.title} variant={'h2'}>
                {title}
              </Typography>
            </RadixDialog.Title>
            <RadixDialog.Close className={s.closeButton}>
              <Close />
            </RadixDialog.Close>
          </div>
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
