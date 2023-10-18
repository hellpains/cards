import { ReactNode } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

export type TabSwitcherPropsType = {
  children?: ReactNode
  disabled?: boolean
  tabs: { title: string; value: string }[]
}

export const TabSwitcher = (props: TabSwitcherPropsType) => {
  const { children, disabled, tabs } = props

  return (
    <Tabs.Root defaultValue={'2'}>
      <Tabs.List className={s.list}>
        {tabs.map(tab => {
          return (
            <Tabs.Trigger className={s.item} disabled={disabled} key={tab.value} value={tab.value}>
              {tab.title}
            </Tabs.Trigger>
          )
        })}
      </Tabs.List>
      {children}
    </Tabs.Root>
  )
}
