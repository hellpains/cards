import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './'

const meta = {
  argTypes: {},
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const IsAuth: Story = {
  args: {
    isAuth: true,
  },
}

export const IsNotAuth: Story = {
  args: {
    isAuth: false,
  },
}
