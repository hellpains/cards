import { ComponentPropsWithoutRef, ElementType, Ref, forwardRef } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'icon' | 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(
    props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
    ref: Ref<HTMLButtonElement>
  ) => {
    const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

    return (
      <Component
        className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
        ref={ref}
        {...rest}
      />
    )
  }
)
