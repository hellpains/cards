import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupPropsType } from '@/components'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<RadioGroupPropsType, 'setValue' | 'value'>
export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  ...rest
}: Props<T>) => {
  const { field } = useController({
    control,
    name,
  })

  return <RadioGroup {...rest} {...field} />
}
