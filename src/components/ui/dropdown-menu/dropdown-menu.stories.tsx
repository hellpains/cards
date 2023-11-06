import type { Meta, StoryObj } from '@storybook/react'

import { Image } from '@/components/ui/image'

import { DropdownMenu } from './'

const meta = {
  argTypes: {},
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Profile: Story = {
  args: {
    children: (
      <Image
        height={36}
        src={'https://sunmag.me/wp-content/uploads/2019/11/sunmag-005-small-avatar.png'}
        width={36}
      />
    ),
    email: 'rustam2004sadulaev@mail.ru',
    name: 'hellpains',
    variant: 'profile',
  },
}

export const Edit: Story = {
  args: {
    children: 'Edit',
    email: 'rustam2004sadulaev@mail.ru',
    name: 'hellpains',
    variant: 'edit',
  },
}
