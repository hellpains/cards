import s from './image.module.scss'

type imageProps = {
  className?: string
  height?: number
  src?: string
  width?: number
}
export const Image = ({ className, height, src, width }: imageProps) => {
  return <img className={`${s.img} ${className}`} height={height} src={src} width={width} />
}
