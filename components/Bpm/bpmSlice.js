import {
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  bpm: 60,
};

const bpmSlice = createSlice({
  name: 'bpm',
  initialState,
  reducers: {
    setGlobalBpm: (state, action) => {
      state.bpm = action.payload;
    }
  },
});

export const { setGlobalBpm } = bpmSlice.actions;
export default bpmSlice.reducer;