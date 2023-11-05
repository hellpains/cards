import type { Meta, StoryObj } from '@storybook/react'

// import { MemoryRouter } from 'react-router-dom'

import { CheckEmail } from './'

const meta = {
  component: CheckEmail,
  // decorators: [
  //   Story => (
  //     <MemoryRouter initialEntries={['/']}>
  //       <Story />
  //     </MemoryRouter>
  //   ),
  // ],
  tags: ['autodocs'],
  title: 'Auth/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
