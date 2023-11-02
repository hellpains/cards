import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './radioGroup'

const meta = {
  argTypes: {},

  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const radioOptions = [
  { title: 'value1', value: 'value1' },
  { title: 'value2', value: 'value2' },
  { title: 'value3', value: 'value3' },
]

export const Default: Story = {
  args: {
    options: radioOptions,
    value: 'value2',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options: radioOptions,
    value: 'value1',
  },
}
