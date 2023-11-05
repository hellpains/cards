import type { Meta, StoryObj } from '@storybook/react'

// import { MemoryRouter } from 'react-router-dom'

import { ForgotPassword } from './'

const meta = {
  component: ForgotPassword,
  // decorators: [
  //   Story => (
  //     <MemoryRouter initialEntries={['/']}>
  //       <Story />
  //     </MemoryRouter>
  //   ),
  // ],
  tags: ['autodocs'],
  title: 'Auth/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.info(data),
  },
}
