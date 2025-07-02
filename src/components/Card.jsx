import React from "react";

export default function Card({ movie }) {
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const title = movie.title;
  const releaseDate = movie.release_date;
  const rating = Math.round(movie.vote_average * 10);
  return (
    <div className="min-w-[180px] bg-white rounded-xl overflow-hidden shadow-md relative text-black hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img
          src={poster}
          alt={title}
          className="rounded-xl w-full h-[270px] object-cover"
        />
        <div className="absolute bottom-[-16px] left-2 w-10 h-10 rounded-full bg-white border-4 border-green-600 flex items-center justify-center text-xs font-bold text-green-700 shadow-lg">
          {rating}%
        </div>
      </div>

      <div className="pt-6 pb-4 px-2">
        <h3 className="text-sm font-bold truncate">{title}</h3>
        <p className="xt-xs text-gray-500">{releaseDate}</p>
      </div>
    </div>
  );
}
