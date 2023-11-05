import { ElementRef, forwardRef } from 'react'

import { Checked, Unchecked } from '@/assets'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './CheckBox.module.scss'

import { Typography } from '..'

type CheckBoxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: string
  onCheckedChange?: (value: boolean) => void
}
export const CheckBox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckBoxProps>(
  ({ checked, className, disabled, label, onCheckedChange }, ref) => {
    const classNames = {
      container: clsx(s.container, className),
      indicator: clsx(s.indicator, disabled ? s.disabled : ''),
      label: clsx(s.label, disabled ? s.disabled : ''),
      root: clsx(s.root),
    }

    return (
      <div className={classNames.container}>
        <Typography as={'label'} className={classNames.label} variant={'body2'}>
          <div className={s.button}>
            <RadixCheckbox.Root
              checked={checked}
              className={classNames.root}
              disabled={disabled}
              onCheckedChange={onCheckedChange}
              ref={ref}
            >
              <RadixCheckbox.Indicator className={classNames.indicator} forceMount>
                {checked ? <Checked /> : <Unchecked />}
              </RadixCheckbox.Indicator>
            </RadixCheckbox.Root>
          </div>
          {label}
        </Typography>
      </div>
    )
  }
)
