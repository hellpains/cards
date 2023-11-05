import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './label.module.scss'

export type LabelPropsType = {
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'label'>

export const Label = (props: LabelPropsType) => {
  const { children, className } = props

  return (
    <Typography as={'label'} className={clsx(s.label, className)} variant={'body2'}>
      {children}
    </Typography>
  )
}
