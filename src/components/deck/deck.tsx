import { Column, Table, TableBody, TableCell, TableHeader, TableRow } from '@/components'
import { GetDeckResponse } from '@/services/deck/deck.types'
import { formatDate } from '@/utils'

import s from './deck.module.scss'

type DeckProps = {
  cards: GetDeckResponse[]
}
export const Deck = ({ cards }: DeckProps) => {
  return (
    <Table className={s.deck}>
      <TableHeader columns={columns} />
      <TableBody>
        {cards?.length
          ? cards?.map(card => {
              return (
                <TableRow key={card.id}>
                  <TableCell>{card.question}</TableCell>
                  <TableCell>{card.answer}</TableCell>
                  <TableCell>{formatDate(card.updated)}</TableCell>
                  <TableCell>{card.rating}</TableCell>
                </TableRow>
              )
            })
          : ''}
      </TableBody>
    </Table>
  )
}

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
