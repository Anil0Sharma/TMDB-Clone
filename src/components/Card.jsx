import React from "react";
import { Link } from "react-router-dom";

export default function Card({ movie, type }) {
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  if (!type) {
    type = "movie";
  }
  const title = movie.original_name || movie.title;
  const releaseDate = movie.first_air_date || movie.release_date;

  const rating = Math.round(movie.vote_average * 10);
  return (
    <Link to={`/${type}/${movie.id}`}>
      <div className="w-[140px] sm:w-[160px] md:w-[180px] bg-white overflow-hidden relative text-black hover:scale-105 transition-transform duration-300">
        <div className="relative">
          <img
            src={poster}
            alt={title}
            className="rounded-lg w-full h-[200px] sm:h-[240px] md:h-[270px] object-cover"
          />
          <div className="absolute bottom-[-12px] sm:bottom-[-14px] md:bottom-[-16px] left-2 w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 rounded-full bg-white border-2 sm:border-3 md:border-4 border-green-600 flex items-center justify-center text-[10px] sm:text-xs md:text-sm font-bold text-green-700 shadow-lg">
            {rating}%
          </div>
        </div>

        <div className="pt-6 pb-3 px-2">
          <h3 className="text-xs sm:text-sm md:text-base font-bold truncate">
            {title}
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-500">{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
}
