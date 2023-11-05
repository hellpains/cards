import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Close, ClosedEye, Eye, Search } from '@/assets'
import { Label, Typography } from '@/components'

import s from './textField.module.scss'

export type TextFieldPropsType = {
  error?: null | string
  label?: string
  password?: boolean
  search?: boolean
} & ComponentPropsWithoutRef<'input'>
export const TextField = forwardRef<HTMLInputElement, TextFieldPropsType>(
  ({ error, label, password, search, ...rest }, ref) => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    return (
      <div className={s.textField}>
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
            type={passwordVisible ? 'password' : 'text'}
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
