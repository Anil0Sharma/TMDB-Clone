import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { clearDetail, fetchDetails } from "../features/detailSlice";
import Loader from "../components/Loader";
import { GiExpand } from "react-icons/gi";
import MovieTrailer from "../components/MovieTrailer";
import { fetchCrew, resetCrew } from "../features/crewSlice";

import CastCard from "../components/CastCard";

export default function DetailPage() {
  const { type, id } = useParams();
  const dispatch = useDispatch();
  const { item, status, error } = useSelector((state) => state.detail);
  const crewState = useSelector((state) => state.crew);
  const crewStatus = crewState.status;
  const crewDetail = crewState.crewDetail;
  const castDetail = crewState.castDetail;
  const commonJobs = ["Director", "Screenplay", "Story", "Characters"];

  const filteredCrew = crewDetail.filter((member) =>
    commonJobs.includes(member.job)
  );

  const displayCrew = filteredCrew.slice(0, 6);
  const castPreview = castDetail.slice(0, 10);

  const [toggleTrailer, setToggleTrailer] = useState(false);
  useEffect(() => {
    dispatch(fetchDetails({ type, id }));
    dispatch(fetchCrew({ type, id }));

    return () => {
      dispatch(clearDetail());
      dispatch(resetCrew());
    };
  }, [dispatch, type, id]);

  console.log(item);
  if (status === "loading") return <Loader className="h-screen" />;
  if (status === "failed")
    return <p className="text-red-500">Error: {error}</p>;
  if (!item) return null;
  if (!crewDetail) return <p>Loading...</p>;
  if (!castDetail) return <p>Loading...</p>;
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
    status: movieStatus,
    original_language,
    budget,
    revenue,
  } = item;

  const bgUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const disTitle = title || name;
  const date = release_date || first_air_date;
  const rating = Math.round(vote_average * 10);

  function handleTrailerClick() {
    setToggleTrailer(!toggleTrailer);
  }
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
        <div className="w-full md:w-[300px] relative group">
          <img
            src={posterUrl}
            alt={disTitle}
            className="rounded-lg shadow-lg w-full"
          />
          <div className="absolute bg-black opacity-0 inset-0 rounded-lg group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <span>
              <a href="/">
                <GiExpand size={30} />
              </a>
            </span>
          </div>
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
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleTrailerClick}
            >
              Play Trailer
              {toggleTrailer ? <MovieTrailer type={type} id={id} /> : <></>}
            </button>

            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-800">
              Add to List
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4 mt-6 text-white">
            {displayCrew.map((person) => (
              <div key={person.credit_id}>
                <h3 className="font-bold">{person.name}</h3>
                <p className="text-sm">{person.job}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CAST SLIDER */}
      <div className="bg-white px-6 py-10 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Cast Section */}
          <div className="md:w-3/4">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Top Billed Cast
            </h2>
            <div className="flex gap-4 pr-4 pb-2 overflow-x-auto scrollbar-hide scroll-smooth ">
              {castDetail.slice(0, 9).map((cast) => (
                <div key={cast.id}>
                  <CastCard cast={cast} />
                </div>
              ))}
              <div className="flex items-center justify-center px-4 text-black font-semibold hover:underline cursor-pointer">
                View More →
              </div>
            </div>
          </div>

          {/* RIght Side */}
          <div className="md:w-1/4 shrink-0 text-sm text-black">
            <h2 className="text-lg font-semibold mb-4">Info</h2>
            <p className="mb-2">
              <strong>Status:</strong> {item.status || "Not Available"}
            </p>
            <p className="mb-2">
              <strong>Original Language:</strong>{" "}
              {item.original_language?.toUpperCase() || "N/A"}
            </p>
            <p className="mb-2">
              <strong>Budget:</strong>{" "}
              {item.budget
                ? `$${item.budget.toLocaleString()}`
                : "Not Available"}
            </p>
            <p className="mb-2">
              <strong>Revenue:</strong>{" "}
              {item.revenue
                ? `$${item.revenue.toLocaleString()}`
                : "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
