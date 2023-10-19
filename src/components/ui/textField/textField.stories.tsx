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
    password: false,
    placeholder: 'Input',
    search: true,
    value: 'Primary Input',
  },
}

export const Password: Story = {
  args: {
    password: true,
    placeholder: 'Input',
    value: 'Password Input',
  },
}
export const Search: Story = {
  args: {
    placeholder: 'Input',
    search: true,
    value: 'Search Input',
  },
}

export const Error: Story = {
  args: {
    error: 'Error!',
    password: true,
    placeholder: 'Input',
    search: false,
    value: 'Input',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    password: true,
    placeholder: 'Input',
    search: false,
    value: 'Input',
  },
}
