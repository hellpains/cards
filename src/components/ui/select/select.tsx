import { ComponentPropsWithoutRef, FC, useState } from 'react'

import { ArrowDown, ArrowUp } from '@/assets'
import { Label } from '@/components/ui/label'
import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

export type SelectPropsType = {
  className?: string
  disabled?: boolean
  label?: string
  options?: { title: string; value: any }[]
  setValue: (value: any) => void
  value: any
} & ComponentPropsWithoutRef<'select'>

export const Select: FC<SelectPropsType> = ({
  className,
  disabled,
  label,
  options,
  setValue,
  value,
}) => {
  const itemSelect = options?.find(o => o.value === value)
  const [open, setOpen] = useState(false)

  const classNames = {
    container: clsx(s.container),
    content: clsx(s.content, disabled ? s.disabled : ''),
    item: clsx(s.item, className),
    trigger: clsx(s.trigger, disabled ? s.disabled : ''),
  }

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
      <RadixSelect.Trigger className={classNames.trigger} placeholder={'select'} value={value}>
        {label && <Label className={s.label} title={label} />}
        {itemSelect && itemSelect.title}
        <RadixSelect.Icon className={s.arrows}>
          {open ? <ArrowUp /> : <ArrowDown />}
        </RadixSelect.Icon>
        <span className={s.arrow}></span>
      </RadixSelect.Trigger>
      <RadixSelect.Content className={classNames.content}>
        {options &&
          options.map(o => {
            return (
              <RadixSelect.Item className={classNames.item} key={o.value} value={o.value}>
                {o.title}
              </RadixSelect.Item>
            )
          })}
      </RadixSelect.Content>
    </RadixSelect.Root>
  )
}
