import { NavLink, useParams } from 'react-router-dom'

import { BigArrowLeft } from '@/assets'
import { Button, Header, TextField, Typography } from '@/components'
import { Deck } from '@/components/deck/deck'
import { useGetCardsByDeckQuery } from '@/services'
import { useMeQuery } from '@/services/auth'

import s from './deck-page.module.scss'

// type DeckPageProps = {}
export const DeckPage = () => {
  const { data: me } = useMeQuery()
  const params = useParams()
  const deckId = params.deckId
  const { data: cards } = useGetCardsByDeckQuery(deckId ?? '')

  console.log(me?.id === cards?.userId)
  console.log(me?.id)
  console.log(cards)
  // console.log(cards?.userId)
  // console.log(cards)
  // console.log(deckId)

  return (
    <div className={s.cards}>
      <Header />
      <div className={s.container}>
        <Button as={NavLink} className={s.backLink} to={'/'} variant={'link'}>
          <BigArrowLeft /> Back to Decks List
        </Button>
        <div className={s.header}>
          <Typography variant={'large'}>Friends Deck</Typography>
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
    </div>
  )
}
