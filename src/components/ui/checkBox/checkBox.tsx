import { Checked, Unchecked } from '@/assets'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './CheckBox.module.scss'

import { Typography } from '..'

type CheckBoxPropsType = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: string
  setChecked: (checked: boolean) => void
}
export const CheckBox = ({
  checked,
  className,
  disabled,
  label,
  setChecked,
}: CheckBoxPropsType) => {
  const classNames = {
    container: clsx(s.container, className),
    indicator: clsx(s.indicator, disabled ? s.disabled : ''),
    label: clsx(s.label, disabled ? s.disabled : ''),
    root: clsx(s.root),
  }

  return (
    <div className={classNames.container}>
      <RadixCheckbox.Root asChild>
        <Typography as={'label'} className={classNames.label} variant={'body2'}>
          <div className={s.button}>
            <RadixCheckbox.Root
              checked={checked}
              className={classNames.root}
              disabled={disabled}
              onCheckedChange={setChecked}
            >
              <RadixCheckbox.Indicator className={classNames.indicator} forceMount>
                {checked ? <Checked /> : <Unchecked />}
              </RadixCheckbox.Indicator>
            </RadixCheckbox.Root>
          </div>
          {label}
        </Typography>
      </RadixCheckbox.Root>
    </div>
  )
}
