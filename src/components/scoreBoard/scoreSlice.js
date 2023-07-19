import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "score",
  initialState: {
    value: 0,
  },
  reducers: {
    scoreIncrement: (state) => {
      state.value += 1;
    },
    scoreZero: (state) => {
      state.value = 0;
    },
  },
});

export const { scoreIncrement, scoreZero } = scoreSlice.actions;

export const highScoreSlice = createSlice({
  name: "highscore",
  initialState: {
    value: 0,
  },
  reducers: {
    highScoreIncrement: (state) => {
      state.value += 1;
    },
    setEqual: (state, action) => {
      console.log(action);
      state.value = action.payload;
    },
  },
});

export const { highScoreIncrement, setEqual } = highScoreSlice.actions;

export const levelSlice = createSlice({
  name: "level",
  initialState: {
    value: 1,
  },
  reducers: {
    levelIncrement: (state) => {
      state.value += 1;
    },
    levelZero: (state) => {
      state.value = 0;
    },
  },
});

export const { levelIncrement, levelZero } = levelSlice.actions;

export default combineReducers({
  levelSlice: levelSlice.reducer,
  scoreSlice: scoreSlice.reducer,
  highScoreSlice: highScoreSlice.reducer,
});
