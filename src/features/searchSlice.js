import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchCrew, resetCrew } from "./crewSlice";

export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async ({ query }) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTA5YTQxMDRjOGI1ZWRhMzU0NGIyNDg4OGY1NzllYyIsIm5iZiI6MTc1MTM1OTY5MC4zMjQsInN1YiI6IjY4NjNhMGNhZjUwMzYyYjU1MWNjZDlmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWu4nsdqqgdzXpsw6Qo5h6XazHk752id5S5_1OrJ1x8",
        },
      }
    );
    console.log(response);
    return response.data.results;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: [],
    status: "idle",
    error: null,
  },
  reducers: {
    resetSearch: (state) => {
      state.search = [];
      (state.status = "idle"), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.search = action.payload;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
