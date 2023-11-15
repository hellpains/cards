import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect } from 'react'

import { Typography } from '@/components'
import * as RadixSlider from '@radix-ui/react-slider'
import * as SliderPrimitive from '@radix-ui/react-slider'

import s from './slider.module.scss'

export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  Omit<ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'value'> & {
    label?: string
    value?: (number | undefined)[]
  }
>(({ className, label, max, min, onValueChange, value, ...props }, ref) => {
  useEffect(() => {
    if (value?.[1] === undefined || value?.[1] === null) {
      onValueChange?.([value?.[0] ?? 0, max ?? 0])
    }
  }, [max, value, onValueChange])

  return (
    <div className={s.slider}>
      <Typography as={'label'} className={s.label} variant={'body2'}>
        {label}
      </Typography>
      <div className={s.value}> {value?.[0]}</div>

      <RadixSlider.Root
        className={s.root}
        max={max}
        min={min}
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
