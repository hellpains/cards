import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './Typography.module.scss'

export type TypographyPropsType<T extends ElementType = 'span'> = {
  as?: T
  children?: any
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subTitle1'
    | 'subTitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'span'>(props: TypographyPropsType<T>) => {
  const { as: Component = 'span', children, className, variant = 'body1', ...rest } = props

  return (
    <Component className={`${s[variant]} ${className}`} {...rest}>
      {children}
    </Component>
  )
}
