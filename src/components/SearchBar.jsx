import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch, resetSearch } from "../features/searchSlice";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search, status, error } = useSelector((state) => state.search);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const displaySearch = search.slice(0, 5);
  // const searchNames = displaySearch.map((item) => {
  //   return item.title || item.name || "No name";
  // });

  console.log(displaySearch);
  useEffect(() => {
    if (searchText.trim() !== "") {
      const encodedQuery = encodeURIComponent(searchText.trim());
      dispatch(fetchSearch({ query: encodedQuery }));
    }

    // return () => {
    //   dispatch(resetSearch());
    // };
  }, [searchText, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetSearch());
    };
  }, [dispatch]);

  console.log(searchText);
  return (
    <div className={`w-full mt-10 transition-all duration-300 bg-white z-40`}>
      <div className="max-w-7xl h-12 mx-auto px-6 py-1.5">
        <div className="flex items-center justify-center rounded-full overflow-hidden px-4 py-2">
          <span className="text-gray-400 text-xl mr-2">
            <FaSearch />
          </span>
          <input
            type="text"
            value={searchText}
            placeholder="Search for a movie, TV show, person..."
            className="w-full outline-none text-gray-800 text-sm"
            onChange={handleChange}
          />
        </div>
      </div>
      {/* {searchText && (
        <div className="px-6 py-2">
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p className="text-red-500">{error}</p>}
          {displaySearch.map((data, index) => (
            <div key={index} className="text-gray-800">
              <img src="" alt="" />
              {data.name ? data.name : data.title}
            </div>
          ))}
        </div>
      )} */}
      {searchText && (
        <div className="divide-y">
          {status === "loading" && (
            <p className="text-gray-500 p-4 text-sm">Loading...</p>
          )}
          {status === "failed" && (
            <p className="text-red-500 p-4 text-sm">{error}</p>
          )}
          {displaySearch.length === 0 && status === "succeeded" && (
            <p className="text-gray-500 p-4 text-sm">No results found.</p>
          )}
          {displaySearch.map((item, index) => {
            const title = item.title || item.name || "No title";
            const imagePath =
              item.poster_path || item.profile_path
                ? `https://image.tmdb.org/t/p/w92${
                    item.poster_path || item.profile_path
                  }`
                : "https://via.placeholder.com/92x138?text=No+Image";

            const typeLabel =
              item.media_type === "movie"
                ? "Movie"
                : item.media_type === "tv"
                ? "TV Show"
                : "Person";

            return (
              <div
                key={index}
                onClick={() => {
                  if (typeLabel === "person") {
                    navigate(`/person/${item.id}`);
                  } else {
                    navigate(`/${item.media_type}/${item.id}`);
                  }
                }}
                className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all duration-200"
              >
                <img
                  src={imagePath}
                  alt={title}
                  className="w-10 h-10 object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold text-gray-800">{title}</p>
                  <p className="text-xs text-gray-500">{typeLabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
