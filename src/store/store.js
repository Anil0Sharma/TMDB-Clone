import { configureStore } from "@reduxjs/toolkit";
import nowPlayingReducer from "../features/nowPlayingSlice";
import popularSlice from "../features/popularSlice";

export const store = configureStore({
  reducer: {
    nowPlaying: nowPlayingReducer,
    popular: popularSlice,
  },
});
