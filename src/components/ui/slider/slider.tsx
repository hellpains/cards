import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'
type SliderPropsType = {
  setValue: (value: number[]) => void
  value: number[]
}
export const Slider = (props: SliderPropsType) => {
  const { setValue, value } = props

  return (
    <div className={s.slider}>
      <div className={s.value}> {value[0]}</div>
      <RadixSlider.Root
        className={s.root}
        max={10}
        min={0}
        minStepsBetweenThumbs={1}
        onValueChange={setValue}
        value={[value[0], value[1]]}
      >
        <RadixSlider.Track className={s.track}>
          <RadixSlider.Range className={s.range} />
        </RadixSlider.Track>
        <RadixSlider.Thumb className={s.thumb} />
        <RadixSlider.Thumb className={s.thumb} />
      </RadixSlider.Root>
      <div className={s.value}>{value[1]}</div>
    </div>
  )
}
