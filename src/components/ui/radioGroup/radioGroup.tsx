import { RadioButtonChecked, RadioButtonUnchecked } from '@/assets'
import { Typography } from '@/components/ui/typography'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

type RadioGroupPropsType = {
  disabled?: boolean
  options?: { title: string; value: string }[]
  setValue?: (value: string) => void
  value?: string
}
export const RadioGroup = (props: RadioGroupPropsType) => {
  const { disabled, options, setValue, value } = props

  return (
    <RadioGroupRadix.Root
      className={s.radioGroupRoot}
      disabled={disabled}
      onValueChange={setValue}
      value={value}
    >
      {options?.map(o => {
        return (
          <div className={s.radio} key={o.value}>
            <RadioGroupRadix.Item className={s.item} key={o.value} value={o.value}>
              <RadioGroupRadix.Indicator className={s.indicator} forceMount>
                {o.value === value ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
              </RadioGroupRadix.Indicator>
            </RadioGroupRadix.Item>
            <Typography as={'label'} className={s.label}>
              {o.title}
            </Typography>
          </div>
        )
      })}
    </RadioGroupRadix.Root>
  )
}
