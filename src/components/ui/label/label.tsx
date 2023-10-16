import { ComponentPropsWithoutRef } from 'react'

import s from './label.module.scss'

export type LabelPropsType = {
  className?: string
  title: string
} & ComponentPropsWithoutRef<'select'>

export const Label = (props: LabelPropsType) => {
  const { className, title, ...rest } = props

  return <label className={`${className} ${s.label}`}>{title}</label>
}
