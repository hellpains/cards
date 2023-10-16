import { FC, useState } from 'react'

import { ArrowDown, ArrowUp } from '@/assets'
import { Label } from '@/components/ui/label'
import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

export type SelectPropsType = {
  className?: string
  disabled?: boolean
  options?: { title: string; value: any }[]
  setValue?: (value: string) => void
  value?: string
}

export const Select: FC<SelectPropsType> = ({ className, disabled, options, setValue, value }) => {
  const itemSelect = options?.find(o => o.value === value)
  const [open, setOpen] = useState(false)

  const classNames = {
    container: clsx(s.container, className),
    trigger: clsx(s.trigger, disabled ? s.disabled : ''),
  }

  return (
    <div className={s.container}>
      <RadixSelect.Root
        disabled={disabled}
        onOpenChange={() => {
          setOpen(prev => !prev)
        }}
        onValueChange={setValue}
        open={open}
        value={value}
      >
        <RadixSelect.Trigger className={classNames.trigger} placeholder={'select'} value={value}>
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
    </div>
  )
}
