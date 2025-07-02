import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlaying } from "../features/nowPlayingSlice";
import SwitchButton from "./SwitchButton";

export default function CardSlider({ title, labels, bgimg }) {
  console.log("CardSlider rendered");
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.nowPlaying);
  console.log("CardSlider rendered");
  console.log("CardSlider rendered");
  console.log("CardSlider rendered");
  console.log(movies);
  useEffect(() => {
    dispatch(fetchNowPlaying());
  }, [dispatch]);

  if (status === "loading") return <p className="text-white">Loading...</p>;
  if (status === "failed")
    return <p className="text-red-500">Error: {error}</p>;

  console.log("movies:", movies);
  console.log("status:", status);
  return (
    <div className="">
      <div className="flex items-center gap-10 p-4">
        <h2 className="text-xl text-black font-bold mb-4 ml-20 pt-4">
          {title}
        </h2>
        <SwitchButton labels={labels} />
      </div>
      <div className="flex overflow-x-auto gap-4 pb-4 pl-10 scrollbar-hide">
        {movies?.length > 0 ? (
          movies?.map((movie) => <Card key={movie.id} movie={movie} />)
        ) : (
          <p className="text-white">No movies found</p>
        )}
      </div>
    </div>
  );
}
