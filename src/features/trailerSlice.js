// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { fetchDetails } from "./detailSlice";

// export const fetchTrailer = createAsyncThunk(
//   "trailer/fetchTrailer",
//   async ({ type, id }) => {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`,
//       {
//         headers: {
//           accept: "application/json",
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTA5YTQxMDRjOGI1ZWRhMzU0NGIyNDg4OGY1NzllYyIsIm5iZiI6MTc1MTM1OTY5MC4zMjQsInN1YiI6IjY4NjNhMGNhZjUwMzYyYjU1MWNjZDlmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWu4nsdqqgdzXpsw6Qo5h6XazHk752id5S5_1OrJ1x8",
//         },
//       }
//     );
//     const results = response.data.results;
//     const trailer = results.find(
//         (vid)=> vid.type ==="Trailer" && vid.site === "YouTube"
//     );
//     return trailer?.key || null;
//   }
// );

// const trailerSlice = createSlice({
//   name: "trailer",
//   initialState: {
//     item: null,
//     status: "ideal",
//     error: null,
//   },
//   reducers: {
//     clearDetail: (state) => {
//       state.item = null;
//       state.status = "idle";
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTrailer.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchTrailer.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.item = action.payload;
//       })
//       .addCase(fetchTrailer.rejected, (state) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { clearDetail } = trailerSlice.actions;
// export default trailerSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrailer = createAsyncThunk(
  "trailer/fetchTrailer",
  async ({ type, id }) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTA5YTQxMDRjOGI1ZWRhMzU0NGIyNDg4OGY1NzllYyIsIm5iZiI6MTc1MTM1OTY5MC4zMjQsInN1YiI6IjY4NjNhMGNhZjUwMzYyYjU1MWNjZDlmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWu4nsdqqgdzXpsw6Qo5h6XazHk752id5S5_1OrJ1x8",
        },
      }
    );

    const results = response.data.results;
    const trailer = results.find(
      (vid) => vid.type === "Trailer" && vid.site === "YouTube"
    );

    return trailer?.key || null;
  }
);

const trailerSlice = createSlice({
  name: "trailer",
  initialState: {
    item: null,
    status: "idle",
    error: null,
  },
  reducers: {
    clearTrailer: (state) => {
      state.item = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrailer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrailer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.item = action.payload;
      })
      .addCase(fetchTrailer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearTrailer } = trailerSlice.actions;
export default trailerSlice.reducer;
