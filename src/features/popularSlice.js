import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPopular = createAsyncThunk(
  "popular/fetchPopular",
  async (_, thunkAPI) => {
    const type = thunkAPI.getState().popular.type;
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/popular?language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTA5YTQxMDRjOGI1ZWRhMzU0NGIyNDg4OGY1NzllYyIsIm5iZiI6MTc1MTM1OTY5MC4zMjQsInN1YiI6IjY4NjNhMGNhZjUwMzYyYjU1MWNjZDlmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWu4nsdqqgdzXpsw6Qo5h6XazHk752id5S5_1OrJ1x8",
        },
      }
    );
    return response.data.results;
  }
);

const popularSlice = createSlice({
  name: "popular",
  initialState: {
    type: "movie",
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopular.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopular.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPopular.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setType } = popularSlice.actions;
export default popularSlice.reducer;
