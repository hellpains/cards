import { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

import { BigArrowLeft, MoreVertical } from '@/assets'
import { Button, Header, TextField, Typography, UpdateDeckModal } from '@/components'
import { Deck } from '@/components/deck/deck'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import {
  useDeleteDeckMutation,
  useGetCardsByDeckQuery,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services'
import { useMeQuery } from '@/services/auth'

import s from './deck-page.module.scss'

export const DeckPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [deckToEditId, setDeckToEditId] = useState<null | string>(null)
  const showEditModal = !!deckToEditId
  const deckId = params?.deckId
  const { data: cards } = useGetCardsByDeckQuery(deckId ?? '')

  const { data: me } = useMeQuery()
  const { data } = useGetDecksQuery({})
  const deck = data?.items.find(deck => deck.id === deckId)
  const [handleDelete] = useDeleteDeckMutation()
  const [handleEdit] = useUpdateDeckMutation()

  const onDeckDelete = () => {
    handleDelete(deckId ?? '')
    navigate('/')
  }

  return (
    <div className={s.cards}>
      <Header />
      <div className={s.container}>
        <Button as={NavLink} className={s.backLink} to={'/'} variant={'link'}>
          <BigArrowLeft /> Back to Decks List
        </Button>
        <div className={s.header}>
          <div className={s.deckNameAndOptions}>
            <Typography variant={'large'}>{deck?.name}</Typography>
            {deck?.author.id === me?.id && (
              <DropdownMenu
                className={s.options}
                handleDelete={onDeckDelete}
                handleEdit={setDeckToEditId}
                handlePlay={() => {}}
              >
                <MoreVertical />
              </DropdownMenu>
            )}
          </div>
          {!cards?.items?.length ?? <Button>Learn to Pack</Button>}
        </div>

        {!cards?.items?.length ?? (
          <TextField className={s.input} placeholder={'Input search'} search />
        )}
        {cards?.items?.length ? (
          <Deck cards={cards?.items} />
        ) : (
          <div>
            <Typography as={'div'} className={s.text} variant={'body1'}>
              This pack is empty. Click add new card to fill this pack
            </Typography>
            <div className={s.button}>
              <Button>Add New Card</Button>
            </div>
          </div>
        )}
      </div>
      <UpdateDeckModal
        defaultValues={deck}
        dontShowTrigger
        key={deckId}
        onConfirm={(data: any) => {
          if (!deckId) {
            return
          }
          handleEdit({ id: deckId, ...data })
        }}
        open={showEditModal}
        setOpen={() => setDeckToEditId(null)}
      />
    </div>
  )
}
