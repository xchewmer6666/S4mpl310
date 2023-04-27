import { configureStore } from "@reduxjs/toolkit";

import modalMixerReducer from '../components/Mixer/modalMixerSlice';
import bpmReducer from '../components/Bpm/bpmSlice';

export const store = configureStore({
  reducer: {
    modalMixer: modalMixerReducer,
    bpm: bpmReducer,
  },
});

