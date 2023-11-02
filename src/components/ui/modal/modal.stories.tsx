import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './'

const meta = {
  argTypes: {},
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Header: Story = {
  args: {
    children: 'open',
    open: false,
    title: 'open',
  },
}
