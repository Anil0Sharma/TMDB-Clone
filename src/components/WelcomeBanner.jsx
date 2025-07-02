import React from "react";

const WelcomeBanner = () => {
  return (
    <section className="relative h-[300px] w-full">
      <img
        src="https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg"
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
