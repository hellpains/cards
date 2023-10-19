type CardPropsType = {
  className?: string
}
import s from './card.module.scss'
export const Card = (props: CardPropsType) => {
  const { className } = props

  return <div className={`${s.card} ${className}`}></div>
}
