import type { Meta, StoryObj } from '@storybook/react'

// import { MemoryRouter } from 'react-router-dom'

import { SignIn } from './'

const meta = {
  component: SignIn,
  // decorators: [
  //   Story => (
  //     <MemoryRouter initialEntries={['/']}>
  //       <Story />
  //     </MemoryRouter>
  //   ),
  // ],
  tags: ['autodocs'],
  title: 'Auth/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.info(data),
  },
}
