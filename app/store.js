import { configureStore } from "@reduxjs/toolkit";

import modalMixerReducer from '../components/ModalMixer/modalMixerSlice';

export const store = configureStore({
  reducer: {
    modalMixer: modalMixerReducer,
  },
});

