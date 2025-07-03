import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { clearDetail, fetchDetails } from "../features/detailSlice";
import Loader from "../components/Loader";

export default function DetailPage() {
  const { type, id } = useParams();
  const dispatch = useDispatch();
  const { item, status, error } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(fetchDetails({ type, id }));

    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, type, id]);

  console.log(item);
  if (status === "loading") return <Loader className="h-screen" />;
  if (status === "failed")
    return <p className="text-red-500">Error: {error}</p>;
  if (!item) return null;

  const {
    title,
    name,
    backdrop_path,
    poster_path,
    overview,
    vote_average,
    genres,
    tagline,
    release_date,
    first_air_date,
    runtime,
  } = item;

  const bgUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const disTitle = title || name;
  const date = release_date || first_air_date;
  const rating = Math.round(vote_average * 10);
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(3,3,3,0.9) 30%, rgba(3,3,3,0.6)), url(${bgUrl})`,
      }}
    >
      <div className="bg-white shadow-md px-10 py-3 text-sm font-semibold text-gray-700  mt-10 z-50">
        <div className="flex gap-6 justify-center">
          <button className="hover:text-blue-600 focus:outline-none focus:text-blue-600">
            Overview
          </button>
          <button className="hover:text-blue-600 focus:outline-none focus:text-blue-600">
            Media
          </button>
          <button className="hover:text-blue-600 focus:outline-none focus:text-blue-600">
            Fandom
          </button>
          <button className="hover:text-blue-600 focus:outline-none focus:text-blue-600">
            Share
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 px-10 py-12 text-white">
        <div className="w-full md:w-[300px]">
          <img
            src={posterUrl}
            alt={disTitle}
            className="rounded-lg shadow0lg w-full"
          />
        </div>

        <div className="flex flex-col justify-center w-full md:w-[70%]">
          <h1 className="text-4xl font-bold">
            {disTitle}
            <span className="text-gray-400 text-2xl">({date})</span>
          </h1>
          <p className="text-sm text-gray-300 mt-1">
            {date} • {runtime ? "min •" : ""}{" "}
            {genres?.map((g) => g.name).join(", ")}
          </p>

          <div className="flex items-center gap-4 mt-4">
            <div className="bottom-[-16px] left-2 w-10 h-10 rounded-full bg-white border-4 border-green-600 flex items-center justify-center text-xs font-bold text-green-700 shadow-lg">
              {rating}%
            </div>
            <span className="italic text-gray-300">{tagline}</span>
          </div>

          <h2 className="text-xl font-semibold mt-6">Overview</h2>
          <p className="mt-2 text-gray-200">{overview}</p>

          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Play Trailer
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-800">
              Add to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
