import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './'

const meta = {
  argTypes: {},
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { title: 'Check-box', value: '1' },
  { title: 'Check-box', value: '2' },
]

export const Default: Story = {
  args: {
    options: options,
    value: '2',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options: options,
    value: '2',
  },
}
