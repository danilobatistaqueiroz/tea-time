import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    value: [["08:00","primeiro"],["10:00","segundo"]],
  },
  reducers: {
    add: (state,action) => {
      state.value = [...state.value,action.payload]
    },
  }
})

export const selectValue = (state) => state?.value

export const { add } = itemSlice.actions

export default itemSlice.reducer