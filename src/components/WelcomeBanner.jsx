import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlaying } from "../features/nowPlayingSlice";
const WelcomeBanner = () => {
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state) => state.nowPlaying);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNowPlaying());
    }
  }, [dispatch, status]);

  const bgImage = useMemo(() => {
    if (status !== "succeeded" || !movies.length) {
      return "https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg";
    }
    const random = Math.floor(Math.random() * movies.length);
    return `https://image.tmdb.org/t/p/original${movies[random]?.backdrop_path}`;
  }, [movies, status]);

  if (status !== "succeeded") {
    // Optional loading fallback
    return (
      <div className="h-[250px] md:h-[320px] bg-black flex items-center justify-center text-white text-lg">
        Loading banner...
      </div>
    );
  }
  return (
    <section className="relative h-[300px] w-full">
      <img
        src={bgImage}
        alt="Banner"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Welcome.</h1>
        <p className="text-lg md:text-xl font-medium">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>

        <div className="mt-10 flex max-w-5xl w-full rounded-full overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Search for a movie, tv show, person……"
            className="flex-1 px-6 py-4 text-black text-base outline-none bg-white relative"
          />
          <button className="absolute right-6  rounded-4xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-4 font-semibold">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;
