import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import SwitchButton from "./SwitchButton";
import CardSliderLoader from "./CardSliderLoader";

export default function CardSlider({
  title,
  labels = [],
  fetchThunk,
  selector,
  sliceKey,
  setTypeAction = null,
}) {
  console.log("CardSlider rendered");
  const dispatch = useDispatch();
  const stateSlice = useSelector(selector);
  console.log("CardSlider rendered");
  const { status, error } = stateSlice;
  const data = stateSlice[sliceKey];
  console.log("CardSlider rendered");

  const arrData = useMemo(() => {
    if (!data || data.length === 0) return [];
    const arr = [...data];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [data]);

  useEffect(() => {
    dispatch(fetchThunk());
    console.log("effect");
  }, [dispatch, fetchThunk, stateSlice?.type]);

  const handleSwitch = (label) => {
    if (!setTypeAction) return;
    const contentType = label.toLowerCase() === "tv" ? "tv" : "movie";
    dispatch(setTypeAction(contentType));

    //gpt
  };
  //

  return (
    <div className="py-6">
      <div className="flex items-center gap-10 px-6 mb-4 loading">
        <h2 className="text-xl text-black font-bold">{title}</h2>
        {labels.length > 0 && (
          <SwitchButton labels={labels} onSwitch={handleSwitch} />
        )}
      </div>

      {status === "loading" ? (
        <CardSliderLoader />
      ) : status === "failed" ? (
        <p className="text-red-500 px-6">Error: {error}</p>
      ) : arrData.length > 0 ? (
        <div className="flex overflow-x-auto gap-4 px-6 scrollbar-hide overflow-y-hidden">
          {arrData.map((movie) => (
            <Card key={movie.id} movie={movie} type={stateSlice.type} />
          ))}
        </div>
      ) : (
        <p className="text-white px-6">No movies found.</p>
      )}
    </div>
  );
}
