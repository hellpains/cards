import { CreateDeckBody, Deck, DecksResponse, GetDecksParams, RootState } from '@/services'
import { baseApi } from '@/services/base-api'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, CreateDeckBody>({
        invalidatesTags: ['Decks'],
        onQueryStarted: async (_, { dispatch, getState, queryFulfilled }) => {
          const state = getState() as RootState
          const perPage = state.decks.perPage
          const currentPage = state.decks.currentPage
          const minCards = state.decks.minCards
          const maxCards = state.decks.maxCards
          const search = state.decks.search

          const res = await queryFulfilled

          dispatch(
            decksService.util.updateQueryData(
              `getDecks`,
              {
                currentPage,
                itemsPerPage: perPage,
                maxCardsCount: maxCards,
                minCardsCount: minCards,
                name: search,
              },
              draft => {
                draft.items.unshift(res.data)
              }
            )
          )
        },
        query: body => ({
          body,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<any, any>({
        invalidatesTags: ['Decks'],
        query: id => ({
          method: 'DELETE',
          url: `v1/decks/${id}`,
        }),
      }),
      getCardsByDeck: builder.query<any, string>({
        query: id => `v1/decks/${id}/cards`,
      }),
      getDecks: builder.query<DecksResponse, GetDecksParams>({
        providesTags: ['Decks'],
        query: params => {
          return {
            params,
            url: `v1/decks`,
          }
        },
      }),
      updateDeck: builder.mutation<Deck, { body: CreateDeckBody; id: string }>({
        invalidatesTags: ['Decks'],
        onQueryStarted: async ({ id, ...body }, { dispatch, getState, queryFulfilled }) => {
          const state = getState() as RootState
          const perPage = state.decks.perPage
          const currentPage = state.decks.currentPage
          const minCards = state.decks.minCards
          const maxCards = state.decks.maxCards
          const search = state.decks.search

          dispatch(
            decksService.util.updateQueryData(
              `getDecks`,
              {
                currentPage,
                itemsPerPage: perPage,
                maxCardsCount: maxCards,
                minCardsCount: minCards,
                name: search,
              },
              draft => {
                const deck = draft.items.find(deck => deck.id === id)

                if (deck) {
                  Object.assign(deck, {
                    ...deck,
                    ...body,
                  })
                }
              }
            )
          )

          await queryFulfilled
        },
        query: ({ id, ...body }) => ({
          body,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetCardsByDeckQuery,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksService
