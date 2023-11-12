import { useState } from 'react'

import { Trash } from '@/assets'
import {
  Button,
  CreateDeckModal,
  DecksTable,
  DeleteDeckModal,
  Header,
  Pagination,
  Slider,
  TabSwitcher,
  TabTrigger,
  TextField,
  Typography,
  UpdateDeckModal,
} from '@/components'
import { Loader } from '@/components/ui/loader/loader'
import {
  TabType,
  useAppDispatch,
  useAppSelector,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services'
import { useMeQuery } from '@/services/auth'
import { decksSlice } from '@/services/decks/decks.slice'
import { debounce } from '@/utils'

import s from './decks-page.module.scss'

export const DecksPage = () => {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [deckToDeleteId, setDeckToDeleteId] = useState<null | string>(null)
  const [deckToEditId, setDeckToEditId] = useState<null | string>(null)
  const showEditModal = !!deckToEditId
  const { data: me } = useMeQuery()
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector<any>(state => state.decks.currentPage)
  const perPage = useAppSelector<any>(state => state.decks.perPage)
  const currentTab = useAppSelector<TabType>(state => state.decks.currentTab)
  const search = useAppSelector<any>(state => state.decks.search)
  const minCards = useAppSelector<any>(state => state.decks.minCards)
  const maxCards = useAppSelector<any>(state => state.decks.maxCards)
  const setPage = (page: number) => dispatch(decksSlice.actions.setPerPage(page))
  const setMinCards = (minCards: number) => dispatch(decksSlice.actions.setMinCards(minCards))
  const setMaxCards = (maxCards: number) => dispatch(decksSlice.actions.setMaxCards(maxCards))
  const [rangeValue, setRangeValue] = useState([minCards, maxCards])
  let onSearch = (search: string) => {
    dispatch(decksSlice.actions.setSearch(search))
  }

  const [createDeck] = useCreateDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()

  onSearch = debounce(onSearch, 500)
  const setSlider = (value: number[]) => {
    setMinCards(value[0])
    setMaxCards(value[1])
  }
  const clearFilter = () => {
    dispatch(decksSlice.actions.resetFilters())
  }
  const setCurrentTabHandler = (value: TabType) => {
    dispatch(decksSlice.actions.setCurrentTab(value))
  }

  const { data: decks } = useGetDecksQuery({
    currentPage: currentPage,
    itemsPerPage: perPage,
    maxCardsCount: maxCards,
    minCardsCount: minCards,
    name: search,
  })
  const showConfirmDeleteModal = !!deckToDeleteId
  const deckToDeleteName = decks?.items?.find(deck => deck.id === deckToDeleteId)?.name
  const deckToEdit = decks?.items?.find(deck => deck.id === deckToEditId)

  if (!decks) {
    return <Loader />
  }

  return (
    <div className={s.decks}>
      <Header />

      <div className={s.container}>
        <div className={s.decks__header}>
          <Typography variant={'large'}>Decks List</Typography>
          <CreateDeckModal
            onConfirm={createDeck}
            open={showCreateModal}
            setOpen={setShowCreateModal}
          />
        </div>
        <div className={s.decks__filter}>
          <TextField className={s.input} onValueChange={onSearch} placeholder={'Search'} search />
          <TabSwitcher
            changeValue={setCurrentTabHandler}
            defaultValue={'allDecks'}
            label={'Show packs cards'}
          >
            <TabTrigger title={'My Decks'} value={'myDecks'} />
            <TabTrigger title={'All Decks'} value={'allDecks'} />
          </TabSwitcher>

          <Slider
            max={decks?.maxCardsCount}
            min={0}
            onValueChange={setRangeValue}
            onValueCommit={setSlider}
            value={rangeValue}
          />
          <Button className={s.button} onClick={clearFilter} variant={'secondary'}>
            <Trash /> Clear Filter
          </Button>
        </div>

        <DecksTable
          authorId={me?.id}
          currentTab={currentTab}
          decks={decks?.items}
          onDeleteClick={setDeckToDeleteId}
          onEditClick={setDeckToEditId}
        />
        <Pagination
          limit={perPage}
          page={currentPage}
          setPage={setPage}
          totalPage={decks.pagination.totalPages}
        />
      </div>
      <div>
        <UpdateDeckModal
          defaultValues={deckToEdit}
          dontShowTrigger
          key={deckToEditId}
          onConfirm={(data: any) => {
            if (!deckToEditId) {
              return
            }
            updateDeck({ id: deckToEditId, ...data })
          }}
          open={showEditModal}
          setOpen={() => setDeckToEditId(null)}
        />
        <DeleteDeckModal
          deckToDeleteName={deckToDeleteName}
          dontShowTrigger
          onConfirm={() => {
            deleteDeck(deckToDeleteId ?? '')
            setDeckToDeleteId(null)
          }}
          open={showConfirmDeleteModal}
          setOpen={() => setDeckToDeleteId(null)}
        />
      </div>
    </div>
  )
}
