import { ComponentPropsWithoutRef } from 'react'

type CardPropsType = {
  children?: any
  className?: string
} & ComponentPropsWithoutRef<'div'>
import { ButtonProps } from '@/components'

import s from './card.module.scss'
export const Card = (
  props: CardPropsType & Omit<ComponentPropsWithoutRef<'div'>, keyof ButtonProps<'div'>>
) => {
  const { children, className, ...res } = props

  return (
    <div className={`${s.card} ${className}`} {...res}>
      {children}
    </div>
  )
}
