import { configureStore } from "@reduxjs/toolkit";
import nowPlayingReducer from "../features/nowPlayingSlice";
import popularSlice from "../features/popularSlice";
import detailReducer from "../features/detailSlice";
export const store = configureStore({
  reducer: {
    nowPlaying: nowPlayingReducer,
    popular: popularSlice,
    detail: detailReducer,
  },
});
