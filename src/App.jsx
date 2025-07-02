import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SearchBar2 from "./components/SearchBar2";
import WelcomeBanner from "./components/WelcomeBanner";
import CardSlider from "./components/CardSlider";
import TrailerCardSlider from "./components/TrailerCardSlider";

export default function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div>
        <WelcomeBanner />
        <CardSlider title={"Trending"} labels={["today", "this week"]} />
        <CardSlider
          title={"What's Popular"}
          labels={["Streaming", "on tv", "on rent", "In Theaters"]}
        />
        <CardSlider title={"Free To Watch"} labels={["Movies", "TV"]} />
        <TrailerCardSlider title={"Latest Trailer"} />
      </div>
    </div>
  );
}
