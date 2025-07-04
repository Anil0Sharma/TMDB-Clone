// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// export default function PersonDetailPage() {
//   const { id } = useParams();
//   const [person, setPerson] = React.useState(null);

//   useEffect(() => {
//     async function fetchPerson() {
//       const res = await axios.get(`https://api.themoviedb.org/3/person/${id}`, {
//         headers: {
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTA5YTQxMDRjOGI1ZWRhMzU0NGIyNDg4OGY1NzllYyIsIm5iZiI6MTc1MTM1OTY5MC4zMjQsInN1YiI6IjY4NjNhMGNhZjUwMzYyYjU1MWNjZDlmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWu4nsdqqgdzXpsw6Qo5h6XazHk752id5S5_1OrJ1x8`,
//         },
//       });
//       setPerson(res.data);
//     }
//     fetchPerson();
//   }, [id]);

//   if (!person) return <p>Loading...</p>;

//   return (
//     <div className="p-10 text-gray-800">
//       <h1 className="text-3xl font-bold mb-2">{person.name}</h1>
//       <p className="italic text-sm text-gray-500">
//         {person.known_for_department} • Born: {person.birthday}
//       </p>
//       <p className="mt-4">{person.biography}</p>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GiExpand } from "react-icons/gi";

const PersonDetailPage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/person/${id}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTA5YTQxMDRjOGI1ZWRhMzU0NGIyNDg4OGY1NzllYyIsIm5iZiI6MTc1MTM1OTY5MC4zMjQsInN1YiI6IjY4NjNhMGNhZjUwMzYyYjU1MWNjZDlmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWu4nsdqqgdzXpsw6Qo5h6XazHk752id5S5_1OrJ1x8`,
            },
          }
        );
        setPerson(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPerson();
  }, [id]);

  if (!person)
    return <p className="text-center text-gray-600 p-8">Loading...</p>;

  const {
    name,
    profile_path,
    birthday,
    deathday,
    place_of_birth,
    biography,
    known_for_department,
    also_known_as,
    popularity,
  } = person;

  const bgUrl = `https://image.tmdb.org/t/p/original${profile_path}`;
  const profileUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500${profile_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(3,3,3,0.9) 30%, rgba(3,3,3,0.6)), url(${bgUrl})`,
      }}
    >
      {/* Navbar Section */}
      <div className="bg-white shadow-md px-10 py-3 text-sm font-semibold text-gray-700 mt-10 z-50">
        <div className="flex gap-6 justify-center">
          <button className="hover:text-blue-600 focus:outline-none">
            Overview
          </button>
          <button className="hover:text-blue-600 focus:outline-none">
            Media
          </button>
          <button className="hover:text-blue-600 focus:outline-none">
            Fandom
          </button>
          <button className="hover:text-blue-600 focus:outline-none">
            Share
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row gap-8 px-10 py-12 text-white">
        {/* Image */}
        <div className="w-full md:w-[300px] relative group">
          <img
            src={profileUrl}
            alt={name}
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

        {/* Text Info */}
        <div className="flex flex-col justify-center w-full md:w-[70%]">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-sm text-gray-300 mt-1">
            {known_for_department} • {birthday}{" "}
            {deathday ? ` - ${deathday}` : ""}
          </p>

          <div className="flex items-center gap-4 mt-4">
            <div className="w-10 h-10 rounded-full bg-white border-4 border-green-600 flex items-center justify-center text-xs font-bold text-green-700 shadow-lg">
              {Math.round(popularity)}%
            </div>
            <span className="italic text-gray-300">
              {place_of_birth || "Unknown origin"}
            </span>
          </div>

          <h2 className="text-xl font-semibold mt-6">Biography</h2>
          <p className="mt-2 text-gray-200 whitespace-pre-line">
            {biography || "No biography available."}
          </p>

          {/* Action Buttons (optional) */}
          <div className="mt-6 flex gap-4">
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
              Add to List
            </button>
          </div>

          {/* Known As */}
          {also_known_as?.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4 mt-6 text-white">
              {also_known_as.map((alias, i) => (
                <div key={i}>
                  <h3 className="font-bold">{alias}</h3>
                  <p className="text-sm text-gray-300">Also known as</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonDetailPage;
