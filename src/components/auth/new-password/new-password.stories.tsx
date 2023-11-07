import type { Meta, StoryObj } from '@storybook/react'

// import { MemoryRouter } from 'react-router-dom'

import { NewPassword } from './'

const meta = {
  component: NewPassword,
  // decorators: [
  //   Story => (
  //     <MemoryRouter initialEntries={['/']}>
  //       <Story />
  //     </MemoryRouter>
  //   ),
  // ],
  tags: ['autodocs'],
  title: 'Auth/NewPassword',
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.info(data),
  },
}
