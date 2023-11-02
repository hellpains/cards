import { FC, useState } from 'react'

import { ArrowDown, ArrowUp } from '@/assets'
import { Label } from '@/components/ui/label'
import { Typography } from '@/components/ui/typography'
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
}

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
    content: clsx(s.content, disabled ? s.disabled : '', className),
    item: clsx(s.item),
    root: clsx(s.root, className),
    trigger: clsx(s.trigger, disabled ? s.disabled : ''),
  }

  return (
    <div className={classNames.root}>
      <RadixSelect.Root
        disabled={disabled}
        onOpenChange={() => setOpen(prev => !prev)}
        onValueChange={setValue}
        open={open}
        value={value}
      >
        <RadixSelect.Trigger className={classNames.trigger} value={value}>
          <div className={className}>
            {label && <Label className={s.label} title={label} />}
            <Typography variant={'body1'}>{itemSelect && itemSelect.title}</Typography>
            <RadixSelect.Icon className={s.arrows}>
              {open ? <ArrowUp /> : <ArrowDown />}
            </RadixSelect.Icon>{' '}
          </div>
        </RadixSelect.Trigger>

        <RadixSelect.Content className={classNames.content} position={'popper'}>
          {options &&
            options.map(o => {
              return (
                <RadixSelect.Item className={s.item} key={o.value} value={o.value}>
                  <Typography variant={'body1'}>{o.title}</Typography>
                </RadixSelect.Item>
              )
            })}
        </RadixSelect.Content>
      </RadixSelect.Root>
    </div>
  )
}
