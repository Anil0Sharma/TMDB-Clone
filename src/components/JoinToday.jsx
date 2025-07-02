import React from "react";
import Button from "@mui/material/Button";

export default function JoinToday() {
  return (
    <div>
      <section className="relative w-full h-[200px] md:h-[300px]">
        <img
          src="https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Today</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
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
