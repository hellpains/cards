import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from './'

const meta = {
  argTypes: {},

  component: CheckBox,
  tags: ['autodocs'],
  title: 'Components/CheckBox',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: true,
    label: 'check-box',
    setChecked: () => {},
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'check-box',
    setChecked: () => {},
  },
}
