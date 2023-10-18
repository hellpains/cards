import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from './'

const meta = {
  argTypes: {},
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

const tabs = [
  { title: 'Switcher', value: '1' },
  { title: 'Switcher', value: '2' },
  { title: 'Switcher', value: '3' },
  { title: 'Switcher', value: '4' },
  { title: 'Switcher', value: '5' },
]

export const Default: Story = {
  args: {
    disabled: false,
    tabs: tabs,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    tabs: tabs,
  },
}
