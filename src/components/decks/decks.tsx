import { Edit, Play, Trash } from '@/assets'
import { Column, Table, TableBody, TableCell, TableHeader, TableRow } from '@/components'
import { Deck, TabType } from '@/services/decks/decks.types'
import { formatDate } from '@/utils'

import s from './decks.module.scss'

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

type DecksProps = {
  authorId?: string
  currentTab: TabType
  decks: Deck[]
  learnDeck: (deckId: string) => void
  onDeleteClick: (id: string) => void
  onEditClick: (id: string) => void
}
export const DecksTable = ({
  authorId,
  currentTab,
  decks,
  learnDeck,
  onDeleteClick,
  onEditClick,
}: DecksProps) => {
  const handleEditClick = (id: string) => () => onEditClick(id)
  const handleDeleteClick = (id: string) => () => onDeleteClick(id)
  const handleLearnDeck = (deckId: string) => () => learnDeck(deckId)

  // const handleDeleteClick = (id: string) => () => onDeleteClick(id)
  let myDecks = decks

  if (currentTab === 'myDecks') {
    myDecks = decks.filter(d => d.author.id === authorId)
  }

  return (
    <Table className={s.decks}>
      <TableHeader columns={columns} />
      <TableBody>
        {myDecks?.map(deck => {
          return (
            <TableRow key={deck.id}>
              <TableCell>{deck.name}</TableCell>
              <TableCell>{deck.cardsCount}</TableCell>
              <TableCell>{formatDate(deck.updated)}</TableCell>
              <TableCell>{deck.author.name}</TableCell>
              <TableCell className={s.actions}>
                <button onClick={handleLearnDeck(deck.id)}>
                  <Play />
                </button>
                {deck.author.id === authorId && (
                  <>
                    <button onClick={handleEditClick(deck.id)}>
                      <Edit />
                    </button>
                    <button onClick={handleDeleteClick(deck.id)}>
                      <Trash />
                    </button>
                  </>
                )}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
