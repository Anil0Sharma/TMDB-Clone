import React from "react";
import SearchBar from "../components/SearchBar";
import WelcomeBanner from "../components/WelcomeBanner";
import CardSlider from "../components/CardSlider";
import TrailerCardSlider from "../components/TrailerCardSlider";
import JoinToday from "../components/JoinToday";

import {
  fetchPopular,
  setType as setPopularType,
} from "../features/popularSlice";
import { fetchNowPlaying } from "../features/nowPlayingSlice";

export default function HomePage() {
  return (
    <div>
      <SearchBar />
      <WelcomeBanner />
      <div className="min-h-[300px]">
        <CardSlider
          title={"What's Popular"}
          labels={["Movie", "Tv", "on rent", "In Theaters"]}
          fetchThunk={fetchPopular}
          selector={(state) => state.popular}
          sliceKey={"items"}
          setTypeAction={setPopularType}
        />
        <CardSlider
          title={"Trending"}
          labels={["today", "this week"]}
          fetchThunk={fetchNowPlaying}
          selector={(state) => state.nowPlaying}
          sliceKey={"movies"}
        />
        <CardSlider
          title={"Free To Watch"}
          labels={["Movies", "TV"]}
          fetchThunk={fetchPopular}
          selector={(state) => state.popular}
          sliceKey={"items"}
          setTypeAction={setPopularType}
        />
        <JoinToday />
        <TrailerCardSlider title={"Latest Trailer"} />
      </div>
    </div>
  );
}
