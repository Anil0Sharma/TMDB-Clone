import { configureStore } from "@reduxjs/toolkit";
import nowPlayingReducer from "../features/nowPlayingSlice";
import popularSlice from "../features/popularSlice";
import detailReducer from "../features/detailSlice";
import trailerReducer from "../features/trailerSlice";
import crewReducer from "../features/crewSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    nowPlaying: nowPlayingReducer,
    popular: popularSlice,
    detail: detailReducer,
    trailer: trailerReducer,
    crew: crewReducer,
    search: searchReducer,
  },
});
