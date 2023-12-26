import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import SearchMoviesList from "./components/SearchMovie/SearchMoviesList";
import WatchMovies from "./components/WatchMovie/WatchMovies";

const App = () => {
  const [search, setSearch] = useState("");
  const [selectedID, setSelectedID] = useState(null);
  const [searchMovies, setSearchMovies] = useState([]);

  const handleMoviesData = (data) => {
    setSearchMovies(data || []);
  };
  const handleMovieSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSelectedID = (id) => {
    setSelectedID(id);
  };
  const handleRemoveID = () => {
    setSelectedID(null);
  };
  const totalFounedMovies = searchMovies?.length;
  return (
    <div className=" bg-black">
      <header>
        <Navbar
          search={search}
          onMovieSearch={handleMovieSearch}
          totalFounedMovies={totalFounedMovies}
        />
      </header>
      <section className="grid grid-rows-2 gap-2 md:grid-rows-1 md:grid-cols-2  h-[84vh] md:h-[90vh]  md:gap-5 ">
        <SearchMoviesList
          searchMovies={searchMovies}
          onMoviesData={handleMoviesData}
          search={search}
          onSelectedID={handleSelectedID}
        />
        <WatchMovies selectedID={selectedID} onRemoveID={handleRemoveID} />
      </section>
    </div>
  );
};

export default App;
