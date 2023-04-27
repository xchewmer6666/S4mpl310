import {
  createSlice,
} from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const initialState = {
  sumDelay: 0,
};

const modalMixerSlice = createSlice({
  name: 'modalMixer',
  initialState,
  reducers: {
    setGlobalDelay: (state, action) => {

      state.sumDelay += parseFloat(action.payload.timing) + parseFloat(action.payload.delay);
      console.log(state.sumDelay);
    }
  },
});

export const { setGlobalDelay } = modalMixerSlice.actions;
export default modalMixerSlice.reducer;