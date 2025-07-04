import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTrailer, fetchTrailer } from "../features/trailerSlice";
import Loader from "./Loader";

export default function MovieTrailer({ type, id, onClose }) {
  const dispatch = useDispatch();
  const {
    item: trailerKey,
    status,
    error,
  } = useSelector((state) => state.trailer);

  useEffect(() => {
    dispatch(fetchTrailer({ type, id }));

    return () => {
      dispatch(clearTrailer());
    };
  }, [dispatch, type, id]);

  if (status === "loading") return <Loader className="h-screen" />;
  if (status === "failed")
    return <p className="text-red-500">Error: {error}</p>;
  if (!trailerKey) return <p className="text-white">Trailer not available.</p>;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center transition-opacity duration-300 animate-fadeIn">
      <button
        className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-400"
        onClick={onClose}
      >
        x
      </button>

      <div className="w-[90%] max-w-5xl h-[80%] transition-transform duration-300 transform animate-scaleIn">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="YouTube trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
