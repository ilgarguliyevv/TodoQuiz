import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slice/todoApp"
export const store = configureStore({
    reducer: { counter: counterReducer, },
})