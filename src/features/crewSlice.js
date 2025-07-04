import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCrew = createAsyncThunk(
  "crew/fetchCrew",
  async ({ type, id }) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTA5YTQxMDRjOGI1ZWRhMzU0NGIyNDg4OGY1NzllYyIsIm5iZiI6MTc1MTM1OTY5MC4zMjQsInN1YiI6IjY4NjNhMGNhZjUwMzYyYjU1MWNjZDlmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWu4nsdqqgdzXpsw6Qo5h6XazHk752id5S5_1OrJ1x8",
        },
      }
    );
    console.log(response.data);
    return {
      cast: response.data.cast,
      crew: response.data.crew,
    };
  }
);

const crewSlice = createSlice({
  name: "crew",
  initialState: {
    castDetail: [],
    crewDetail: [],
    status: "ideal",
    error: null,
  },
  reducers: {
    resetCrew: (state) => {
      state.castDetail = [];
      state.crewDetail = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCrew.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCrew.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.castDetail = action.payload.cast;
        state.crewDetail = action.payload.crew;
      })
      .addCase(fetchCrew.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetCrew } = crewSlice.actions;
export default crewSlice.reducer;
