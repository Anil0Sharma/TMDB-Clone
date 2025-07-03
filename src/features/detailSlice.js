import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDetails = createAsyncThunk(
  "details/fetchDetails",
  async ({ type, id }) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTA5YTQxMDRjOGI1ZWRhMzU0NGIyNDg4OGY1NzllYyIsIm5iZiI6MTc1MTM1OTY5MC4zMjQsInN1YiI6IjY4NjNhMGNhZjUwMzYyYjU1MWNjZDlmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWu4nsdqqgdzXpsw6Qo5h6XazHk752id5S5_1OrJ1x8",
        },
      }
    );
    console.log(response.data);
    return response.data;
  }
);

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    item: null,
    status: "ideal",
    error: null,
  },
  reducers: {
    clearDetail: (state) => {
      state.item = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.item = action.payload;
      })
      .addCase(fetchDetails.rejected, (state) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearDetail } = detailSlice.actions;
export default detailSlice.reducer;
