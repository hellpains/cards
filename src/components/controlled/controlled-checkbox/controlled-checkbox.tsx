import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CheckBox } from '@/components'
import { CheckboxProps } from '@radix-ui/react-checkbox'
type Props<T extends FieldValues> = { label?: string } & UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'onCheckedChange'>
export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <CheckBox {...rest} checked={value} disabled={disabled} onCheckedChange={onChange} {...field} />
  )
}
