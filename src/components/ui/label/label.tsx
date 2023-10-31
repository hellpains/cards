import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './label.module.scss'

export type LabelPropsType = {
  className?: string
  title: string
} & ComponentPropsWithoutRef<'select'>

export const Label = (props: LabelPropsType) => {
  const { className, title } = props

  return (
    <Typography className={clsx(s.label, className)} variant={'caption'}>
      {title}
    </Typography>
  )
}
