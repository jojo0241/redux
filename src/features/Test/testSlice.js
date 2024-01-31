import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  user: {},
  
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    addUser: (state, action) => {
      
      state.users.push(action.payload)
    },
    editUser: (state, action) => {

      state.user = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addUser, editUser } = testSlice.actions

export default testSlice.reducer