import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value: 0
    },
    reducers:{
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export const makeStore = () => {
    return configureStore({
        reducer:{
            counter: counterSlice.reducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']