import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },

    divisionByTwo: (state) => {
      state.value = Math.round(state.value / 2)
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount, divisionByTwo} = counterSlice.actions

export default counterSlice.reducer