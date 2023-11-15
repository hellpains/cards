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

export const Default: Story = {
  args: {
    children: 'hello',
    defaultValue: 'all',
    disabled: false,
    label: 'Swither',
  },
}

// export const Disabled: Story = {
//   args: {
//     disabled: true,
//     tabs: tabs,
//   },
// }
