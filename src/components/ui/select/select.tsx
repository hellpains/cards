import { ComponentPropsWithoutRef, useState } from 'react'

import { ArrowDown, ArrowUp } from '@/assets'
import { Label } from '@/components/ui/label'
import * as RadixSelect from '@radix-ui/react-select'

import s from './select.module.scss'

export type SelectPropsType = {
  className?: string
  disabled?: boolean
  options?: { title: string; value: any }[]
  setValue?: (value: string) => void
  value?: string
} & ComponentPropsWithoutRef<'select'>

export const Select = (props: SelectPropsType) => {
  const { className, disabled, options, setValue, value, ...rest } = props
  const itemSelect = options?.find(o => o.value === value)
  const [open, setOpen] = useState(false)

  return (
    <RadixSelect.Root
      disabled={disabled}
      onOpenChange={() => {
        setOpen(prev => !prev)
      }}
      onValueChange={setValue}
      open={open}
      value={value}
    >
      <RadixSelect.Trigger
        className={`${s.trigger} ${disabled ? s.disabled : ''}`}
        placeholder={'select'}
        value={value}
      >
        <Label className={s.label} title={'Check-box'} />
        {itemSelect && itemSelect.title}
        <RadixSelect.Icon className={s.arrows}>
          {open ? <ArrowUp /> : <ArrowDown />}
        </RadixSelect.Icon>
        <span className={s.arrow}></span>
      </RadixSelect.Trigger>
      <RadixSelect.Content className={`${s.content} ${disabled ? s.disabled : ''}`}>
        {options &&
          options.map(o => {
            return (
              <RadixSelect.Item className={s.item} key={o.value} value={o.value}>
                {o.title}
              </RadixSelect.Item>
            )
          })}
      </RadixSelect.Content>
    </RadixSelect.Root>
  )
}
