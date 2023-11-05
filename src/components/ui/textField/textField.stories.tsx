import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  argTypes: {},
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Input',
  },
}

export const Password: Story = {
  args: {
    label: 'Input',
    password: true,
  },
}
export const Search: Story = {
  args: {
    label: 'Input',
    search: true,
  },
}

export const Error: Story = {
  args: {
    error: 'Error!',
    label: 'Input',
    password: true,
    search: false,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
    password: true,
    search: false,
  },
}
