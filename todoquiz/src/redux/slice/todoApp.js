import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        addTodo: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload)
        },
    },
})

export const { increment, decrement, incrementByAmount, addTodo } = counterSlice.actions

export default counterSlice.reducer