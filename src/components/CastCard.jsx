import React from "react";

export default function CastCard({ cast }) {
  const profileUrl = cast.profile_path
    ? `https://image.tmdb.org/t/p/w185${cast.profile_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  return (
    <div className="w-28 sm:w-32 shrink-0 flex flex-col items-center bg-white rounded shadow p-2">
      <img
        src={profileUrl}
        alt={cast.name}
        className="rounded-md object-cover w-full h-[140px]"
      />
      <h3 className="text-sm font-semibold mt-2 text-center">{cast.name}</h3>
      <p className="text-xs text-gray-600 text-center">{cast.character}</p>
    </div>
  );
}
