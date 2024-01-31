import { configureStore } from '@reduxjs/toolkit'
import testReducer from '../features/Test/testSlice'


export const store = configureStore({
    reducer: {
        tests : testReducer,  
    },
})