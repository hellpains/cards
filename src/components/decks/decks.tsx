import { NavLink } from 'react-router-dom'

import { Edit, Play, Trash } from '@/assets'
import {
  Button,
  Column,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Typography,
} from '@/components'
import { Deck } from '@/services/decks/decks.types'
import { formatDate } from '@/utils'

import s from './decks.module.scss'

type DecksProps = {
  authorId?: string
  decks: Deck[] | undefined
  learnDeck: (deckId: string) => void
  onDeleteClick: (id: string) => void
  onEditClick: (id: string) => void
}
export const DecksTable = ({
  authorId,
  decks,
  learnDeck,
  onDeleteClick,
  onEditClick,
}: DecksProps) => {
  const handleEditClick = (id: string) => () => onEditClick(id)
  const handleDeleteClick = (id: string) => () => onDeleteClick(id)
  const handleLearnDeck = (deckId: string) => () => learnDeck(deckId)

  return (
    <Table className={s.decks}>
      {!decks?.length ? (
        <Typography variant={'h1'}>У вас нет карточек</Typography>
      ) : (
        <>
          <TableHeader columns={columns} />
          <TableBody>
            {decks?.map(deck => {
              return (
                <TableRow key={deck.id}>
                  <TableCell>
                    <NavLink className={s.deckName} to={`/decks/${deck.id}`}>
                      {deck.name}
                    </NavLink>
                  </TableCell>
                  <TableCell>{deck.cardsCount}</TableCell>
                  <TableCell>{formatDate(deck.updated)}</TableCell>
                  <TableCell>{deck.author.name}</TableCell>
                  <TableCell className={s.actions}>
                    <Button
                      className={!deck.cardsCount ? s.disabledLearnButton : ''}
                      disabled={!deck.cardsCount}
                      onClick={handleLearnDeck(deck.id)}
                      variant={'icon'}
                    >
                      <Play />
                    </Button>
                    {deck.author.id === authorId && (
                      <>
                        <Button onClick={handleEditClick(deck.id)} variant={'icon'}>
                          <Edit />
                        </Button>
                        <Button onClick={handleDeleteClick(deck.id)} variant={'icon'}>
                          <Trash />
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </>
      )}
    </Table>
  )
}
const columns: Column[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'author',
    title: 'Created By',
  },
  {
    key: 'actions',
    title: '',
  },
]
