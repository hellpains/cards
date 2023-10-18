import { useState } from 'react'

import { Close, ClosedEye, Eye, Search } from '@/assets'
import { Label } from '@/components'

import s from './textField.module.scss'

type TextFieldPropsType = {
  error?: null | string
  password?: boolean
  placeholder?: string
  search?: boolean
  setValue?: (value: string) => void
  value?: string
}
export const TextField = (props: TextFieldPropsType) => {
  const { error, password, placeholder, search, setValue, value } = props
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <div className={s.textField}>
      <Label className={s.label} title={'Input'} />
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
          onChange={e => setValue && setValue(e.currentTarget.value)}
          placeholder={placeholder}
          type={passwordVisible ? 'password' : 'text'}
          value={value}
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
        {search && !!value?.length && (
          <div
            className={s.close}
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
