import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components'
import * as RadixSlider from '@radix-ui/react-slider'
import * as SliderPrimitive from '@radix-ui/react-slider'

import s from './slider.module.scss'

// type SliderPropsType = {
//   label?: string
//   max: number
//   min: number
//   setValue: (value: number[]) => void
//   value: number[]
// }
export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  Omit<ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'value'> & {
    value?: (number | undefined)[]
  }
>(({ className, max, onValueChange, value, ...props }, ref) => {
  return (
    <div className={s.slider}>
      <Typography as={'label'} className={s.label} variant={'body2'}>
        {/*{label}*/}
      </Typography>
      <div className={s.value}> {value?.[0]}</div>

      <RadixSlider.Root
        className={s.root}
        max={max}
        onValueChange={onValueChange}
        ref={ref}
        {...props}
        value={[value?.[0] ?? 0, value?.[1] ?? max ?? 0]}
      >
        <RadixSlider.Track className={s.track}>
          <RadixSlider.Range className={s.range} />
        </RadixSlider.Track>
        <RadixSlider.Thumb className={s.thumb} />
        <RadixSlider.Thumb className={s.thumb} />
      </RadixSlider.Root>

      <div className={s.value}>{value?.[1]}</div>
    </div>
  )
})
