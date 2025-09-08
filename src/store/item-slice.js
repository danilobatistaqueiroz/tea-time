import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({
  name: 'items',
  initialState: {
    values: [],
    edit: {hour:'',description:''}
  },
  reducers: {
    add: (state,action) => {
      state.values = [...state.values,action.payload]
    },
    update: (state,action) => {
      state.values = state.values.map(v => {
        if(v[0]==state.edit.hour && v[1]==state.edit.description) {
          return action.payload
        } else {
          return v
        }
      });
      state.edit = {hour:'',description:''}
    },
    edit: (state,action) => {
      state.edit = {hour:action.payload[0],description:action.payload[1]}
    },
    remove: (state,action) => {
      state.values = state.values.filter(v => !(v[0]==action.payload[0]&&v[1]==action.payload[1]));
    },
    cancel: (state) => {
      state.edit = {hour:'',description:''}
    }
  }
})

export const selectValues = (state) => state.items.values
export const selectEdit = (state) => state.items.edit

export const { add, edit, update, remove, cancel } = itemSlice.actions

export default itemSlice.reducer