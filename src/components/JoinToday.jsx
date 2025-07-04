import React from "react";
import Button from "@mui/material/Button";

export default function JoinToday() {
  return (
    <div>
      <section className=" relative w-full h-[250px] md:h-[350px] lg:h-[300px]">
        <img
          src="https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-4 sm:px-6">
          <div className="text-white max-w-2xl">
            <h2 className="text-2xl md:text-4xl sm:text-3xl font-bold mb-3">
              Join Today
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-5 leading-relaxed">
              Get access to maintain your own <em>custom personal lists</em>,
              track what you've seen and search and filter for{" "}
              <em>what to watch next</em>—regardless if it's in theatres, on TV
              or available on popular streaming services like{" "}
              <strong>Netflix</strong>,<strong> Amazon Prime Video</strong>,{" "}
              <strong>Apple TV+</strong>, <strong>Crunchyroll</strong>, and{" "}
              <strong>JioHotstar</strong>.
            </p>
            <Button variant="contained">Sign Up</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
