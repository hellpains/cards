import { Column, Table, TableBody, TableCell, TableHeader, TableRow } from '@/components'
import { GetCardsResponse } from '@/services/cards/cards.types'

import s from './deck.module.scss'

const columns: Column[] = [
  {
    key: 'question',
    title: 'Question',
  },
  {
    key: 'answer',
    title: 'Answer',
  },
  {
    key: 'lastUpdated',
    title: 'Last Updated',
  },
  {
    key: 'grade',
    title: 'Grade',
  },
]

type DeckProps = {
  cards: GetCardsResponse[]
}
export const Deck = ({ cards }: DeckProps) => {
  return (
    <Table className={s.deck}>
      <TableHeader columns={columns} />
      <TableBody>
        {cards.map(card => {
          return (
            <TableRow key={card.id}>
              <TableCell>{card.question}</TableCell>
              <TableCell>{card.answer}</TableCell>
              <TableCell>{card.updated}</TableCell>
              <TableCell>{card.rating}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
