import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './label.module.scss'

export type LabelPropsType = {
  className?: string
  title: string
} & ComponentPropsWithoutRef<'select'>

export const Label = (props: LabelPropsType) => {
  const { className, title } = props

  const classNames = {
    label: clsx(s.label, className),
  }

  return <label className={classNames.label}>{title}</label>
}
