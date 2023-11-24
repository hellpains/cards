import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
import { useDebounce } from '@/utils/hooks'

import s from './decks-page.module.scss'

export const DecksPage = () => {
  const navigate = useNavigate()
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [deckToDeleteId, setDeckToDeleteId] = useState<null | string>(null)
  const [deckToEditId, setDeckToEditId] = useState<null | string>(null)
  const showEditModal = !!deckToEditId
  const { data: me } = useMeQuery()
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(state => state.decks.currentPage)
  const currentTab = useAppSelector<TabType>(state => state.decks.currentTab)
  const search = useAppSelector(state => state.decks.search)
  const minCards = useAppSelector(state => state.decks.minCards)
  const perPage = useAppSelector(state => state.decks.perPage)
  const maxCards = useAppSelector(state => state.decks.maxCards)
  const setPage = (page: number) => dispatch(decksSlice.actions.setCurrentPage(page))
  const setMinCards = (minCards: number) => dispatch(decksSlice.actions.setMinCards(minCards))
  const setMaxCards = (maxCards: number) => dispatch(decksSlice.actions.setMaxCards(maxCards))
  const setPerPage = (perPage: number) => dispatch(decksSlice.actions.setPerPage(perPage))
  const onSearch = (value: string) => {
    dispatch(decksSlice.actions.setSearch(value))
  }
  const debouncedSearch = useDebounce(search, 500)
  const { currentData: currentDecksData, data: decksData } = useGetDecksQuery({
    authorId: currentTab === 'myDecks' ? me?.id : undefined,
    currentPage: currentPage,
    itemsPerPage: perPage,
    maxCardsCount: maxCards,
    minCardsCount: minCards,
    name: debouncedSearch,
  })
  const [rangeValue, setRangeValue] = useState([minCards, maxCards])

  const [createDeck] = useCreateDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()
  const openCreateModal = () => setShowCreateModal(true)
  const setSlider = (value: number[]) => {
    setMinCards(value[0])
    setMaxCards(value[1])
  }

  const setCurrentTabHandler = (value: TabType) => {
    dispatch(decksSlice.actions.setCurrentTab(value))
  }
  const learnDeck = (deckId: string) => {
    navigate(`/decks/${deckId}`)
  }

  const decks = currentDecksData && decksData
  const showConfirmDeleteModal = !!deckToDeleteId
  const deckToDeleteName = decks?.items?.find(deck => deck.id === deckToDeleteId)?.name
  const deckToEdit = decks?.items?.find(deck => deck.id === deckToEditId)

  let decksForTable = decks?.items

  if (currentTab === 'myDecks') {
    decksForTable = decksForTable?.filter(d => d.author.id === me?.id)
  }
  const clearFilter = () => {
    setRangeValue([0])
    dispatch(decksSlice.actions.resetFilters())
  }

  if (!decksData) {
    return <Loader />
  }

  return (
    <div className={s.decks}>
      <Header />

      <div className={s.container}>
        <div className={s.decks__header}>
          <Typography variant={'large'}>Decks List</Typography>
          <Button onClick={openCreateModal}>Add new deck</Button>
          <CreateDeckModal
            onCancel={() => setShowCreateModal(false)}
            onConfirm={createDeck}
            onOpenChange={setShowCreateModal}
            open={showCreateModal}
          />
        </div>
        <div className={s.decks__filter}>
          <TextField
            className={s.input}
            onResetValue={() => onSearch('')}
            onValueChange={onSearch}
            placeholder={'Search'}
            search
            value={search}
          />
          <TabSwitcher
            changeValue={setCurrentTabHandler}
            label={'Show packs deck'}
            value={currentTab}
          >
            <TabTrigger title={'My Decks'} value={'myDecks'} />
            <TabTrigger title={'All Decks'} value={'allDecks'} />
          </TabSwitcher>

          <Slider
            label={'Slider'}
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
          decks={decksForTable}
          learnDeck={learnDeck}
          onDeleteClick={setDeckToDeleteId}
          onEditClick={setDeckToEditId}
        />
        {decksData?.pagination.totalItems > 5 && (
          <Pagination
            limit={perPage}
            page={currentPage}
            setLimit={setPerPage}
            setPage={setPage}
            totalPage={decksData?.pagination?.totalPages}
          />
        )}
        {/*<Typography className={s.noContent} variant={'body1'}>*/}
        {/*  No content with these terms...*/}
        {/*</Typography>*/}
      </div>
      <div>
        <UpdateDeckModal
          defaultValues={deckToEdit}
          key={deckToEditId}
          onCancel={() => setDeckToEditId(null)}
          onConfirm={(data: { isPrivate: boolean; name: string }) => {
            if (!deckToEditId) {
              return
            }
            updateDeck({ id: deckToEditId, ...data })
          }}
          onOpenChange={() => setDeckToEditId(null)}
          open={showEditModal}
        />
        <DeleteDeckModal
          deckToDeleteName={deckToDeleteName}
          onConfirm={() => {
            deleteDeck(deckToDeleteId ?? '')
            setDeckToDeleteId(null)
          }}
          onOpenChange={() => setDeckToDeleteId(null)}
          open={showConfirmDeleteModal}
        />
      </div>
    </div>
  )
}
