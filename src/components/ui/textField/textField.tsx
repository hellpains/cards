import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Close, ClosedEye, Eye, Search } from '@/assets'
import { Label, Typography } from '@/components'

import s from './textField.module.scss'

export type TextFieldPropsType = {
  className?: string
  error?: null | string
  label?: string
  password?: boolean
  search?: boolean
} & ComponentPropsWithoutRef<'input'>
export const TextField = forwardRef<HTMLInputElement, TextFieldPropsType>(
  ({ className, error, label, password, search, ...rest }, ref) => {
    const [passwordVisible, setPasswordVisible] = useState(true)

    return (
      <div className={`${s.textField} ${className}`}>
        <Label className={s.label}>{label}</Label>
        <div className={s.inputBox}>
          {search && (
            <div className={s.search}>
              <Search />
            </div>
          )}
          <input
            className={`${search ? s.searchInput : ''} ${password ? s.passwordInput : ''} ${
              error ? s.error : ''
            }`}
            ref={ref}
            type={password && passwordVisible ? 'password' : 'text'}
            {...rest}
          />
          {password && (
            <div
              className={s.eye}
              onClick={() => {
                setPasswordVisible(prev => !prev)
              }}
            >
              {passwordVisible ? <Eye /> : <ClosedEye />}
            </div>
          )}

          {search && rest.value && (
            <div
              className={s.close}
              onClick={() => {
                // rest.onChange('')
              }}
            >
              <Close />
            </div>
          )}
          {error && <Typography className={s.error}>{error}</Typography>}
        </div>
      </div>
    )
  }
)
