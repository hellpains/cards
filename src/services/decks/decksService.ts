import { CreateDeckBody, CreateDeckResponse, DecksResponse, GetDecksParams } from '@/services'
import { baseApi } from '@/services/base-api'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<CreateDeckBody, CreateDeckResponse>({
        invalidatesTags: ['Decks'],
        onQueryStarted: async (_, { dispatch, getCacheEntry, getState, queryFulfilled }) => {
          const data = getCacheEntry()
          const state = getState()

          decksService.util.resetApiState
          await queryFulfilled
        },
        query: body => ({
          body,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<any, string>({
        invalidatesTags: ['Decks'],
        query: id => ({
          method: 'DELETE',
          url: `v1/decks/${id}`,
        }),
      }),
      // }),
      getDecks: builder.query<DecksResponse, GetDecksParams>({
        providesTags: ['Decks'],
        query: params => {
          return {
            params,
            url: `v1/decks`,
          }
        },
      }),
      updateDeck: builder.mutation<any, any>({
        invalidatesTags: ['Decks'],
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
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksService
