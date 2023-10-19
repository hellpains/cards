import { useState } from 'react'

import { Close, ClosedEye, Eye, Search } from '@/assets'
import { Label } from '@/components'
import { clsx } from 'clsx'

import s from './textField.module.scss'

type TextFieldPropsType = {
  disabled?: boolean
  error?: null | string
  password?: boolean
  placeholder?: string
  search?: boolean
  setValue?: (value: string) => void
  value?: string
}
export const TextField = (props: TextFieldPropsType) => {
  const { disabled, error, password, placeholder, search, setValue, value } = props
  const [passwordVisible, setPasswordVisible] = useState(false)

  const classNames = {
    close: clsx(s.close, disabled ? s.closeDisabled : ''),
    eye: clsx(s.eye, disabled ? s.eyeDisabled : ''),
    input: clsx(
      `${search ? s.searchInput : ''} ${password ? s.passwordInput : ''} ${error ? s.error : ''}`
    ),
    search: clsx(s.search, disabled ? s.searchDisabled : ''),
  }

  return (
    <div className={s.textField}>
      <Label className={s.label} title={'Input'} />
      <div className={s.inputBox}>
        {search && (
          <div className={classNames.search}>
            <Search />
          </div>
        )}
        <input
          className={classNames.input}
          disabled={disabled}
          onChange={e => setValue && setValue(e.currentTarget.value)}
          placeholder={placeholder}
          type={passwordVisible ? 'password' : 'text'}
          value={value}
        />
        {password && (
          <div
            className={classNames.eye}
            onClick={() => {
              !disabled && setPasswordVisible(prev => !prev)
            }}
          >
            {passwordVisible ? <Eye /> : <ClosedEye />}
          </div>
        )}
        {search && !!value?.length && (
          <div
            className={classNames.close}
            onClick={() => {
              setValue && setValue('')
            }}
          >
            <Close />
          </div>
        )}
        {error && <Label className={s.error} title={error} />}
      </div>
    </div>
  )
}
