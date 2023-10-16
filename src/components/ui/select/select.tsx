import { ComponentPropsWithoutRef } from 'react'

import s from './select.module.scss'

export type SelectPropsType = {
  className?: string
} & ComponentPropsWithoutRef<'select'>

export const Select = (props: SelectPropsType) => {
  const { className, ...rest } = props

  return (
    <select className={s.select} id={'sdf'} name={'sdf'} {...rest}>
      hello
    </select>
  )
}
