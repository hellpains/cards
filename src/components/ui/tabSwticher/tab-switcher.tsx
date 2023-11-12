import { ReactNode } from 'react'

import { Typography } from '@/components'
import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

export type TabSwitcherPropsType = {
  changeValue: (value: any) => void
  children: ReactNode
  defaultValue: string
  disabled?: boolean
  label?: string
}

export const TabSwitcher = (props: TabSwitcherPropsType) => {
  const { changeValue, children, label } = props

  return (
    <Tabs.Root className={s.root} defaultValue={'allDecks'} onValueChange={changeValue}>
      <Typography as={'label'} className={s.label} variant={'body2'}>
        {label}
      </Typography>
      <Tabs.List className={s.list}>{children}</Tabs.List>
    </Tabs.Root>
  )
}

type TabTriggerProps = {
  title: string
  value: string
}

export const TabTrigger = ({ title, value }: TabTriggerProps) => {
  return (
    <Tabs.Trigger className={s.item} value={value}>
      {title}
    </Tabs.Trigger>
  )
}
