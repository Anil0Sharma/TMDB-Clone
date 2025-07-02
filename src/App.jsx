import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SearchBar2 from "./components/SearchBar2";
import WelcomeBanner from "./components/WelcomeBanner";
import CardSlider from "./components/CardSlider";
import TrailerCardSlider from "./components/TrailerCardSlider";
import { fetchNowPlaying } from "./features/nowPlayingSlice";
import {
  fetchPopular,
  setType as setPopularType,
} from "./features/popularSlice";
import JoinToday from "./components/JoinToday";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div>
        <WelcomeBanner />
        <div className="min-h-[300px]">
          <CardSlider
            title={"Trending"}
            labels={["today", "this week"]}
            fetchThunk={fetchNowPlaying}
            selector={(state) => state.nowPlaying}
            sliceKey={"movies"}
          />
          <CardSlider
            title={"What's Popular"}
            labels={["Movie", "Tv", "on rent", "In Theaters"]}
            fetchThunk={fetchPopular}
            selector={(state) => state.popular}
            sliceKey={"items"}
            setTypeAction={setPopularType}
          />
          <CardSlider
            title={"Free To Watch"}
            labels={["Movies", "TV"]}
            fetchThunk={fetchPopular}
            selector={(state) => state.popular}
            sliceKey={"items"}
            setTypeAction={setPopularType}
          />

          {/* //JOIN SECTION */}
          <JoinToday />
          {/* FOOTER */}
          <Footer />
          <TrailerCardSlider title={"Latest Trailer"} />
        </div>
      </div>
    </div>
  );
}
