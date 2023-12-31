import type { Meta, StoryObj } from '@storybook/react'

// import { MemoryRouter } from 'react-router-dom'

import { SignUp } from './sign-up'

const meta = {
  component: SignUp,
  // decorators: [
  //   Story => (
  //     <MemoryRouter initialEntries={['/']}>
  //       <Story />
  //     </MemoryRouter>
  //   ),
  // ],
  tags: ['autodocs'],
  title: 'Auth/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.info(data),
  },
}
