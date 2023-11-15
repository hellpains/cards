export type DecksResponse = {
  items: Deck[]
  maxCardsCount: number
  pagination: Pagination
}
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type Author = {
  id: string
  name: string
}
export type Deck = {
  author: Author
  cardsCount: number
  cover?: any
  created: string
  id: string
  isBlocked?: any
  isDeleted?: any
  isPrivate: boolean
  name: string
  rating: number
  shots: number
  updated: string
  userId: string
}

export type CreateDeckBody = {
  cover?: any
  isPrivate?: boolean
  name?: string
}
export type CreateDeckResponse = {
  author: Author
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  rating: number
  shots: number
  updated: string
  userId: string
}

export type GetDecksParams = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: any
  minCardsCount?: any
  name?: string
  orderBy?: 'asc' | 'desc'
}

export type TabType = 'allDecks' | 'myDecks'
