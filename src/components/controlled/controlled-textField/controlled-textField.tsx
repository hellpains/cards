import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { TextField, TextFieldPropsType } from '@/components'

export type ControlledTextFieldPropsType<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<TextFieldPropsType, 'onChange' | 'value'>
export const ControlledTextField = <T extends FieldValues>(
  props: ControlledTextFieldPropsType<T>
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control: props.control,
    name: props.name,
  })

  return <TextField {...props} error={error?.message} {...field} />
}
