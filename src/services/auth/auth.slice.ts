import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { User } from './auth.types'

export const authSlice = createSlice({
  initialState: {
    avatar: '',
    create: '',
    email: '',
    id: '',
    isEmailVerified: false,
    name: '',
    update: '',
  } as unknown as User,
  name: 'auth',
  reducers: {
    setAvatar(state, action: PayloadAction<string>) {
      state.avatar = action.payload
    },

    setName(state, action: PayloadAction<string>) {
      state.name = action.payload
    },
  },
})
