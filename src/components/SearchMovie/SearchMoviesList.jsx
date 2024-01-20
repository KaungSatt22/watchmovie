import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MovieList from "./MovieList";

const SearchMoviesList = ({
  searchMovies,
  onMoviesData,
  search,
  onSelectedID,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const apikey = import.meta.env.VITE_OMDB_API_KEY;
  useEffect(() => {
    let controller = new AbortController();
    let fetchSearchMovie = async () => {
      setIsLoading(true);
      let req = await fetch(
        `https://www.omdbapi.com/?apikey=${apikey}&s=${search}`,
        {
          signal: controller.signal,
        }
      );
      let data = await req.json();
      onMoviesData(data.Search);
      setIsLoading(false);
      return () => {
        container.abort();
      };
    };
    if (search.length > 3) {
      fetchSearchMovie();
    }
  }, [search]);
  return (
    <div className="bg-slate-700 rounded-lg overflow-y-scroll scroll-smooth no-scrollbar relative">
      <button
        className="text-white absolute right-0 bg-black w-10 h-10 text-xl rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && isLoading ? (
        <p className="text-white flex items-center justify-center h-full text-4xl font-bold">
          Loading ...
        </p>
      ) : (
        <MovieList
          searchMovies={searchMovies}
          onSelectedID={onSelectedID}
          search={search}
        />
      )}
    </div>
  );
};

export default SearchMoviesList;
