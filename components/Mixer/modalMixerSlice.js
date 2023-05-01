import {
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  globalTiming: 1,
  counter: 0
};

const modalMixerSlice = createSlice({
  name: 'modalMixer',
  initialState,
  reducers: {
    setGlobalTiming: (state, action) => {
      if (state.counter === 0) state.globalTiming = action.payload;
      if (state.counter < 1) state.counter++;
    }
  },
});

export const { setGlobalTiming } = modalMixerSlice.actions;
export default modalMixerSlice.reducer;